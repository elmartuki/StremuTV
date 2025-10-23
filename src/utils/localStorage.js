import { movieSerieFullList } from "../db/MovieSerie";

export function guardarEnLocalStorage(key, datos) {
  const datosJSON = JSON.stringify(datos);
  localStorage.setItem(key, datosJSON);
}

export function obtenerDelLocalStorage(key) {
  const datos = localStorage.getItem(key);
  return datos ? JSON.parse(datos) : [];
  // return JSON.parse(datos) || []
}

export function agregarListado(key) {
  const checkear = obtenerDelLocalStorage(key);

  if (checkear?.length === null) {
    guardarEnLocalStorage(key, movieSerieFullList);
  }
}

export function agregarAlLocalStorage(key, nuevoDato) {
  const datosPrevios = obtenerDelLocalStorage(key) || [];
  const actualizados = [...datosPrevios, nuevoDato];
  guardarEnLocalStorage(key, actualizados);
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
