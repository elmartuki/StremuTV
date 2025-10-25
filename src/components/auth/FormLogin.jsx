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

    const notExits = listadoUsuarios.some(
      (u) =>
        u.usuario === datosIngresados.usuarioCorreo ||
        u.correo === datosIngresados.usuarioCorreo
    );

    console.log(notExits);

    if (notExits) {
    } else {
      setAlertText("La cuenta que ingresaste no existe.");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
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
      setTimeout(() => setShowAlert(false), 5000);
    } else if (usuarioValid.password !== datosIngresados.password) {
      setShowMessage(true);
      setAlertText(
        "No se pudo iniciar sesión. Revisá tus datos e intentá otra vez."
      );
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);

      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    } else {
      setAlertText("Ingresaste correctamente.");
      setShowConfirm(true);
      setTimeout(() => setShowConfirm(false), 5000);

      setTimeout(() => navigate("/home"), 5000);

      guardarEnLocalStorage("UsserKey", usuarioValid);
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
  console.log("TopFive: ", topFive);

  let url;

  if (topFive && topFive.length > 0 && topFive[indice]) {
    ({ url } = topFive[indice]);
  }

  return (
    <>
      <AlertModal alertText={alertText} showAlert={showAlert} />
      <AlertConfirm alertText={alertText} showConfirm={showConfirm} />
      <div className="form-login-back">
        <button onClick={() => navigate(-1)}>
          <img src={back} alt="" />
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
                <img src={usser} alt="" />
                <input
                  type="text"
                  value={usuarioCorreo}
                  onChange={(event) => {
                    setUsuarioCorreo(event.target.value);
                  }}
                  placeholder="Ingrese su Usuario"
                />
              </div>
            </div>

            <div>
              <p>Contraseña</p>
              <div className="inputs">
                <img src={lock} alt="" />
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  value={password}
                  placeholder="Ingrese la contraseña"
                />
                <div className="show-password">
                  {showPassword ? (
                    <img onClick={handleHide} src={hide} alt="" />
                  ) : (
                    <img onClick={handleShow} src={show} alt="" />
                  )}
                </div>
              </div>
            </div>

            <button type="submit">Iniciar Sesion</button>

            <div className="help-login">
              <NavLink to="/" className="password">
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
          <img src={url} alt="" />
        </article>
      </section>
    </>
  );
}
