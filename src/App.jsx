import AppRouter from "./routes/AppRouter.jsx";

import "./css/header.css";
import "./css/footer.css";
import "./css/crud.css";
import "./css/filter.css";
import "./css/modal.css";
import "./css/modalDelete.css";
import "./css/moreDetails.css";
import "./css/movies.css";
import "./css/moviesSection.css";
import "./css/preview.css";
import "./css/titulo.css";
import "./css/favorite.css";
import "./css/modalConfirm.css";
import "./css/modalError.css";
import "./css/cardCarroucel.css";
import "./css/search.css";
import "./css/index.css";
import "./css/loginModal.css";
import "./css/accountModal.css";
import "./css/editPerfil.css";
import "./css/initPage.css";
import "./css/login.css";
import "./css/aboutPage.css";
import "./css/crudFilter.css";
import { useEffect, useState } from "react";
import {
  agregarListado,
  obtenerDelLocalStorage,
} from "./utils/localStorage.js";

export default function App() {
  const [moviesList, setMovieList] = useState([]);
  const [agregar, setAgregar] = useState();

  useEffect(() => {
    const agregar = agregarListado("MoviesSeries");
    setAgregar(agregar);
  }, []);

  useEffect(() => {
    const moviesList = obtenerDelLocalStorage("MoviesSeries");
    setMovieList(moviesList);
  }, []);

  return (
    <>
      <div>
        <AppRouter />
      </div>
    </>
  );
}
