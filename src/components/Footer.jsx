import home from "../assets/home.svg";
import movies from "../assets/movies.svg";
import series from "../assets/series.svg";
import guardados from "../assets/guardados.svg";
import admin from "../assets/admin.svg";
import { NavLink, useLocation } from "react-router-dom";
import { obtenerDelLocalStorage } from "../utils/localStorage";

export default function Footer() {
  const location = useLocation();
  const url = location.pathname;

  const usuario = obtenerDelLocalStorage("UsserKey");

  return (
    <footer className="footer">
      <div className="footer_links">
        {usuario.rol === "usuario" ? (
          <>
            <div className={url === "/home" ? "footer-activo" : ""}>
              <NavLink to="/home">
                <img src={home} alt="Seccion inicio" />
                <a href="">Inicio</a>
              </NavLink>
            </div>

            <div className={url === "/movies" ? "footer-activo" : ""}>
              <NavLink to="/movies">
                <img src={series} alt="Seccion peliculas" />
                Peliculas
              </NavLink>
            </div>

            <div className={url === "/series" ? "footer-activo" : ""}>
              <NavLink to="/series">
                <img src={movies} alt="Seccion series" />
                Series
              </NavLink>
            </div>

            <div className={url === "/favoritos" ? "footer-activo" : ""}>
              <NavLink to="/favoritos">
                {" "}
                <img src={guardados} alt="seccion favoritos" />
                Favoritos
              </NavLink>
            </div>
          </>
        ) : (
          <></>
        )}

        {usuario.rol === "admin" ? (
          <>
            <div className={url === "/home" ? "footer-activo" : ""}>
              <NavLink to="/home">
                <img src={home} alt="Seccion inicio" />
                <a href="">Inicio</a>
              </NavLink>
            </div>

            <div className={url === "/movies" ? "footer-activo" : ""}>
              <NavLink to="/movies">
                <img src={series} alt="Seccion peliculas" />
                Peliculas
              </NavLink>
            </div>

            <div className={url === "/series" ? "footer-activo" : ""}>
              <NavLink to="/series">
                <img src={movies} alt="Seccion series" />
                Series
              </NavLink>
            </div>
            <div className={url === "/admin" ? "footer-activo" : ""}>
              <NavLink to="/admin">
                {" "}
                <img src={admin} alt="seccion admin" />
                Admin
              </NavLink>
            </div>
            <div className={url === "/usuarios" ? "footer-activo" : ""}>
              <NavLink to="/usuarios">
                {" "}
                <img src={admin} alt="seccion admin" />
                Usuarios
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
