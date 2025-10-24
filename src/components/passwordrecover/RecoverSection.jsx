import React, { useState } from "react";
import { obtenerDelLocalStorage } from "../../utils/localStorage";

export default function RecoverSection() {
  const [contraseña, setContraseña] = useState("");

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
    <form onSubmit={handlePassword}>
      <h2 style={{ color: "white" }}>Generar nueva contraseña</h2>

      <input
        onChange={(e) => setContraseña(e.target.value)}
        value={contraseña}
        type="password"
        placeholder="Nueva contraseña"
        required
      />

      <button type="submit">Confirmar</button>
    </form>
  );
}
