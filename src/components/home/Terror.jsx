import { useEffect, useState } from "react";
import { filtrarYMostrar } from "../../utils/localStorage";
import { NavLink } from "react-router-dom";

export default function Movies({ showMore }) {
  const terrorList = filtrarYMostrar("Terror") || [];
  const [resize, setResize] = useState(window.innerWidth >= 1024);
  const [showVideo, setShowVideo] = useState(null);

  useEffect(() => {
    const handleResize = () => setResize(window.innerWidth >= 1024);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const listToShow = resize ? terrorList.slice(0, showMore) : terrorList;

  return (
    <>
      {listToShow.map(({ id, nombre, url, videoURL, descripcion }) => (
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
    </>
  );
}
