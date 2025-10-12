import React, { useState } from "react";
import { obtenerDelLocalStorage } from "../../utils/localStorage";

export default function FormLogin() {
  const listadoUsuarios = obtenerDelLocalStorage("usuarios");

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

    const usuarioEncontrado = listadoUsuarios.find((user) => {
      return (
        user.usuario === usuario &&
        user.correo === correo &&
        user.password === password
      );
    });

    if (usuarioEncontrado) {
      alert("Ingresaste correctamente");
    } else {
      alert("Ingresaste mal algun dato");
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
