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
        {data.map(({ nombre, id, url }) => {
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
