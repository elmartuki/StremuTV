import React, { use, useState } from "react";
import { guardarEnLocalStorage } from "../utils/localStorage";

export default function AdminPage() {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [genero, setGenero] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [url, setURL] = useState("");

  const data = {
    nombre: nombre,
    fecha: fecha,
    genero: genero,
    tipo: tipo,
    descripcion: descripcion,
    url: url,
  };
  function obtenerDatos(e) {
    e.preventDefault();

    guardarEnLocalStorage("crudPeliculas",data)
  }

  return (
    <>
      <form onSubmit={obtenerDatos}>
        <input
          type="text"
          onChange={(event) => {
            setNombre(event.target.value);
          }}
          value={nombre}
          placeholder="Nombre"
        />
        <label>Ingrese la fecha de estreno</label>
        <input
          type="date"
          onChange={(event) => {
            setFecha(event.target.value);
          }}
          value={fecha}
          placeholder=""
        />
        <label>Genero</label>
        <select
          onChange={(event) => {
            setGenero(event.target.value);
          }}
          value={genero}
        >
          <option value="ciencia-ficcion">Ciencia Ficción</option>
          <option value="Terror">Terror</option>
          <option value="Aventura">Aventura</option>
          <option value="Documental">Documental</option>
          <option value="Drama">Drama</option>
          <option value="Musical">Musical</option>
          <option value="Comedia">Comedia</option>
        </select>
        <label>Tipo</label>
        <select
          onChange={(event) => {
            setTipo(event.target.value);
          }}
          value={tipo}
        >
          <option value="Pelicula">Pelicula</option>
          <option value="Serie">Serie</option>
        </select>
        <label>Agrega una descripcion</label>
        <textarea
          onChange={(event) => {
            setDescripcion(event.target.value);
          }}
          value={descripcion}
        ></textarea>
        <label>Foto de portada</label>
        <input
          type="text"
          onChange={(event) => {
            setURL(event.target.value);
          }}
          value={url}
        />
        <button>Enviar</button>
      </form>
    </>
  );
}
