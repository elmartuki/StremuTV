import Swal from "sweetalert2";
import "./footer.css";
import home from "../assets/home.svg";
import movies from "../assets/movies.svg";
import series from "../assets/series.svg";
import config from "../assets/config.svg";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_links">
        <div>
          <img src={home} alt="" />
          <a href="">Inicio</a>
        </div>

        <div>
          <img src={series} alt="" />
          <NavLink to="/movies">Peliculas</NavLink>
        </div>

        <div>
          <img src={movies} alt="" />
          <a href="">Series</a>
        </div>

        <div>
          <img src={config} alt="" />
          <a href="" >Ajustes</a>
        </div>
      </div>
    </footer>
  );
}
