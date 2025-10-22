import React, { useEffect, useState } from "react";

import Favoritos from "../components/fav/Favoritos";

import {
  guardarEnLocalStorage,
  obtenerDelLocalStorage,
} from "../utils/localStorage";

export default function FavoritosPage() {
  const [updateFavoritos, setUpdateFavoritos] = useState([]);

  useEffect(() => {
    const favoritosStorage = obtenerDelLocalStorage("favoritos");
    setUpdateFavoritos(favoritosStorage);
  }, []);

  useEffect(() => {
    guardarEnLocalStorage("favoritos", updateFavoritos);
  }, [updateFavoritos]);

  const handleUpdateList = () => {
    const favoritosStorage = obtenerDelLocalStorage("favoritos") || [];
    setUpdateFavoritos(favoritosStorage);
  };

  if (updateFavoritos.length === 0) {
    return (
      <article style={{ marginTop: "15px" }}>
        <div className="not-found-message">
          <p>No hay nada en tu lista. :c</p>
        </div>
      </article>
    );
  } else {
    return (
      <>
        <h2 className="section-title">Mi lista</h2>
        <section className="section-movies">
          <Favoritos
            favoritos={updateFavoritos}
            onUpdateList={handleUpdateList}
          />
        </section>
      </>
    );
  }
}
