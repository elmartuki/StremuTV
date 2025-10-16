import { filtrarYMostrar } from "../../utils/localStorage";
import { NavLink } from "react-router-dom";

export default function Accion() {
  const list = filtrarYMostrar("Accion") || [];
  const moviesRandom = list.sort(() => Math.random() - 0.5);
  return (
    <>
      {moviesRandom.map(({ id, nombre, url, fecha, genero, descripcion }) => (
        <NavLink
          to={`/pelicula/accion/${id}`}
          className="movies-card-home"
          key={id}
        >
          <div className="movies-card-home_img">
            <img src={url} />
          </div>
          <div className="movies-card-home_title">
            <p>{nombre}</p>
          </div>
        </NavLink>
      ))}
    </>
  );
}

