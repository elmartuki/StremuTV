export function guardarEnLocalStorage(key, datos) {
  const datosJSON = JSON.stringify(datos);
  localStorage.setItem(key, datosJSON);
}

export function obtenerDelLocalStorage(key) {
  const datos = localStorage.getItem(key);
  return datos ? JSON.parse(datos) : [];
  // return JSON.parse(datos) || []
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
  const peliculasLocalStorage = obtenerDelLocalStorage("crudPeliculas");

  const filterMovies = peliculasLocalStorage.filter((movie) => {
    return movie.tipo === tipo;
  });
  console.log(filterMovies);

  return filterMovies;
}
