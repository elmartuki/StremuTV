import { NavLink } from "react-router-dom";
import { obtenerCatalogoCompleto } from "../../utils/localStorage";
import { useState } from "react";
import back from "../../assets/back.svg";
import lupa from "../../assets/search.svg";

export default function FilterSearch({ handleClose }) {
  const listMoviesSeries = obtenerCatalogoCompleto();
  const [texto, setTexto] = useState("");

  function handleTexto() {
    setTexto(event.target.value.toLowerCase());
  }

  const peliculaFinded = listMoviesSeries.filter((movie) =>
    movie.nombre.toLowerCase().includes(texto)
  );

  console.log(texto);

  return (
    <>
      <section className="search">
        <div className="search-topbar">
          <div className="search-topbar_buttons">
            <button onClick={handleClose}>
              <img src={back} alt="" />
              <p>Volver</p>
            </button>
          </div>

          <div className="search-topbar_input">
            <div className="buscador">
              <div>
                <img src={lupa} alt="" />
              </div>

              <input
                onChange={handleTexto}
                type="text"
                placeholder="Buscar peliculas o series"
              />
            </div>
          </div>
        </div>

        <article className="search-result-section">
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
        </article>
      </section>
    </>
  );
}
