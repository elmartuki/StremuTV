import React, { useEffect, useState } from "react";
import {
  obtenerDelLocalStorage,
  obtenerPeliculasOSerieLS,
} from "../../utils/localStorage";
import show from "../../assets/passwordOn.svg";
import hide from "../../assets/passwordOff.svg";
import back from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";

export default function RecoverSection() {
  const [contraseña, setContraseña] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function handleShow() {
    setShowPassword(true);
  }

  function handleHide() {
    setShowPassword(false);
  }
  function handlePassword(event) {
    event.preventDefault();

    const listadoUsuarios = obtenerDelLocalStorage("usuarios") || [];

    if (listadoUsuarios.length === 0) {
      alert("No hay usuarios registrados");
      return;
    }

    const [usuario] = listadoUsuarios;

    if (usuario.password === contraseña) {
      alert("⚠️ Esta contraseña ya existe, elige otra diferente");
      return;
    }

    usuario.password = contraseña;
    localStorage.setItem("usuarios", JSON.stringify([usuario]));

    console.log("✅ Contraseña nueva guardada con éxito");
    setTimeout(() => {
      window.location.href =
        "https://trabajo-jygdvrifg-elmartukis-projects.vercel.app/login";
    }, 2000);
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

  if (topFive && topFive.length > 0 && topFive[indice]) {
    ({ url } = topFive[indice]);
  }

  return (
    <>
      <div className="form-login-back">
        <button onClick={() => navigate("/login")}>
          <img src={back} alt="" />
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

            <button type="submit">Enviar correo</button>
          </form>
        </article>
        <article className="form-login-bg">
          <img src={url} alt="" />
        </article>
      </section>
    </>
  );
}