import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function MoviesSection({ seriesMovies }) {
  const listado = seriesMovies;
  const [showVideo, setShowVideo] = useState(null);

  if (listado.length === 0) {
    return (
      <>
        <p>No hay peliculas por mostrar</p>
      </>
    );
  } else {
    return (
      <>
        <section className="movies-section">
          {listado.map(({ id, nombre, url, videoURL, descripcion }) => (
            <NavLink to={`/series/${id}`} className="movies-card-home" key={id}>
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
          ))}
        </section>
      </>
    );
  }
}
