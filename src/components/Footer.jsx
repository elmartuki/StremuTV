import Swal from "sweetalert2";
import "./footer.css";
import home from "../assets/home.svg";
import movies from "../assets/movies.svg";
import series from "../assets/series.svg";
import config from "../assets/config.svg";
import guardados from "../assets/guardados.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_links">
        <div>
          <NavLink to="/">
            <img src={home} alt="" />
            <a href="">Inicio</a>
          </NavLink>
        </div>

        <div>
          <NavLink to="/movies">
            <img src={series} alt="" />
            Peliculas
          </NavLink>
        </div>

        <div>
          <NavLink to="/series">
            <img src={movies} alt="" />
            Series
          </NavLink>
        </div>

        <div>
          <NavLink to="/guardados">
            {" "}
            <img src={guardados} alt="" />
            Favoritos
          </NavLink>
        </div>
      </div>
    </footer>
  );
}
