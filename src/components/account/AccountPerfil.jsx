import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  obtenerDelLocalStorage,
  obtenerDelSessionStorage,
} from "../../utils/localStorage";

export default function AccountPerfil() {
  const [usserName, setUssername] = useState("");
  const [url, setUrl] = useState("");
  const [usserUpdate, setUsserUpdate] = useState("");

  const ussers = obtenerDelLocalStorage("usuarios");
  const usuario = obtenerDelSessionStorage("SavedUsser");

  function handleSubmit(event) {
    event.preventDefault();

    const datosIngresados = { url, usserName };

    const editUsser = ussers.filter((usser) => {
      return usser.id !== id;
    });
  }

  const navigate = useNavigate();
  return (
    <section>
      <button onClick={() => navigate(-1)}>Volver</button>
      <img src={usuario.perfil} />
      <p>{usuario.usuario}</p>

      <form onSubmit={handleSubmit}>
        <input
          onChange={() => setUssername(event.target.value)}
          type="text"
          placeholder="Usuario"
        />
        <input
          onChange={() => setUrl(event.target.value)}
          type="text"
          placeholder="imagen"
        />
        <button>enviar</button>
      </form>
    </section>
  );
}
