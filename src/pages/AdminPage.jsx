import React, { useEffect, useState } from "react";
import {
  guardarEnLocalStorage,
  obtenerDelLocalStorage,
} from "../utils/localStorage";

export default function AdminPage() {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [genero, setGenero] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [url, setURL] = useState("");

  const [movieList, setMovieList] = useState([]);
  const [editMovie, setEditMovie] = useState(null);

  useEffect(() => {
    const moviesList = obtenerDelLocalStorage("crudPeliculas", []);
    setMovieList(moviesList);
  }, []);

  useEffect(() => {
    guardarEnLocalStorage("crudPeliculas", movieList);
  }, [movieList]);

  function obtenerDatos(e) {
    e.preventDefault();
    const data = {
      id: editMovie ? editMovie : Date.now(),
      nombre,
      fecha,
      genero,
      tipo,
      descripcion,
      url,
    };

    if (editMovie) {
      const updatedMovieList = movieList.map((movie) => {
        return movie.id === editMovie ? data : movie;
      });
      setMovieList(updatedMovieList);
      setEditMovie(null);
    } else {
      const nuevaLista = [...movieList, data];
      setMovieList(nuevaLista);
    }

    setNombre("");
    setFecha("");
    setGenero("");
    setTipo("");
    setDescripcion("");
    setURL("");
  }

  function movieToEdit(movie) {
    setNombre(movie.nombre);
    setFecha(movie.fecha);
    setGenero(movie.genero);
    setTipo(movie.tipo);
    setDescripcion(movie.descripcion);
    setURL(movie.url);
    setEditMovie(movie.id);
  }

  function deleteElement(id) {
    const confirmar = confirm(
      "Estas seguro que quieres eliminar esta pelicula?"
    );
    if (confirmar) {
      const listadoNuevo = movieList.filter((movie) => {
        return movie.id !== id;
      });
      setMovieList(listadoNuevo);
    }
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
          <option disabled>Seleccionar</option>
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

      <section className="crud-table">
        {movieList.map((movie) => {
          const { id, nombre, fecha, genero, tipo, descripcion } = movie;
          return (
            <article key={id} className="crud-table">
              <div>
                <p>{nombre}</p>
              </div>

              <div>
                <p>{fecha}</p>
              </div>
              <div>
                <p>{genero}</p>
              </div>

              <div>
                <p>{tipo}</p>
              </div>

              <div>
                <p>{descripcion}</p>
              </div>

              <button onClick={() => movieToEdit(movie)}>Editar</button>
              <button onClick={() => deleteElement(movie.id)}>Eliminar</button>
            </article>
          );
        })}
      </section>
    </>
  );
}
