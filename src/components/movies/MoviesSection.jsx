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
        {listado.map(({ nombre, id, url }) => {
          return (
            <>
              <article className="movie-card">
                <NavLink to={`/pelicula/${id}`} key={id}>
                  <div className="movie-card_img">
                    <img src={url} />
                  </div>
                  <p>{nombre}</p>
                </NavLink>
              </article>
            </>
          );
        })}
      </>
    );
  }
}
