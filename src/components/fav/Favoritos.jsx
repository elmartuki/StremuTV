import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import close from "../../assets/close.svg";
import ModalConfirmar from "./ModalConfirmar";

export default function Favoritos({ onUpdateList, favoritos }) {
  const [listFavoritos, setListFavoritos] = useState([]);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  function handleDeleteFav(id) {
    setIdToDelete(id);
    setOpenDeleteModal(true);
  }

  function confirmDelete() {
    const filteredList = favoritos.filter((item) => {
      return item.id !== idToDelete;
    });

    setListFavoritos(filteredList);
    localStorage.setItem("favoritos", JSON.stringify(filteredList));

    if (onUpdateList) onUpdateList();

    setOpenDeleteModal(false);
    setIdToDelete(null);
  }

  function cancelDelete() {
    setOpenDeleteModal(false);
    setIdToDelete(null);
  }

  return (
    <>
      <ModalConfirmar
        openModal={openDeleteModal}
        closeModal={cancelDelete}
        onConfirm={confirmDelete}
      />

      {favoritos.map(({ nombre, id, url }) => {
        return (
          <>
            <article className="movie-card" key={id}>
              <button
                onClick={() => handleDeleteFav(id)}
                className="btn-delete"
              >
                <img src={close} alt="" />
              </button>
              <NavLink to={`/favoritos/${id}`}>
                <div className="movie-card_img">
                  <img src={url} />
                </div>
                <p>{nombre}</p>
              </NavLink>
            </article>
          </>
        );
      })}
    </>
  );
}
