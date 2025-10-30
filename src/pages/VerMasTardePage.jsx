import React, { useState, useEffect } from "react";
import FormularioVerMasTarde from "../components/watchlist/FormularioVerMasTarde";
import ListaVerMasTarde from "../components/watchlist/ListaVerMasTarde";
import "../css/VerMasTarde.css";

function VerMasTardePage() {
  const [peliculas, setPeliculas] = useState([]);

  // lee la lista guardada al cargar
  useEffect(() => {
    const guardadas = JSON.parse(localStorage.getItem("verMasTarde")) || [];
    setPeliculas(guardadas);
  }, []);

  // guarda en el localStorage cuando cambia la lista
  useEffect(() => {
    localStorage.setItem("verMasTarde", JSON.stringify(peliculas));
  }, [peliculas]);

  // para crea nueva pelicula
  const agregarPelicula = (pelicula) => {
    setPeliculas([...peliculas, pelicula]);
  };

  // para cambiar el estado (vista / no vista)
  const alternarVista = (indice) => {
    const actualizadas = peliculas.map((p, i) =>
      i === indice ? { ...p, vista: !p.vista } : p
    );
    setPeliculas(actualizadas);
  };

  // elimina una pelicula
  const eliminarPelicula = (indice) => {
    const filtradas = peliculas.filter((_, i) => i !== indice);
    setPeliculas(filtradas);
  };

  return (
    <div className="verMasTarde-contenedor">
      <h2>Lista de peliculas para ver mas tarde</h2>
      <FormularioVerMasTarde agregarPelicula={agregarPelicula} />
      <ListaVerMasTarde
        peliculas={peliculas}
        alternarVista={alternarVista}
        eliminarPelicula={eliminarPelicula}
      />
    </div>
  );
}

export default VerMasTardePage;
