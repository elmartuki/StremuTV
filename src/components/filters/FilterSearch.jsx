import { NavLink } from "react-router-dom";
import { obtenerCatalogoCompleto } from "../../utils/localStorage";

export default function FilterSearch({ searchInput }) {
  const listMoviesSeries = obtenerCatalogoCompleto();

  const peliculaFinded = listMoviesSeries.filter((movie) =>
    movie.nombre.toLowerCase().includes(searchInput)
  );

  if (peliculaFinded.length > 0) {
    return (
      <section className="search-result-section">
        {peliculaFinded.map((item) => {
          const { nombre, url, id } = item;
          return (
            <>
              <article className="search-result">
                <NavLink to={`/pelicula/${id}`}>
                  <div className="search-result_img">
                    <img src={url} alt="" />
                  </div>

                  <div className="search-result_title">
                    <p>{nombre}</p>
                  </div>
                </NavLink>
              </article>
            </>
          );
        })}
      </section>
    );
  }
}
