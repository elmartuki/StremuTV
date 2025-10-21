import React, { useState } from "react";
import {
  agregarEnSessionStorage,
  obtenerDelSessionStorage,
} from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";

export default function FormRegister() {
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [perfil, setPerfil] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const nuevoUsuario = {
      id: Date.now(),
      usuario,
      perfil,
      correo,
      password,
    };

    if (password === repeatPassword) {
      agregarEnSessionStorage("usuarios", nuevoUsuario);
      alert("Si se pudio crear la cuenta");

      setUsuario("");
      setCorreo("");
      setPerfil("");
      setPassword("");
      setRepeatPassword("");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } else {
      alert("No se pudio crear la cuenta");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setUsuario(e.target.value)}
        type="text"
        placeholder="Usuario"
        value={usuario}
        required
      />
      <input
        onChange={(e) => setPerfil(e.target.value)}
        type="text"
        placeholder="Perfil"
        value={perfil}
        required
      />
      <input
        onChange={(e) => setCorreo(e.target.value)}
        type="email"
        placeholder="Correo"
        value={correo}
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Contraseña"
        value={password}
        required
      />
      <input
        onChange={(e) => setRepeatPassword(e.target.value)}
        type="password"
        placeholder="Repite la contraseña"
        value={repeatPassword}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
