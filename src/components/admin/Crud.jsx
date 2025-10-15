import { useEffect, useState } from "react";
import {
  guardarEnLocalStorage,
  obtenerDelLocalStorage,
} from "../../utils/localStorage";
import ShowMoviesSeries from "./PreviewSeriesMovies";
import EditForm from "./EditMovieSerie";
import "./crud.css";
import "./preview.css";
import "./modalDelete.css";
import CreateForm from "./CreateMovieSeries";
import add from "../../assets/add.svg";
import ModalDelate from "./ModalDelate";

export default function FormCreateMovieSerie() {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [genero, setGenero] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [url, setURL] = useState("");

  const [movieList, setMovieList] = useState([]);
  const [editMovie, setEditMovie] = useState(null);
  const [toDelete, setToDelete] = useState(null);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  useEffect(() => {
    const moviesList = obtenerDelLocalStorage("crudPeliculas", []);
    setMovieList(moviesList);
  }, []);

  useEffect(() => {
    guardarEnLocalStorage("crudPeliculas", movieList);
  }, [movieList]);

  function obtenerDatos(e) {
    e.preventDefault();
    const data = {
      id: editMovie ? editMovie : Date.now(),
      nombre,
      fecha,
      genero,
      tipo,
      descripcion,
      url,
    };

    setOpenEditModal(false);
    setOpenCreateModal(false);
    setOpenDeleteModal(false);

    if (editMovie) {
      const updatedMovieList = movieList.map((movie) => {
        return movie.id === editMovie ? data : movie;
      });
      setMovieList(updatedMovieList);
      setEditMovie(null);
    } else {
      const nuevaLista = [...movieList, data];
      setMovieList(nuevaLista);
    }

    setNombre("");
    setFecha("");
    setGenero("");
    setTipo("");
    setDescripcion("");
    setURL("");
  }

  function movieToEdit(movie) {
    setNombre(movie.nombre);
    setFecha(movie.fecha);
    setGenero(movie.genero);
    setTipo(movie.tipo);
    setDescripcion(movie.descripcion);
    setURL(movie.url);
    setEditMovie(movie.id);
    setOpenEditModal(true);
  }

  function askDelete(movie) {
    setToDelete(movie);
    setOpenDeleteModal(true);
  }

  function confirmDelete() {
    if (toDelete) {
      const listadoNuevo = movieList.filter(
        (movie) => movie.id !== toDelete.id
      );
      setMovieList(listadoNuevo);
      setOpenDeleteModal(false);
    }
  }

  const openCreate = () => setOpenCreateModal(true);
  const closeCreate = () => setOpenCreateModal(false);

  return (
    <>
      <button className="btn-añadir" onClick={openCreate}>
        <img src={add} alt="" />
      </button>
      <CreateForm
        openCreateModal={openCreateModal}
        closeCreate={closeCreate}
        obtenerDatos={obtenerDatos}
        nombre={nombre}
        setNombre={setNombre}
        fecha={fecha}
        setFecha={setFecha}
        genero={genero}
        setGenero={setGenero}
        tipo={tipo}
        setTipo={setTipo}
        descripcion={descripcion}
        setDescripcion={setDescripcion}
        url={url}
        setURL={setURL}
      />

      <ShowMoviesSeries
        movieList={movieList}
        movieToEdit={movieToEdit}
        onDeleteClick={askDelete}
      />

      <EditForm
        openModal={openEditModal}
        closeModal={() => setOpenEditModal(false)}
        obtenerDatos={obtenerDatos}
        nombre={nombre}
        setNombre={setNombre}
        fecha={fecha}
        setFecha={setFecha}
        genero={genero}
        setGenero={setGenero}
        tipo={tipo}
        setTipo={setTipo}
        descripcion={descripcion}
        setDescripcion={setDescripcion}
        url={url}
        setURL={setURL}
      ></EditForm>

      <ModalDelate
        nombre={nombre}
        openModal={openDeleteModal}
        closeModal={() => setOpenDeleteModal(false)}
        onConfirm={confirmDelete}
      />
    </>
  );
}
