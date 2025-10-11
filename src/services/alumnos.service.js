// alumnos.service.js

// ===========================
// OBTENER TODOS LOS ALUMNOS
// ===========================
export function obtenerAlumnos(key) {
  // Trae los datos desde localStorage y los convierte a array
  const datos = localStorage.getItem(key);
  return datos ? JSON.parse(datos) : [];
}

// ===========================
// GUARDAR ALUMNOS
// ===========================
export function guardarAlumnos(key, alumnos) {
  // Convierte el array de alumnos a string y lo guarda en localStorage
  localStorage.setItem(key, JSON.stringify(alumnos));
}

// ===========================
// AGREGAR UN NUEVO ALUMNO
// ===========================
export function agregarAlumno(key, alumnoNuevo) {
  // Primero obtenemos los alumnos existentes
  const alumnos = obtenerAlumnos(key);

  // Crear un ID simple para el alumno (incremental)
  alumnoNuevo.id = new Date();

  // Agregamos el nuevo alumno al array
  alumnos.push(alumnoNuevo);

  // Guardamos el array actualizado
  guardarAlumnos(key, alumnos);
}

// ===========================
// ELIMINAR UN ALUMNO POR ID
// ===========================
export function eliminarAlumno(key, id) {
  // Obtenemos todos los alumnos
  const alumnos = obtenerAlumnos(key);

  // Creamos un nuevo array sin el alumno que queremos eliminar
  const alumnosFiltrados = [];
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].id !== id) {
      alumnosFiltrados.push(alumnos[i]);
    }
  }

  // Guardamos el array actualizado
  guardarAlumnos(key, alumnosFiltrados);
}

// ===========================
// EDITAR UN ALUMNO POR ID
// ===========================
export function editarAlumno(key, id, alumnoActualizado) {
  // Obtenemos todos los alumnos
  const alumnos = obtenerAlumnos(key);

  // Recorremos el array y reemplazamos el alumno que tiene el ID
  const alumnosEditados = [];
  for (let i = 0; i < alumnos.length; i++) {
    if (alumnos[i].id === id) {
      // Mantener el mismo ID pero actualizar datos
      alumnosEditados.push({ ...alumnoActualizado, id: id });
    } else {
      alumnosEditados.push(alumnos[i]);
    }
  }

  // Guardamos el array actualizado
  guardarAlumnos(key, alumnosEditados);
}
