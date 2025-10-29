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
              <img src={back} alt="" />
              Volver
            </button>
          </div>

          <div className="account-config_perfil">
            <div className="account-config_perfil-account">
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
          </div>

          <div className="account-config_list">
            <NavLink onClick={closeConfig} to="/favoritos">
              <button className="account-config_list_access">
                <div>
                  <img src={favIcon} alt="" />
                  <p>Favoritos</p>
                  <p>{FavCount}</p>
                  <img src={right} alt="" />
                </div>
              </button>
            </NavLink>

            <button className="account-config_list_add">
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
              <button>
                <NavLink to="*">
                  <div>
                    <img src={dispositivos} alt="" />
                    Dispositivos Compatibles
                  </div>
                </NavLink>

                <img src={right} alt="" />
              </button>
              <button>
                <NavLink to="*">
                  <div>
                    <img src={help} alt="" />
                    Ayuda
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
