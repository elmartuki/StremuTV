import React, { useState } from "react";
import { obtenerPeliculasOSerieLS } from "../utils/localStorage";
import MoviesSection from "../components/movies/MoviesSection";
import Filter from "./Filter";

export default function MoviesPage() {
  const [openFilterModal, setOpenFilterModal] = useState(false);

  const [genero, setGenero] = useState();

  function openFilter() {
    setOpenFilterModal(true);
  }

  function closeModal() {
    setOpenFilterModal(false);
  }

  function handleFilter(valor) {
    setGenero(valor);
    closeModal();
  }

  const allMovies = obtenerPeliculasOSerieLS("pelicula") || [];

  let moviesFiltered;

  if (genero) {
    moviesFiltered = allMovies.filter((movie) => {
      return movie.genero === genero;
    });
  } else {
    moviesFiltered = allMovies;
  }

  return (
    <>
      <button className="btn-filter" onClick={openFilter}>
        Filtrar
      </button>
      <Filter
        generoObtenido={handleFilter}
        openModal={openFilterModal}
        closeModal={closeModal}
      />
      <section className="section-movies">
        <MoviesSection seriesMovies={moviesFiltered} />
      </section>
    </>
  );
}
