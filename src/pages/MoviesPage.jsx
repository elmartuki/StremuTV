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

  const allMovies = obtenerPeliculasOSerieLS("Pelicula") || [];

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
      <section className="filter-selector">
        <Filter generoObtenido={handleFilter} />
      </section>

      <div className="series-section">
        <section className="section_home">
          <MoviesSection seriesMovies={moviesFiltered} />
        </section>
      </div>
    </>
  );
}
