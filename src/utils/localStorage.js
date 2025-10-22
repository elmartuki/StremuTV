import { movieSerieFullList } from "../db/MovieSerie";

export function guardarEnLocalStorage(key, datos) {
  localStorage.setItem(key, JSON.stringify(datos));
}

export function obtenerDelLocalStorage(key) {
  const datos = localStorage.getItem(key);
  try {
    return datos ? JSON.parse(datos) : [];
  } catch {
    return [];
  }
}

export function agregarListado(key) {
  if (localStorage.getItem(key) === null) {
    guardarEnLocalStorage(key, movieSerieFullList);
  }
}

export function agregarAlLocalStorage(key, nuevoDato) {
  const prev = obtenerDelLocalStorage(key) || [];
  guardarEnLocalStorage(key, [...prev, nuevoDato]);
}

export function guardarEnSessionStorage(key, datos) {
  const datosJSON = JSON.stringify(datos);
  sessionStorage.setItem(key, datosJSON);
}

export function obtenerDelSessionStorage(key) {
  const datos = sessionStorage.getItem(key);
  return datos ? JSON.parse(datos) : null;
}

export function obtenerPeliculasOSerieLS(tipo) {
  const peliculasLocalStorage = obtenerDelLocalStorage("MoviesSeries") || [];

  const filterMovies = peliculasLocalStorage.filter((movie) => {
    return movie.tipo === tipo;
  });

  return filterMovies;
}

export function filtrarYMostrar(genero) {
  const peliculasLocalStorage = obtenerDelLocalStorage("MoviesSeries");

  const filterMovies = peliculasLocalStorage.filter((movie) => {
    return movie.genero === genero;
  });

  return filterMovies;
}

export function obtenerCatalogoCompleto() {
  const pelis = obtenerPeliculasOSerieLS("Pelicula");
  const series = obtenerPeliculasOSerieLS("Serie");
  return [...pelis, ...series];
}
