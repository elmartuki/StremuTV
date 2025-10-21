import React, { useState } from "react";
import {
  guardarEnSessionStorage,
  obtenerDelSessionStorage,
} from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
  const listadoUsuarios = obtenerDelSessionStorage("usuarios");

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const datosIngresados = {
      usuario: usuario,
      correo: correo,
      password: password,
    };
    const usuarioEncontrado = listadoUsuarios.find((usser) => {
      return (
        usser.usuario === datosIngresados.usuario &&
        usser.correo === datosIngresados.correo &&
        usser.password === datosIngresados.password &&
        usser.password === datosIngresados.password
      );
    });

    if (usuarioEncontrado) {
      navigate("/");
      guardarEnSessionStorage("SavedUsser", usuarioEncontrado);
    } else {
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(event) => {
          setUsuario(event.target.value);
        }}
        placeholder="Ingrese su Usuario"
      />
      <input
        type="email"
        onChange={(event) => {
          setCorreo(event.target.value);
        }}
        value={correo}
        placeholder="Ingrese su Correo"
      />
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        value={password}
        placeholder="Ingrese la contraseña"
      />
      <button type="submit">Iniciar Sesion</button>
    </form>
  );
}
