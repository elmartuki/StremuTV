import editImg from "../../assets/edit.svg";
import deleteImg from "../../assets/delete.svg";
import { useState } from "react";
import { obtenerDelLocalStorage } from "../../utils/localStorage";
import searchImg from "../../assets/search.svg";

export default function ShowMoviesSeries({
  movieList,
  movieToEdit,
  onDeleteClick,
}) {
  const [wordToSearch, setWordToSearch] = useState("");

  function handleText() {
    setWordToSearch(event.target.value);
  }

  const fullList = obtenerDelLocalStorage("MoviesSeries");

  const seriesMoviesFiltered = fullList.filter((item) =>
    item.nombre.toLowerCase().includes(wordToSearch.toLowerCase())
  );

  if (seriesMoviesFiltered.lenght > 0) {
    setWordToSearch(seriesMoviesFiltered);
  }

  return (
    <section className="section-1">
      <div className="filter-search">
        <div>
          <img src={searchImg} alt="" />
          <input
            onChange={handleText}
            value={wordToSearch}
            type="text"
            placeholder="Buscar pelicula o serie."
            name=""
            id=""
          />
        </div>
      </div>

      {wordToSearch ? (
        <>
          {seriesMoviesFiltered.length === 0 ? (
            <>
              <div className="not-found-message">
                <p>No se encontro nada.</p>
              </div>
            </>
          ) : (
            <>
              {seriesMoviesFiltered.map((movie) => {
                const { id, nombre, url, fecha, genero, tipo, descripcion } =
                  movie;
                return (
                  <article key={id} className="card-movie-serie">
                    <div className="card-movie-serie_img">
                      <img src={url} alt="" />
                    </div>
                    <div className="card-movie-serie_info">
                      <div>
                        <p>{nombre},</p>
                        <p>{tipo}</p>
                      </div>
                      <div>
                        <p>{fecha},</p>
                        <p>{genero}</p>
                      </div>
                    </div>

                    <div className="card-movie-serie_buttons">
                      <button onClick={() => movieToEdit(movie)}>
                        <img src={editImg}></img>
                      </button>
                      <button onClick={() => onDeleteClick(movie)}>
                        <img src={deleteImg}></img>
                      </button>
                    </div>
                  </article>
                );
              })}
            </>
          )}
        </>
      ) : (
        <>
          {movieList.map((movie) => {
            const { id, nombre, url, fecha, genero, tipo, descripcion } = movie;
            return (
              <article key={id} className="card-movie-serie">
                <div className="card-movie-serie_img">
                  <img src={url} alt="" />
                </div>
                <div className="card-movie-serie_info">
                  <div>
                    <p>{nombre},</p>
                    <p>{tipo}</p>
                  </div>
                  <div>
                    <p>{fecha},</p>
                    <p>{genero}</p>
                  </div>
                </div>

                <div className="card-movie-serie_buttons">
                  <button onClick={() => movieToEdit(movie)}>
                    <img src={editImg}></img>
                  </button>
                  <button onClick={() => onDeleteClick(movie)}>
                    <img src={deleteImg}></img>
                  </button>
                </div>
              </article>
            );
          })}
        </>
      )}
    </section>
  );
}
