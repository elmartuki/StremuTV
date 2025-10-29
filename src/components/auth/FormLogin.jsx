import React, { useEffect, useState } from "react";
import {
  guardarEnLocalStorage,
  obtenerDelLocalStorage,
  obtenerPeliculasOSerieLS,
} from "../../utils/localStorage";
import { NavLink, useNavigate } from "react-router-dom";
import show from "../../assets/passwordOn.svg";
import hide from "../../assets/passwordOff.svg";
import usser from "../../assets/usser-white.svg";
import lock from "../../assets/lock.svg";
import back from "../../assets/back.svg";
import AlertConfirm from "../alerts/AlertConfirm";
import AlertModal from "../alerts/AlertModal";

export default function FormLogin() {
  const listadoUsuarios = obtenerDelLocalStorage("usuarios") || [];

  const navigate = useNavigate();

  const [usuarioCorreo, setUsuarioCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [alertText, setAlertText] = useState("");

  function handleShow() {
    setShowPassword(true);
  }

  function handleHide() {
    setShowPassword(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const datosIngresados = {
      usuarioCorreo: usuarioCorreo,
      password: password,
    };

    const ADMIN_USUARIO = import.meta.env.VITE_ADMIN_USUARIO;
    const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
    const VITE_ADMIN_IMG = import.meta.env.VITE_ADMIN_IMG;

    if (
      ADMIN_USUARIO === datosIngresados.usuarioCorreo &&
      ADMIN_PASSWORD === password
    ) {
      setAlertText("Hola de nuevo Jefe. :)");
      setShowConfirm(true);
      setTimeout(() => setShowConfirm(false), 3000);

      const addminKey = {
        usuario: ADMIN_USUARIO,
        perfil: VITE_ADMIN_IMG,
        rol: "admin",
      };
      guardarEnLocalStorage("UsserKey", addminKey);
      setTimeout(() => navigate("/admin"), 3000);
    } else {
      const notExits = listadoUsuarios.some(
        (u) =>
          u.usuario === datosIngresados.usuarioCorreo ||
          u.correo === datosIngresados.usuarioCorreo
      );

      if (notExits) {
      } else {
        setAlertText("La cuenta que ingresaste no existe.");
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
        return;
      }

      const usuarioValid = listadoUsuarios.find(
        (u) =>
          u.usuario === datosIngresados.usuarioCorreo ||
          u.correo === datosIngresados.usuarioCorreo
      );

      if (!usuarioValid) {
        setAlertText(
          "No se pudo iniciar sesión. Revisá tus datos e intentá otra vez."
        );
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);
      } else if (usuarioValid.password !== datosIngresados.password) {
        setShowMessage(true);
        setAlertText(
          "No se pudo iniciar sesión. Revisá tus datos e intentá otra vez."
        );
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 3000);

        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
      } else {
        const usserList = obtenerDelLocalStorage("usuarios") || [];

        const usuarioActual =
          usserList.find((u) => u.id === usuarioValid.id) || usuarioValid;

        guardarEnLocalStorage("UsserKey", usuarioActual);

        const accepTyc = obtenerDelLocalStorage("UsserKey");

        const arebaned = obtenerDelLocalStorage("UsserKey");

        if (arebaned.baneado === true) {
          setAlertText("No puedes ingresar, ya que fuiste baneado.");
          setShowAlert(true);
          setTimeout(() => setShowAlert(false), 3000);
          setTimeout(() => navigate("/login"), 3000);
          return;
        } else {
          if (accepTyc.tyc === true) {
            if (usuarioActual.subActiva) {
              setTimeout(() => navigate("/home"), 3000);
              setAlertText("Ingresaste correctamente.");
              setShowConfirm(true);
              setTimeout(() => setShowConfirm(false), 3000);
            } else {
              setTimeout(() => navigate("/suscripciones"), 3000);
              setAlertText("Ingresaste correctamente.");
              setShowConfirm(true);
              setTimeout(() => setShowConfirm(false), 3000);
            }
          } else {
            setAlertText("No se puede ingresar porque no aceptaste los TyC.");
            setShowAlert(true);
            setTimeout(() => setShowAlert(false), 3000);
            setTimeout(() => navigate("/"), 3000);
          }
        }
      }
    }
  }

  const [indice, setIndice] = useState(0);

  const movieList = obtenerPeliculasOSerieLS("Serie");

  const topFive = movieList.slice(10, 30);

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
      <AlertModal alertText={alertText} showAlert={showAlert} />
      <AlertConfirm alertText={alertText} showConfirm={showConfirm} />
      <div className="form-login-back">
        <button onClick={() => navigate(-1)}>
          <img src={back} alt="boton de volver para atras" />
          <p>Volver</p>
        </button>
      </div>
      <section className="form-login-section">
        <article>
          <h2 className="title-login">StremuTV</h2>
          <form onSubmit={handleSubmit} className="form-login">
            <div>
              <p>Email o nombre de usuario</p>
              <div className="inputs">
                <img src={usser} alt="icono de usuario" />
                <input
                  type="text"
                  value={usuarioCorreo}
                  maxLength="40"
                  onChange={(event) => {
                    setUsuarioCorreo(event.target.value.trim());
                  }}
                  placeholder="Ingrese su Usuario"
                />
              </div>
            </div>

            <div>
              <p>Contraseña</p>
              <div className="inputs">
                <img src={lock} alt="icono de contraseña" />
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={(event) => {
                    setPassword(event.target.value.trim());
                  }}
                  value={password}
                  placeholder="Ingrese la contraseña"
                  maxLength={20}
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

            <button type="submit">Iniciar Sesion</button>

            <div className="help-login">
              <NavLink to="/password/:id" className="password">
                ¿Olvidaste tu contraseña?
              </NavLink>
              <p>
                ¿No tienes cuenta?{" "}
                <NavLink to="/registro" className="register">
                  Regístrate
                </NavLink>
              </p>
            </div>
          </form>
        </article>

        <article className="form-login-bg">
          <img src={url} alt={nombre} />
        </article>
      </section>
    </>
  );
}
