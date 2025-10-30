import { NavLink } from "react-router-dom";

export default function Series({ seriesMovies }) {
  const data = seriesMovies;

  if (data.length === 0) {
    return (
      <>
        <p>No hay series por mostrar</p>
      </>
    );
  } else {
    return (
      <>
        {data.map(({ nombre, id, url, descripcion, videoURL }) => {
          return (
            <>
              <article className="movie-card">
                <NavLink to={`/pelicula/${id}`} key={id}>
                  <div className="movie-card_img">
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
                  <div className="movies-card-home_title">
                    <p className="movies-card-title">{nombre}</p>
                  </div>
                </NavLink>
              </article>
            </>
          );
        })}
      </>
    );
  }
}
