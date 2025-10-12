import Swal from "sweetalert2";
import "./header.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { obtenerDelSessionStorage } from "../utils/localStorage.js";
import searchImg from "../assets/search_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
import menuImg from "../assets/menu.svg";
import usserImg from "../assets/usser.svg";

export default function Header() {
  const [search, setSearch] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const logueado = false;

  const handleSearch = () => {
    setSearch(!search);
  };

  const handleOpenLogin = () => {
    setOpenLogin(!openLogin);
  };

  return (
    <header className="">
      <nav className="navbar">
        <div className="navbar_1">
          <div className="navbar_1-logo">
            <p>StremuTV</p>
          </div>

          <div className="navbar_link">
            <a href="">Peliculas</a>
            <a href="">Series</a>
            <a href="">Tendencias</a>
            <a href="">Categorias</a>
          </div>
        </div>

        <div className="navbar_2">
          <div className="navbar_2-search">
            {search ? (
              <div className="navbar_2-border">
                <input type="text" placeholder="Buscar..." />
                <button className="search-img" onClick={handleSearch}>
                  <img src={searchImg} alt="Buscar" />
                </button>
              </div>
            ) : (
              <button className="search-img" onClick={handleSearch}>
                <img src={searchImg} alt="Buscar" />
              </button>
            )}
          </div>

          <div className="navbar_2-login">
            {logueado ? (
              <div>
                <button onClick={handleOpenLogin}>
                  <img
                    src="https://www.clarin.com/2024/07/04/uteodLeuh_2000x1500__1.jpg"
                    alt="Perfil"
                  />
                </button>

                {openLogin ? (
                  <div className="drowLogin">
                    <a href="">Cerrar Sesion</a>
                  </div>
                ) : null}
              </div>
            ) : (
              <div>
                <button className="usser-not-log" onClick={handleOpenLogin}>
                  <img src={usserImg} alt="" />
                </button>

                {openLogin ? (
                  <div className="drowLogin">
                    <a href="">Register</a>
                    <a href="">Login</a>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>

        <div className="navbar_links">
          <a href="">Peliculas</a>
          <a href="">Series</a>
          <a href="">Tendencias</a>
          <a href="">Categorias</a>
        </div>
      </nav>
    </header>
  );
}
