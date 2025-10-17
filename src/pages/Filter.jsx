import React, { useState } from "react";
import back from "../assets/back.svg";

export default function Filter({ openModal, closeModal, generoObtenido }) {
  const [genero, setGenero] = useState("");

  if (openModal) {
    return (
      <section className="filter-section">
        <article className="filter">
          <div className="btn-access">
            <button onClick={closeModal}>
              <img src={back} alt="" />
            </button>
          </div>
          <div className="filter-buttons">
            <div className="modal-edit_inputs_buttons" role="radiogroup">
              <div>
                <input
                  type="radio"
                  name="genero"
                  id="accion"
                  value="Accion"
                  checked={genero === "Accion"}
                  onChange={(event) => setGenero(event.target.value)}
                />
                <label htmlFor="accion">Acción</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="genero"
                  id="terror"
                  value="Terror"
                  checked={genero === "Terror"}
                  onChange={(event) => setGenero(event.target.value)}
                />
                <label htmlFor="terror">Terror</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="genero"
                  id="ciencia-ficcion"
                  value="Ciencia Ficcion"
                  checked={genero === "Ciencia Ficcion"}
                  onChange={(event) => setGenero(event.target.value)}
                />
                <label htmlFor="ciencia-ficcion">Ciencia Ficcion</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="genero"
                  id="Comedia"
                  value="Comedia"
                  checked={genero === "Comedia"}
                  onChange={(event) => setGenero(event.target.value)}
                />
                <label htmlFor="Comedia">Comedia</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="genero"
                  id="Drama"
                  value="Drama"
                  checked={genero === "Drama"}
                  onChange={(event) => setGenero(event.target.value)}
                />
                <label htmlFor="Drama">Drama</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="genero"
                  id="Fantasia"
                  value="Fantasia"
                  checked={genero === "Fantasia"}
                  onChange={(event) => setGenero(event.target.value)}
                />
                <label htmlFor="Fantasia">Fantasia</label>
              </div>
            </div>
          </div>

          <button
            className="filter_buttons-btn"
            type="button"
            onClick={() => generoObtenido(genero)}
          >
            Aplicar
          </button>
        </article>
      </section>
    );
  }
}
