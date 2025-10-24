import React, { useState } from "react";
import { obtenerDelLocalStorage } from "../../utils/localStorage";

export default function RecoverSection() {
  const [contraseña, setContraseña] = useState("");
  function handlePassword(event) {
    event.preventDefault();
    const listadoUsuario = obtenerDelLocalStorage("usuarios");

    if (listadoUsuario.length === 0) {
      alert("No hay usuarios registrados");
      return;
    }
    const [usuario] = listadoUsuario;
    if (usuario.password === contraseña) {
      alert("Esta contraseña ya existe, elige otra diferente");
    }
    usuario.password = contraseña;
    
    localStorage.setItem("usuarios", JSON.stringify([usuario]));
    alert("Contraseña nueva guardada con exito");
    setContraseña("");
  }

  return (
    <form onSubmit={handlePassword}>
      <h2 style={{ color: "white" }}>Generar nueva contraseña</h2>
      <input
        onChange={(e) => setContraseña(e.target.value)}
        type="text"
        placeholder="Nueva contraseña"
      />
      <button>Confirmar</button>
    </form>
  );
}
