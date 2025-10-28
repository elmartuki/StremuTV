import { useEffect, useState } from "react";
import searchImg from "../assets/search.svg";
import usserImg from "../assets/usser.svg";
import FilterSearch from "./filters/FilterSearch.jsx";
import { obtenerDelLocalStorage } from "../utils/localStorage.js";
import AccountModal from "./account/AccountConfig.jsx";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [openLogin, setOpenLogin] = useState(false);
  const [textoIngreado, setTextoIngreado] = useState("");
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);
  const [openConfig, setOpenConfig] = useState(false);

  const usuarios = obtenerDelLocalStorage("UsserKey");

  const navigateTo = useNavigate();

  useEffect(() => {
    const usuarios = obtenerDelLocalStorage("UsserKey");

    if (usuarios) {
      setUsuarioLogueado(usuarios);
    }
  }, []);

  function handleConfig() {
    setOpenConfig(true);
  }

  function closeConfig() {
    setOpenConfig(false);
  }

  function handleOpenLogin() {
    setOpenLogin(true);
  }

  function closeLogin() {
    setOpenLogin(false);
  }

  useEffect(() => {
    setTextoIngreado(event.target.value);
  }, [textoIngreado]);

  function handleOpenSearch() {
    setOpenSearchModal(true);
  }

  function handleCloseSearch() {
    setOpenSearchModal(false);
  }

  const location = useLocation();
  const url = location.pathname;

  return (
    <>
      <header className="">
        <nav className="navbar">
          <div
            className="navbar_1"
            style={{ width: usuarioLogueado ? "75%" : "30%" }}
          >
            {usuarioLogueado ? (
              <div className="navbar_1-logo">
                <NavLink to="/perfil/">
                  <button>
                    <img src={usuarios.perfil} alt="imagen de perfil" />
                  </button>
                </NavLink>

                <div>
                  <p>Bienvenido de nuevo,</p>
                  <p>{usuarios.usuario}</p>
                </div>
              </div>
            ) : (
              <div className="navbar_1-logo">
                <p>Stremu</p>
              </div>
            )}

            <div className="navbar_link">
              <Link
                className={url === "/home" ? "navbar-activo" : ""}
                to="/home"
              >
                Inicio
              </Link>
              <Link
                className={url === "/movies" ? "navbar-activo" : ""}
                to="/movies"
              >
                Peliculas
              </Link>
              <Link
                className={url === "/series" ? "navbar-activo" : ""}
                to="/series"
              >
                Series
              </Link>
              <Link
                className={url === "/favoritos" ? "navbar-activo" : ""}
                to="/favoritos"
              >
                Favoritos
              </Link>

              {usuarios.rol === "admin" ? (
                <>
                  <Link
                    className={url === "/admin" ? "navbar-activo" : ""}
                    to="/admin"
                  >
                    Admin
                  </Link>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>

          <div
            style={{ width: usuarioLogueado ? "25%" : "70%" }}
            className="navbar_2"
          >
            <div className="navbar_2-search">
              <div className="navbar_2-border">
                <button onClick={handleOpenSearch} className="search-img">
                  <img src={searchImg} alt="Buscar" />
                </button>
              </div>
            </div>

            <div className="navbar_2-login">
              {usuarioLogueado ? (
                <div></div>
              ) : (
                <div>
                  <button className="usser-not-log" onClick={handleOpenLogin}>
                    <img src={usserImg} alt="imagen del usuario sin loguearse" />
                  </button>
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

      {openConfig ? (
        <>
          <AccountModal
            usuario={usuario}
            closeSession={cerrarSession}
            closeConfig={closeConfig}
          />
        </>
      ) : (
        <></>
      )}

      {openLogin && (
        <>
          <LoginModal closeLogin={closeLogin} />
        </>
      )}

      {openSearchModal && (
        <FilterSearch
          styles={{ display: openSearchModal ? "flex" : "none" }}
          searchInput={textoIngreado}
          handleClose={handleCloseSearch}
        />
      )}
    </>
  );
}
