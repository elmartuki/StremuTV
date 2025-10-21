import back from "../../assets/back.svg";
import right from "../../assets/flechaderecha.svg";
import edit from "../../assets/edit.svg";
import favIcon from "../../assets/favorite.svg";
import addIcon from "../../assets/add.svg";
import infoIcon from "../../assets/info.svg";
import contacto from "../../assets/contact.svg";
import sessionIcon from "../../assets/logout.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  obtenerDelLocalStorage,
  obtenerDelSessionStorage,
} from "../../utils/localStorage";

export default function AccountConfig({ closeConfig }) {
  const [FavCount, setFavCount] = useState(0);

  const usuario = obtenerDelSessionStorage("SavedUsser");

  const navigate = useNavigate();

  function cerrarSession() {
    sessionStorage.removeItem("SavedUsser");
    navigate("/");
  }

  useEffect(() => {
    const listaFavoritos = obtenerDelLocalStorage("favoritos");

    setFavCount(listaFavoritos.length);
  }, [FavCount]);

  return (
    <>
      <section className="account-config-section">
        <article className="account-config">
          <div className="account-config_topbar">
            <button className="" onClick={() => navigate(-1)}>
              <img src={back} alt="" />
              Volver
            </button>
          </div>

          <div className="account-config_perfil">
            <div>
              <img src={usuario.perfil} alt="" />
            </div>

            <div>
              <p>{usuario.usuario}</p>
              <p>{usuario.correo}</p>
            </div>
          </div>

          <div className="account-config_buttons">
            <NavLink to="/perfil/edit-perfil">
              <button>
                <img src={edit} alt="" />
                Editar perfil
              </button>
            </NavLink>
          </div>

          <div className="account-config_list">
            <p>Mis listas</p>
            <NavLink onClick={closeConfig} to="/favoritos">
              <button>
                <div>
                  <img src={favIcon} alt="" />
                  <p>Favoritos</p>
                  <p>{FavCount}</p>
                </div>

                <img src={right} alt="" />
              </button>
            </NavLink>

            <button>
              <img src={addIcon} alt="" />
              Crear una nueva lista
            </button>
          </div>

          <p>Suscripcion</p>

          <div className="account-config_sub">
            <article className="suscripcion">
              <div>
                <p>Plan Premiun</p>
                <p>Se renueva el 24 de nomviembre, 2024</p>
              </div>
              <div>
                <button>Gestionar</button>
              </div>
            </article>
          </div>

          <div className="account-config_config">
            <p>Ajuste de la cuenta</p>

            <div className="account-config_config_buttons">
              <button>
                <div>
                  <img className="white" src={infoIcon} alt="" />
                  Contacto
                </div>
                <img src={right} alt="" />
              </button>
              <button>
                <NavLink to="/sobre-nosotros">
                  <div>
                    <img src={contacto} alt="" />
                    Sobre Nosotros
                  </div>
                </NavLink>

                <img src={right} alt="" />
              </button>
              <button onClick={cerrarSession}>
                <div>
                  <img src={sessionIcon} alt="" />
                  Cerrar Sesión
                </div>
              </button>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
