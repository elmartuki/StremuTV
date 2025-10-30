import { useEffect, useState } from "react";
import { obtenerPeliculasOSerieLS } from "../../utils/localStorage";
import { NavLink } from "react-router-dom";

export default function Movies({ showMore }) {
  const [resize, setResize] = useState(window.innerWidth >= 1024);
  const movieList = obtenerPeliculasOSerieLS("Serie") || [];

  useEffect(() => {
    const handleResize = () => {
      setResize(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const listToShow = resize ? movieList.slice(0, showMore) : movieList;

  return (
    <>
      {listToShow.map(({ id, nombre, url, videoURL, descripcion }) => (
        <NavLink to={`/series/${id}`} className="movies-card-home" key={id}>
          <div className="movies-card-home_img">
            <div className="preview-img">
              <img src={url} alt={nombre} />
            </div>

            <div className="preview-video">
              <video autoPlay muted loop src={videoURL}></video>
              <div className="preview-video_details">
                <p>{nombre}</p>
                <p>{descripcion}</p>
                <button>Mas info</button>
              </div>
            </div>
          </div>
          <div className="movies-card-home_title">
            <p>{nombre}</p>
          </div>
        </NavLink>
      ))}
    </>
  );
}
