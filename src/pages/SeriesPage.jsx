import React, { useState } from "react";
import { obtenerPeliculasOSerieLS } from "../utils/localStorage";
import Series from "../components/series/Series";
import Filter from "./Filter";

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

  const allSeries = obtenerPeliculasOSerieLS("serie") || [];

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
      <button className="btn-filter" onClick={openFilter}>
        Filtrar
      </button>
      <Filter
        generoObtenido={handleFilter}
        openModal={openFilterModal}
        closeModal={closeModal}
      />
      <section className="section-movies">
        <Series seriesMovies={seriesFiltered} />
      </section>
    </>
  );
}
