import { useEffect, useState } from "react";
import { filtrarYMostrar } from "../../utils/localStorage";
import { NavLink } from "react-router-dom";

export default function Accion({ showMore }) {
  const [resize, setResize] = useState(window.innerWidth >= 1024);
  const [movil, setMovil] = useState(window.innerWidth <= 1024);
  const list = filtrarYMostrar("Accion") || [];
  const [showVideo, setShowVideo] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setMovil(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleResize = () => setResize(window.innerWidth >= 1024);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const listToShow = resize ? list.slice(0, showMore) : list;

  return (
    <>
      {listToShow.map(({ id, nombre, url, videoURL, descripcion }) => (
        <>
          {movil ? (
            <>
              <NavLink
                to={`/series/${id}`}
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
            </>
          ) : (
            <>
              <NavLink
                to={`/series/${id}`}
                className="movies-card-home"
                key={id}
              >
                <div
                  onMouseEnter={() => setShowVideo(id)}
                  onMouseLeave={() => setShowVideo(null)}
                  className="movies-card-home_img"
                >
                  {showVideo === id ? (
                    <>
                      {videoURL === undefined ? (
                        <img src={url} alt={nombre} />
                      ) : (
                        <video src={videoURL} autoPlay muted loop></video>
                      )}

                      <div className="video-descripcion">
                        <p>{nombre}</p>
                        <p>{descripcion}</p>
                        <button>Ver mas</button>
                      </div>
                    </>
                  ) : (
                    <img src={url} alt={nombre} />
                  )}
                </div>
                {showVideo === id ? (
                  <></>
                ) : (
                  <div className="movies-card-home_title">
                    <p>{nombre}</p>
                  </div>
                )}
              </NavLink>
            </>
          )}
        </>
      ))}
    </>
  );
}
