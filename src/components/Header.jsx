import { useEffect, useState } from "react";
import searchImg from "../assets/search_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg";
import usserImg from "../assets/usser.svg";
import FilterSearch from "./filters/FilterSearch.jsx";
import LoginModal from "./login/LoginModal.jsx";

export default function Header() {
  const [openLogin, setOpenLogin] = useState(false);
  const [textoIngreado, setTextoIngreado] = useState("");

  const [openConfig, setOpenConfig] = useState(false);

  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [usuarioLogueado, setUsuarioLogueado] = useState(null);

  const usuario = obtenerDelSessionStorage("SavedUsser");

  function handleOpenLogin() {
    setOpenLogin(true);
  }

  function closeLogin() {
    setOpenLogin(false);
  }
  function openConfigModal() {
    setOpenConfig(true);
  }

  function closeConfig() {
    setOpenConfig(false);
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

  return (
    <>
      <header className="">
        <nav className="navbar">
          <div
            className="navbar_1"
            style={{ width: usuarioLogueado ? "45%" : "30%" }}
          >
            {usuarioLogueado ? (
              <div className="navbar_1-logo">
                <button onClick={handleOpenLogin}>
                  <img src={usuario.perfil} alt="" />
                </button>

                <div>
                  <p>Bienvenido de nuevo,</p>
                  <p>{usuario.usuario}</p>
                </div>
              </div>
            ) : (
              <div className="navbar_1-logo">
                <p>Stremu</p>
              </div>
            )}

            <div className="navbar_link">
              <a href="">Peliculas</a>
              <a href="">Series</a>
              <a href="">Tendencias</a>
              <a href="">Categorias</a>
            </div>
          </div>

          <div
            style={{ width: usuarioLogueado ? "55%" : "70%" }}
            className="navbar_2"
          >
            <div className="navbar_2-search">
              <div className="navbar_2-border">
                <button onClick={handleOpenSearch} className="search-img">
                  <img src={searchImg} alt="Buscar" />
                </button>
              </div>
            </div>
              ) : (
                <div>
                  <button className="usser-not-log" onClick={handleOpenLogin}>
                    <img src={usserImg} alt="" />
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

      {openLogin && (
        <>
          <LoginModal closeLogin={closeLogin} />
        </>
      )}

      {openConfig && <AccountModal closeConfig={closeConfig} />}

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
