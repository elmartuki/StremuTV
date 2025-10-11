import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import TablaAlumnos from "../components/admin/TablaAlumnos.jsx";
import ModalCrearAlumno from "../components/admin/ModalCrearAlumno.jsx";

import { obtenerAlumnos } from "../services/alumnos.service.js";
import ModalEditarAlumno from "../components/admin/ModalEditarAlumno.jsx";
export default function AdminPage() {
  const [nombreBuscado, setNombreBuscado] = useState("");
  const [alumnos, setAlumnos] = useState([]);
  const [showCrear, setShowCrear] = useState(false);
  const [showEditar, setShowEditar] = useState(false);
  const [alumnoEditar, setAlumnoEditar] = useState(null);

  // cuanto el componente Cargue necesito traer el listado de alumnos del localstorage
  // y agregarlo a mi estado
  const fetchAlumnos = () => {
    const alumnosDB = obtenerAlumnos("alumnos");
    setAlumnos(alumnosDB);
  };

  useEffect(() => {
    fetchAlumnos();
  }, []);

  function handleClickBuscar() {
    Swal.fire({
      title: "Bien hecho!",
      text: `Buscando alumno...`,
      icon: "success",
    });
  }
  function handleClickAgregar() {
    setShowCrear(true);
  }
  const alumnosFiltrados = alumnos.filter((alumno) => {
    return alumno.nombre.toLowerCase().includes(nombreBuscado.toLowerCase());
  });

  return (
    <section>
      <h3 className="text-center">Gestion Alumnos</h3>
      <div className="d-flex flex-row justify-content-center">
        <form className="d-flex col-6 m-3" role="search">
          <input
            className="form-control"
            type="search"
            placeholder="Buscar alumno"
            value={nombreBuscado}
            onChange={(event) => setNombreBuscado(event.target.value)}
          />
          <button
            className="btn btn-outline-primary"
            onClick={handleClickBuscar}
            type="submit"
          >
            <img
              src="https://img.icons8.com/?size=100&id=p3miLroKw4iR&format=png&color=000000"
              alt="Buscar"
              width="25dvh"
            />
          </button>
        </form>
        <button
          type="button"
          onClick={handleClickAgregar}
          className="btn btn-outline-success m-3"
        >
          Agregar alumno
        </button>
      </div>
      <TablaAlumnos
        alumnos={alumnosFiltrados}
        setShowEditar={setShowEditar}
        setAlumnoEditar={setAlumnoEditar}
        fetchAlumnos={fetchAlumnos}
      ></TablaAlumnos>

      <ModalCrearAlumno
        showCrear={showCrear}
        setShowCrear={setShowCrear}
        fetchAlumnos={fetchAlumnos}
      />

      <ModalEditarAlumno
        showEditar={showEditar}
        setShowEditar={setShowEditar}
        alumnoEditar={alumnoEditar}
        setAlumnos={setAlumnos}
      />
    </section>
  );
}
