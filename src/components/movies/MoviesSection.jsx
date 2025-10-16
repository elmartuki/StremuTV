import React from "react";
import { obtenerPeliculasOSerieLS } from "../../utils/localStorage";
import { NavLink } from "react-router-dom";

export default function MoviesSection() {
  const movies = obtenerPeliculasOSerieLS("Pelicula");

  return (
    <>
      {movies.map(({ nombre, id, url }) => {
        return (
          <>
            <article className="movie-card">
              <NavLink to={`/pelicula/${id}`} key={id}>
                <div className="movie-card_img">
                  <img src={url} />
                </div>
                <p>{nombre}</p>
              </NavLink>
            </article>
          </>
        );
      })}
    </>
  );
}
