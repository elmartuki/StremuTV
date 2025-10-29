import React, { useEffect, useState } from "react";
import {
  guardarEnLocalStorage,
  obtenerDelLocalStorage,
  obtenerPeliculasOSerieLS,
} from "../../utils/localStorage";
import show from "../../assets/passwordOn.svg";
import hide from "../../assets/passwordOff.svg";
import back from "../../assets/back.svg";
import { useNavigate, useParams } from "react-router-dom";
import AlertModal from "../alerts/AlertModal";
import AlertConfirm from "../alerts/AlertConfirm";

export default function RecoverSection() {
  const [contraseña, setContraseña] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [alertText, setAlertText] = useState("");

  const navigate = useNavigate();

  const { id } = useParams();

  function handleShow() {
    setShowPassword(true);
  }

  function handleHide() {
    setShowPassword(false);
  }
  function handlePassword(event) {
    event.preventDefault();

    const listadoUsuarios = obtenerDelLocalStorage("usuarios");

    const existeContraseña = listadoUsuarios.find((usuario) => {
      return usuario.password === contraseña;
    });

    if (existeContraseña) {
      setAlertText("Ingresaste la misma contraseña.");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      const actualizarContrasenia = listadoUsuarios.find((usser) => {
        return Number(usser.id) === Number(id);
      });

      const contraseniaNueva = {
        ...actualizarContrasenia,
        password: contraseña,
      };

      const actualizarListado = listadoUsuarios.map((usuario) => {
        return Number(usuario.id) === Number(contraseniaNueva.id)
          ? contraseniaNueva
          : usuario;
      });

      guardarEnLocalStorage("usuarios", actualizarListado);

      setAlertText("Se actualizo la contraseña exitosamente.");
      setShowConfirm(true);
      setTimeout(() => setShowConfirm(false), 3000);

      setTimeout(() => {
        navigate("https://stremutv.vercel.app/login");
      }, 3000);
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
      <AlertModal alertText={alertText} showAlert={showAlert} />
      <AlertConfirm alertText={alertText} showConfirm={showConfirm} />
      <div className="form-login-back">
        <button onClick={() => navigate("/login")}>
          <img src={back} alt="boton para volver para atras" />
          <p>Volver</p>
        </button>
      </div>
      <section className="form-login-section">
        <article className="form-recover">
          <div className="img"></div>

          <h2 className="title-password">Generar nueva contraseña</h2>

          <form onSubmit={handlePassword} className="form-password">
            <div className="container-recover">
              <div className="input-recover">
                <input
                  type={showPassword ? "text" : "password"}
                  minLength={8}
                  maxLength={20}
                  required
                  onChange={(event) => {
                    setContraseña(event.target.value);
                  }}
                  value={contraseña}
                  placeholder="Ingrese la contraseña"
                />
                <div className="show-password">
                  {showPassword ? (
                    <img
                      onClick={handleHide}
                      src={hide}
                      alt="Ocultar contraseña"
                    />
                  ) : (
                    <img
                      onClick={handleShow}
                      src={show}
                      alt="Mostrar contraseña"
                    />
                  )}
                </div>
              </div>
            </div>

            <button type="submit">Guardar</button>
          </form>
        </article>
        <article className="form-login-bg">
          <img src={url} alt={nombre} />
        </article>
      </section>
    </>
  );
}
