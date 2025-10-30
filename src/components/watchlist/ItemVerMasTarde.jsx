import React from "react";

function ItemVerMasTarde({ pelicula, alternarVista, eliminarPelicula }) {
  return (
    <div className={`item-verMasTarde ${pelicula.vista ? "vista" : ""}`}>
      <h3>{pelicula.titulo}</h3>
      {pelicula.nota && <p>{pelicula.nota}</p>}
      <div className="botones">
        <button onClick={alternarVista}>
          {pelicula.vista ? "Marcar como no vista" : "Marcar como vista"}
        </button>
        <button onClick={eliminarPelicula} className="eliminar">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default ItemVerMasTarde;
