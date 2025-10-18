import "./header.css";
import { useEffect, useState } from "react";
import searchImg from "../assets/search_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
import usserImg from "../assets/usser.svg";
import FilterSearch from "./filters/FilterSearch.jsx";

export default function Header() {
  const [openLogin, setOpenLogin] = useState(false);
  const [textoIngreado, setTextoIngreado] = useState("");

  const [showSearch, setShowSearch] = useState(false);

  const logueado = false;

  const handleSearch = () => {
    setSearch(!search);
  };

  const handleOpenLogin = () => {
    setOpenLogin(!openLogin);
  };

  function handleText(event) {
    setTextoIngreado(event.target.value);

    const texto = event.target.value;

    if (texto.trim().length > 0) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }

  useEffect(() => {
    setTextoIngreado(event.target.value);
  }, [textoIngreado]);

  return (
    <>
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
              <div className="navbar_2-border">
                <input
                  onChange={handleText}
                  onClick={handleSearch}
                  value={textoIngreado}
                  type="text"
                  placeholder="Buscar peliculas o series..."
                />
                <button className="search-img">
                  <img src={searchImg} alt="Buscar" />
                </button>
              </div>
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

      {showSearch && (
        <FilterSearch
          styles={{ display: showSearch ? "flex" : "none" }}
          searchInput={textoIngreado}
        />
      )}
    </>
  );
}
