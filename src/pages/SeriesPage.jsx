import React from "react";
import { obtenerPeliculasOSerieLS } from "../utils/localStorage";
import "../components/movies/moviesSection.css";
import Series from "../components/series/Series";

export default function SeriesPage() {
  const filteredMovies = obtenerPeliculasOSerieLS("Serie");

  return (
    <>
      <section className="section-movies">
        <Series />
      </section>
    </>
  );
}
