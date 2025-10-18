import React, { useEffect, useState } from "react";
import Favoritos from "../components/favoritos/Fav";
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
    return <h2 className="section-title">No hay nada en tu lista</h2>;
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
