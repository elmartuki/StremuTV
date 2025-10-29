import { useEffect, useState } from "react";
import { obtenerPeliculasOSerieLS } from "../../utils/localStorage";
import { NavLink } from "react-router-dom";

export default function Movies({ showMore }) {
  const movieList = obtenerPeliculasOSerieLS("Pelicula") || [];
  const [resize, setResize] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => setResize(window.innerWidth >= 1024);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const listToShow = resize ? movieList.slice(0, showMore) : movieList;

  return (
    <>
      {listToShow.map(({ id, nombre, url }) => (
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
