import React from "react";
import {
  obtenerDelLocalStorage,
  obtenerDelSessionStorage,
  obtenerPeliculasOSerieLS,
} from "../utils/localStorage";
import Movies from "../components/home/Movies";
import MoviesSection from "../components/movies/MoviesSection";
import "../components/movies/moviesSection.css";

export default function MoviesPage() {
  const filteredMovies = obtenerPeliculasOSerieLS("Pelicula");

  return (
    <>
      <section className="section-movies">
        <MoviesSection />
      </section>
    </>
  );
}
