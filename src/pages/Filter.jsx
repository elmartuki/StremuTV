import React, { useState } from "react";

export default function Filter({ generoObtenido }) {
  const [genero, setGenero] = useState("");

  return (
    <article className="filter">
      <div className="btn-access"></div>
      <div className="filter-buttons">
        <div className="modal-edit_inputs_buttons" role="radiogroup">
          <div>
            <input
              type="radio"
              name="genero"
              id="accion"
              value="Accion"
              checked={genero === "Accion"}
              onClick={() => generoObtenido(genero)}
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
              onClick={() => generoObtenido(genero)}
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
              onClick={() => generoObtenido(genero)}
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
              onClick={() => generoObtenido(genero)}
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
              onClick={() => generoObtenido(genero)}
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
              onClick={() => generoObtenido(genero)}
              onChange={(event) => setGenero(event.target.value)}
            />
            <label htmlFor="Fantasia">Fantasia</label>
          </div>
        </div>
      </div>
    </article>
  );
}
