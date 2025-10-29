import { useEffect, useState } from "react";
import { obtenerPeliculasOSerieLS } from "../../utils/localStorage";
import { NavLink } from "react-router-dom";
import back from "../../assets/back.svg";
import next from "../../assets/next.svg";
import play from "../../assets/play.svg";
import info from "../../assets/info.svg";

export default function Important() {
  const [indice, setIndice] = useState(0);
  const [animKey, setAnimKey] = useState(0);

  const movieList = obtenerPeliculasOSerieLS("Serie") || [];
  const topFive = movieList.slice(0, 6);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (indice < topFive.length - 1) {
        setIndice(indice + 1);
      } else {
        setIndice(0);
      }

      setAnimKey((prev) => prev + 1);
    }, 8000);

    return () => clearTimeout(timeout);
  }, [indice, topFive.length]);

  if (!topFive || topFive.length === 0) return null;

  const { id, nombre, descripcion, url } = topFive[indice];

  return (
    <>
      <div className="content-important">
        <div className="btn-prev"></div>

        <NavLink
          to={`/pelicula/${id}`}
          className="card-important-home"
          key={animKey}
        >
          <div className="card-important_img">
            <img src={url} alt={nombre} />
            <div className="card-important_details">
              <div className="card-important_details-title">
                <p>{nombre}</p>
              </div>
              <div className="card-important_details-desc">
                <p>{descripcion}</p>
              </div>
              <div className="card-important_details-buttons">
                <button type="button">
                  <img
                    src={info}
                    alt="boton para ver mas info de la pelicula o serie"
                  />
                  Mas info
                </button>
              </div>
            </div>
          </div>
        </NavLink>

        <div className="btn-next"></div>
      </div>
    </>
  );
}
