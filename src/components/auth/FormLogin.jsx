import React, { useState } from "react";
import {
  guardarEnSessionStorage,
  obtenerDelSessionStorage,
} from "../../utils/localStorage";
import { NavLink, useNavigate } from "react-router-dom";
import show from "../../assets/passwordOn.svg";
import hide from "../../assets/passwordOff.svg";
import usser from "../../assets/usser-white.svg";
import lock from "../../assets/lock.svg";
import back from "../../assets/back.svg";

export default function FormLogin() {
  const listadoUsuarios = obtenerDelSessionStorage("usuarios");

  const navigate = useNavigate();

  const [usuarioCorreo, setUsuarioCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

    const usuarioValid = listadoUsuarios.find(
      (u) =>
        u.usuario === datosIngresados.usuarioCorreo ||
        u.correo === datosIngresados.usuarioCorreo
    );

    if (!usuarioValid) {
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    } else if (usuarioValid.password !== datosIngresados.password) {
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 5000);
    } else {
      navigate("/home");
      guardarEnSessionStorage("SavedUsser", usuarioValid);
    }
  }
  return (
    <>
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

            {showMessage ? (
              <>
                <p>Pusiste mal un dato</p>
              </>
            ) : (
              <></>
            )}

            <div>
              <p>Contraseña</p>
              <div className="inputs">
                <img src={lock} alt="" />
                <input
                  type={showPassword ? "password" : "text"}
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
      </section>
    </>
  );
}
