import { useEffect, useState } from "react";
import {
  agregarListado,
  obtenerDelLocalStorage,
  obtenerPeliculasOSerieLS,
} from "../../utils/localStorage";
import { NavLink } from "react-router-dom";

export default function Movies() {
  const movieList = obtenerPeliculasOSerieLS("Pelicula") || [];
  const moviesRandom = movieList.sort(() => Math.random() - 0.5);

  const [moviesList, setMovieList] = useState([]);
  const [agregar, setAgregar] = useState();

  useEffect(() => {
    const agregar = agregarListado("MoviesSeries");
    setAgregar(agregar);
  }, []);

  useEffect(() => {
    const moviesList = obtenerDelLocalStorage("MoviesSeries");
    setMovieList(moviesList);
  }, []);

  return (
    <>
      {moviesRandom.map(({ id, nombre, url }) => (
        <NavLink to={`/pelicula/${id}`} className="movies-card-home" key={id}>
          <div className="movies-card-home_img">
            <img src={url} alt={nombre} />
          </div>
          <div className="movies-card-home_title">
            <p>{nombre}</p>
          </div>
        </NavLink>
      ))}
    </>
  );
}
