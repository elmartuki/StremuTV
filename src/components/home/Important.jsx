import { useEffect, useState } from "react";
import { obtenerPeliculasOSerieLS } from "../../utils/localStorage";
import { NavLink } from "react-router-dom";
import back from "../../assets/back.svg";
import next from "../../assets/next.svg";
import play from "../../assets/play.svg";
import info from "../../assets/info.svg";

export default function Important() {
  const [indice, setIndice] = useState(0);

  const movieList = obtenerPeliculasOSerieLS("Serie") || [];

  const topTen = movieList.slice(0, 6);

  const { nombre, url, descripcion, id } = topTen[indice];

  useEffect(() => {
    const reset = setTimeout(() => {
      if (indice < 4) {
        setIndice(indice + 1);
      } else if (indice > 0) {
        setIndice(0);
        clearInterval();
      }
    }, 8000);

    if (indice.lenght === 0) {
      reset(reset);
    }
  }, [indice]);

  return (
    <>
      <div className="content-important">
        <div className="btn-prev"></div>
        <NavLink
          to={`/pelicula/${id}`}
          className="card-important-home"
          key={id}
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
                <button>
                  <img src={info} alt="" />
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
