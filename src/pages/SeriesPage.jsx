import React, { useState } from "react";
import { obtenerPeliculasOSerieLS } from "../utils/localStorage";
import Series from "../components/series/Series";
import Filter from "./Filter";
import "../css/moviesSeries.css";

export default function SeriesPage() {
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

  const allSeries = obtenerPeliculasOSerieLS("Serie") || [];

  let seriesFiltered;

  if (genero) {
    seriesFiltered = allSeries.filter((serie) => {
      return serie.genero === genero;
    });
  } else {
    seriesFiltered = allSeries;
  }

  return (
    <>
      <section className="filter-selector">
        <Filter generoObtenido={handleFilter} />
      </section>

      <div className="series-section">
        <section className="section_home">
          <Series seriesMovies={seriesFiltered} />
        </section>
      </div>
    </>
  );
}
