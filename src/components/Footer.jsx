import home from "../assets/home.svg";
import movies from "../assets/movies.svg";
import series from "../assets/series.svg";
import guardados from "../assets/guardados.svg";
import { NavLink, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const url = location.pathname;

  return (
    <footer className="footer">
      <div className="footer_links">
        <div className={url === "/" ? "footer-activo" : ""}>
          <NavLink to="/">
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
      </div>
    </footer>
  );
}
