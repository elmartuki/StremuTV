import { NavLink } from "react-router-dom";

export default function MoviesSection({ seriesMovies }) {
  const listado = seriesMovies;

  if (listado.length === 0) {
    return (
      <>
        <p>No hay peliculas por mostrar</p>
      </>
    );
  } else {
    return (
      <>
        {listado.map(({ id, nombre, url, videoURL, descripcion }) => (
          <NavLink to={`/series/${id}`} className="movies-card-home" key={id}>
            <div className="movies-card-home_img">
              <div className="preview-img">
                <img src={url} alt={nombre} />
              </div>

              <div className="preview-video">
                <img src={url} alt={nombre} />
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
}
