import { filtrarYMostrar } from "../../utils/localStorage";
import { NavLink } from "react-router-dom";

export default function CienciaFiccion() {
  const list = filtrarYMostrar("Ciencia Ficcion") || [];
  const moviesRandom = list.sort(() => Math.random() - 0.5);
  return (
    <>
      {moviesRandom.map(({ id, nombre, url }) => (
        <NavLink
          to={`/pelicula/ciencia-ficcion/${id}`}
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
