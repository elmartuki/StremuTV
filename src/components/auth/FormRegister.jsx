import React, { useEffect, useState } from "react";
import {
  guardarEnLocalStorage,
  guardarEnSessionStorage,
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

    const nuevoUsuario = { usuario, perfil, correo, password, repeatPassword };

    if (password === repeatPassword) {
      guardarEnSessionStorage("usuarios", nuevoUsuario);
      alert("si se pudio crear la cuenta");
      setUsuario("");
      setCorreo("");
      setPerfil("");
      setPassword("");
      setRepeatPassword("");

      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } else {
      alert("no se pudio crear la cuenta");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(event) => setUsuario(event.target.value)}
        type="text"
        placeholder="Usuario"
        value={usuario}
        required
      />
      <input
        onChange={(event) => setPerfil(event.target.value)}
        type="text"
        placeholder="Perfil"
        value={perfil}
        required
      />
      <input
        onChange={(event) => setCorreo(event.target.value)}
        type="email"
        placeholder="Correo"
        value={correo}
        required
      />
      <input
        onChange={(event) => setPassword(event.target.value)}
        type="password"
        placeholder="Contraseña"
        value={password}
        required
      />
      <input
        onChange={(event) => setRepeatPassword(event.target.value)}
        type="password"
        placeholder="Repite la contraseña"
        value={repeatPassword}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
