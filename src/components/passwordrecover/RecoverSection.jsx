import React, { useState } from "react";
import { obtenerDelLocalStorage } from "../../utils/localStorage";
import show from "../../assets/passwordOn.svg";
import hide from "../../assets/passwordOff.svg";

export default function RecoverSection() {
  const [contraseña, setContraseña] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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

  return (
    <form onSubmit={handlePassword} className="form-recover">
      <article className="article-recover">
        <h2 className="title-recover" style={{ color: "white" }}>
          Generar nueva contraseña
        </h2>
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
                <img onClick={handleHide} src={hide} alt="" />
              ) : (
                <img onClick={handleShow} src={show} alt="" />
              )}
            </div>
          </div>
        </div>

        <div className="button-recover">
          <button type="submit">Guardar</button>
        </div>
      </article>
    </form>
  );
}
