import back from "../../assets/back.svg";
import right from "../../assets/flechaderecha.svg";
import edit from "../../assets/edit.svg";
import favIcon from "../../assets/favorite.svg";
import addIcon from "../../assets/add.svg";
import infoIcon from "../../assets/info.svg";
import contacto from "../../assets/contact.svg";
import sessionIcon from "../../assets/logout.svg";
import dispositivos from "../../assets/dispositivos.svg";
import help from "../../assets/help.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerDelLocalStorage } from "../../utils/localStorage";
import AlertConfirm from "../alerts/AlertConfirm";

export default function AccountConfig({ closeConfig }) {
  const [FavCount, setFavCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [message, showMessage] = useState("");

  const usuario = obtenerDelLocalStorage("UsserKey");

  const navigate = useNavigate();

  function cerrarSession() {
    localStorage.removeItem("UsserKey");
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
              <img src={back} alt="volver una pagina atras" />
              Volver
            </button>
          </div>

          <div className="account-config_perfil">
            <div className="account-config_perfil-account">
              <div>
                <img src={usuario.perfil} alt="foto de perfil del usuario" />
              </div>

              <div>
                <p>{usuario.usuario}</p>
                <p>{usuario.correo}</p>
              </div>
            </div>

            <div className="account-config_buttons">
              <NavLink to="/perfil/edit-perfil">
                <button>
                  <img src={edit} alt="editar perfil" />
                  Editar perfil
                </button>
              </NavLink>
            </div>
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
              <NavLink to="*">
                <img src={addIcon} alt="" />
                Crear una nueva lista.
              </NavLink>
            </button>
          </div>

          <div className="account-config_sub">
            <p>Suscripcion</p>
            <article className="suscripcion">
              <div>
                <p>Plan {usuario.subActiva}</p>
                <p>{usuario.subPrecio}</p>
                {usuario?.subVencimiento && (
                  <p>
                    Se renueva el{" "}
                    {new Date(usuario.subVencimiento).toLocaleDateString(
                      "es-AR",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </p>
                )}
              </div>
              <div>
                <NavLink to="/suscripciones">
                  <button>Gestionar</button>
                </NavLink>
              </div>
            </article>
          </div>

          <div className="account-config_config">
            <p>Ajustes de la cuenta.</p>

            <div className="account-config_config_buttons">
              <button>
                <div>
                  <img
                    className="white"
                    src={infoIcon}
                    alt="icono de informacion"
                  />
                  Contacto
                </div>
                <img src={right} alt="abrir seccion de contacto" />
              </button>
              <button>
                <NavLink to="/sobre-nosotros">
                  <div>
                    <img src={contacto} alt="icono de sobre nosotros" />
                    Sobre Nosotros
                  </div>
                </NavLink>

                <img src={right} alt="abrir seccion sobre nosotros" />
              </button>
              <button>
                <NavLink to="/dispositivos">
                  <div>
                    <img
                      src={dispositivos}
                      alt="icono de dispositivos compatibles"
                    />
                    Dispositivos Compatibles
                  </div>
                </NavLink>

                <img
                  src={right}
                  alt="abrir seccion de dispositivos compatibles"
                />
              </button>
              <button>
                <NavLink to="*">
                  <div>
                    <img src={help} alt="icono de ayuda" />
                    Ayuda
                  </div>
                </NavLink>

                <img src={right} alt="abrir seccion de ayuda" />
              </button>
              <button onClick={cerrarSession}>
                <div>
                  <img src={sessionIcon} alt="icono de cerrar sesión" />
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
