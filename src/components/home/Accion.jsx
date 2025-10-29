import { useEffect, useState } from "react";
import { filtrarYMostrar } from "../../utils/localStorage";
import { NavLink } from "react-router-dom";

export default function Accion({ showMore }) {
  const list = filtrarYMostrar("Accion") || [];
  const [resize, setResize] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setResize(window.innerWidth >= 1024);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const listToShow = resize ? list.slice(0, showMore) : list;
  return (
    <>
      {listToShow.map(({ id, nombre, url, fecha, genero, descripcion }) => (
        <NavLink
          to={`/pelicula/accion/${id}`}
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
