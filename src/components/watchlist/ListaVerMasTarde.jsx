import React from "react";
import ItemVerMasTarde from "./ItemVerMasTarde";

function ListaVerMasTarde({ peliculas, alternarVista, eliminarPelicula }) {
  if (peliculas.length === 0) {
    return <p className="vacio">No tienes peliculas pendientes por ver.</p>;
  }

  return (
    <div className="lista-verMasTarde">
      {peliculas.map((pelicula, indice) => (
        <ItemVerMasTarde
          key={indice}
          pelicula={pelicula}
          alternarVista={() => alternarVista(indice)}
          eliminarPelicula={() => eliminarPelicula(indice)}
        />
      ))}
    </div>
  );
}

export default ListaVerMasTarde;
