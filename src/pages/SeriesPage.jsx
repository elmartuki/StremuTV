import React from "react";
import { obtenerPeliculasOSerieLS } from "../utils/localStorage";

export default function SeriesPage() {
  const filteredMovies = obtenerPeliculasOSerieLS("Serie");

  return (
    <>
      {filteredMovies.map((movie, index) => {
        const { nombre, tipo, genero, descripcion, url } = movie;
        return (
          <article key={index}>
            <p>{nombre}</p>
            <p>{tipo}</p>
            <p>{genero}</p>
            <p>{descripcion}</p>
            <p>{url}</p>
          </article>
        );
      })}
    </>
  );
}
