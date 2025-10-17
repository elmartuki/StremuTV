import { obtenerPeliculasOSerieLS } from "../../utils/localStorage";
import { NavLink } from "react-router-dom";

export default function Movies() {
  const movieList = obtenerPeliculasOSerieLS("pelicula") || [];
  const moviesRandom = movieList.sort(() => Math.random() - 0.5);

  return (
    <>
      {moviesRandom.map(({ id, nombre, url }) => (
        <NavLink

          to={`/pelicula/${id}`}
          className="movies-card-home"
          key={id}
        >
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
