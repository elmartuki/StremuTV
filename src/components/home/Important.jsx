import { useState } from "react";
import { obtenerPeliculasOSerieLS } from "../../utils/localStorage";
import { NavLink } from "react-router-dom";
import back from "../../assets/back.svg";
import next from "../../assets/next.svg";
import play from "../../assets/play.svg";
import info from "../../assets/info.svg";

export default function Important() {
  const [indice, setIndice] = useState(0);

  const movieList = obtenerPeliculasOSerieLS("pelicula") || [];

  const topTres = movieList.slice(0, 6);

  const { nombre, url, descripcion, id } = topTres[indice];

  if (topTres.length === 0) {
    return <p>No hay películas destacadas.</p>;
  }

  function handleNext() {
    if (indice <= 4) {
      setIndice(indice + 1);
    } else {
    }
  }

  function handleBack() {
    if (indice > 0) {
      setIndice(indice - 1);
    } else {
    }
  }

  return (
    <>
      <div className="content-important">
        <div className="btn-prev">
          <button onClick={handleNext}>
            <img src={back} alt="" />
          </button>
        </div>
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
                  <img src={play} alt="" />
                  Ver trailer
                </button>
                <button>
                  <img src={info} alt="" />
                  Mas info
                </button>
              </div>
            </div>
          </div>
        </NavLink>

        <div className="btn-next">
          <button onClick={handleBack}>
            <img src={next} alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
