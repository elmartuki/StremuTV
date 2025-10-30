import AppRouter from "./routes/AppRouter.jsx";

import "./css/header.css";
import "./css/footer.css";
import "./css/crud.css";
import "./css/filter.css";
import "./css/modal.css";
import "./css/modalDelete.css";
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
import "./css/RecoverPasswordPage.css";
import "./css/crudFilter.css";
import "./css/alertMessage.css";
import "./css/recoverSection.css";
import "./css/PricingPlans.css";
import "./css/footer-web.css";

import { useEffect, useState } from "react";
import { movieSerieFullList } from "./db/MovieSerie.js";
import { guardarEnLocalStorage } from "./utils/localStorage.js";

export default function App() {
  const [moviesList, setMovieList] = useState([]);

  useEffect(() => {
    const raw = localStorage.getItem("MoviesSeries");
    if (raw === null) {
      setMovieList(movieSerieFullList);
      guardarEnLocalStorage("MoviesSeries", movieSerieFullList);
    } else {
      try {
        setMovieList(JSON.parse(raw) || []);
      } catch {
        setMovieList(movieSerieFullList);
        guardarEnLocalStorage("MoviesSeries", movieSerieFullList);
      }
    }
  }, []);

  return (
    <>
      <div>
        <AppRouter />
      </div>
    </>
  );
}
