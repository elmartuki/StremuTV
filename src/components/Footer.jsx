import home from "../assets/home.svg";
import movies from "../assets/movies.svg";
import series from "../assets/series.svg";
import guardados from "../assets/guardados.svg";
import admin from "../assets/admin.svg"
import { NavLink, useLocation } from "react-router-dom";
import { obtenerDelLocalStorage } from "../utils/localStorage";

export default function Footer() {
  const location = useLocation();
  const url = location.pathname;

  const usuario = obtenerDelLocalStorage("UsserKey");

  return (
    <footer className="footer">
      <div className="footer_links">
        <div className={url === "/home" ? "footer-activo" : ""}>
          <NavLink to="/home">
            <img src={home} alt="" />
            <a href="">Inicio</a>
          </NavLink>
        </div>

        <div className={url === "/movies" ? "footer-activo" : ""}>
          <NavLink to="/movies">
            <img src={series} alt="" />
            Peliculas
          </NavLink>
        </div>

        <div className={url === "/series" ? "footer-activo" : ""}>
          <NavLink to="/series">
            <img src={movies} alt="" />
            Series
          </NavLink>
        </div>

        <div className={url === "/favoritos" ? "footer-activo" : ""}>
          <NavLink to="/favoritos">
            {" "}
            <img src={guardados} alt="" />
            Favoritos
          </NavLink>
        </div>

        {usuario.rol === "admin" ? (
          <>
            <div className={url === "/admin" ? "footer-activo" : ""}>
              <NavLink to="/admin">
                {" "}
                <img src={admin} alt="" />
                Admin
              </NavLink>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </footer>
  );
}
