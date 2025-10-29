import React, { useEffect, useState } from "react";
import {
  agregarAlLocalStorage,
  obtenerDelLocalStorage,
  obtenerPeliculasOSerieLS,
} from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import personAdd from "../../assets/personAdd.svg";
import back from "../../assets/back.svg";
import show from "../../assets/passwordOn.svg";
import hide from "../../assets/passwordOff.svg";
import AlertModal from "../alerts/AlertModal";
import AlertConfirm from "../alerts/AlertConfirm";

export default function FormRegister() {
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [perfil, setPerfil] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordTwo, setShowPasswordTwo] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [alertText, setAlertText] = useState("");

  const navigate = useNavigate();

  function showPerfil() {
    setShowPreview(true);
  }

  function handleShow() {
    setShowPassword(true);
  }

  function handleHide() {
    setShowPassword(false);
  }

  function handleShowTwo() {
    setShowPasswordTwo(true);
  }

  function handleHideTwo() {
    setShowPasswordTwo(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const listadoUsuarios = obtenerDelLocalStorage("usuarios") || [];

    const nuevoUsuario = {
      baneado: false,
      id: Date.now(),
      usuario: usuario.trim(),
      perfil: perfil.trim(),
      correo: correo.trim().toLowerCase(),
      password,
      rol: "usuario",
    };

    const existeCorreo = listadoUsuarios.find(
      (u) => u.correo === nuevoUsuario.correo
    );

    const existeUsuario = listadoUsuarios.find(
      (u) => u.usuario === nuevoUsuario.usuario
    );

    if (existeCorreo) {
      setAlertText("El correo que ingresaste ya existe.");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else if (existeUsuario) {
      setAlertText("El usuario que ingresaste ya existe.");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else if (password !== repeatPassword) {
      setAlertText("Las contraseñas no coinciden.");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      agregarAlLocalStorage("usuarios", nuevoUsuario);

      setAlertText("Se creó la cuenta exitosamente.");
      setShowConfirm(true);
      setTimeout(() => setShowConfirm(false), 3000);

      setUsuario("");
      setCorreo("");
      setPerfil("");
      setPassword("");
      setRepeatPassword("");

      setTimeout(() => navigate("/termsuse"), 3000);
    }
  }

  const [indice, setIndice] = useState(0);

  const movieList = obtenerPeliculasOSerieLS("Serie");

  const topFive = movieList.slice(30, 60);

  useEffect(() => {
    const reset = setTimeout(() => {
      if (indice < 4) {
        setIndice(indice + 1);
      } else if (indice > 0) {
        setIndice(0);
        clearInterval();
      }
    }, 8000);

    if (indice.lenght === 0) {
      reset(reset);
    }
  }, [indice]);

  let url;
  let nombre;

  if (topFive && topFive.length > 0 && topFive[indice]) {
    ({ url, nombre } = topFive[indice]);
  }

  return (
    <>
      <AlertModal showAlert={showAlert} alertText={alertText} />
      <AlertConfirm showConfirm={showConfirm} alertText={alertText} />
      <div className="form-login-back">
        <button onClick={() => navigate("/")}>
          <img src={back} alt="boton de volver para atras" />
          <p>Volver</p>
        </button>
      </div>

      <section className="form-login-section">
        <article className="form-login-bg">
          <img src={url} alt={nombre} />
        </article>

        <article>
          <div className="form-login-topbar">
            {perfil ? (
              <img
                style={{ padding: "0px" }}
                src={perfil}
                alt="imagen de perfil del usuario"
              />
            ) : (
              <img src={personAdd} alt="icono de añadir usuario" />
            )}

            <h2 className="title-login">Registrate</h2>
          </div>

          <form onSubmit={handleSubmit} className="form-login">
            <div>
              <p>Nombre de usuario</p>
              <div className="inputs">
                <input
                  onChange={(e) => setUsuario(e.target.value.trim())}
                  type="text"
                  placeholder="Usuario"
                  value={usuario}
                  minLength="2"
                  maxLength="20"
                  pattern="^[a-zA-Z0-9_]{2,20}$"
                  title="Solo letras, números y guiones bajos. Entre 2 y 20 caracteres."
                  required
                  className="inputs"
                />
              </div>
            </div>
            <div>
              <p>Foto de perfil</p>
              <div className="inputs">
                <input
                  onChange={(e) => setPerfil(e.target.value.trim())}
                  type="text"
                  placeholder="Perfil (URL o nombre)"
                  value={perfil}
                  maxLength={500}
                  pattern="https?://.+"
                  title="Debe ser una URL válida que comience con http:// o https://"
                  required
                  className="inputs"
                />
              </div>
            </div>
            <div>
              <p>Correo</p>
              <div className="inputs">
                <input
                  onChange={(e) => setCorreo(e.target.value.trim())}
                  type="email"
                  placeholder="Correo"
                  value={correo}
                  minLength="10"
                  maxLength="40"
                  required
                  className="inputs"
                />
              </div>
            </div>
            <div>
              <p>Contraseña</p>
              <div className="inputs">
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value.trim())}
                  placeholder="Contraseña"
                  value={password}
                  minLength={8}
                  maxLength={20}
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]{8,20}$"
                  title="Debe tener entre 8 y 20 caracteres, incluyendo al menos una mayúscula, una minúscula, un número y un símbolo."
                  required
                  className="inputs"
                />

                <div className="show-password">
                  {showPassword ? (
                    <img
                      onClick={handleHide}
                      src={hide}
                      alt="icono de ocultar contraseña"
                    />
                  ) : (
                    <img
                      onClick={handleShow}
                      src={show}
                      alt="icono de mostrar contraseña"
                    />
                  )}
                </div>
              </div>
            </div>
            <div>
              <p>Repite la contraseña</p>
              <div className="inputs">
                <input
                  type={showPasswordTwo ? "text" : "password"}
                  onChange={(e) => setRepeatPassword(e.target.value.trim())}
                  placeholder="Repite la contraseña"
                  value={repeatPassword}
                  maxLength={20}
                  required
                />
                <div className="show-password">
                  {showPasswordTwo ? (
                    <img
                      onClick={handleHideTwo}
                      src={hide}
                      alt="icono de ocultar contraseña"
                    />
                  ) : (
                    <img
                      onClick={handleShowTwo}
                      src={show}
                      alt="icono de mostrar contraseña"
                    />
                  )}
                </div>
              </div>
            </div>

            <button type="submit">Registrar</button>
          </form>
        </article>
      </section>
    </>
  );
}
