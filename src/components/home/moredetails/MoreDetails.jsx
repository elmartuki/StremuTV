import "./moredetails.css";
import volver from "../../../assets/volver.svg";
import compartir from "../../../assets/compartir.svg";
import add from "../../../assets/add.svg";
import play from "../../../assets/play.svg";
import star from "../../../assets/star.svg";
import { repartoCompleto } from "../../../db/Reparto";
import { useNavigate, useParams } from "react-router-dom";
import {
  filtrarYMostrar,
  obtenerDelLocalStorage,
  obtenerPeliculasOSerieLS,
} from "../../../utils/localStorage";
import { useEffect, useState } from "react";
import ConfirmFav from "../../favoritos/ConfirmFav";
import ErrorModal from "./ErrorModal";

export default function MoreDetails() {
  const repatoFullRandom = [...repartoCompleto].sort(() => Math.random() - 0.5);
  const randomStars = Math.floor(Math.random() * 10);

  const [confirmModal, setConfirmModal] = useState(false);
  const [showError, setShowError] = useState(false);

  const { id } = useParams();

  const navigate = useNavigate();

  const pelis = obtenerPeliculasOSerieLS("Pelicula") || [];
  const series = obtenerPeliculasOSerieLS("Serie") || [];
  const terror = filtrarYMostrar("Terror") || [];
  const accion = filtrarYMostrar("Accion") || [];
  const cienciaFiccion = filtrarYMostrar("Ciencia Ficcion") || [];
  const comedia = filtrarYMostrar("Comedia");
  const drama = filtrarYMostrar("Drama");
  const fantasia = filtrarYMostrar("Fantasia");

  const catalogoCompleto = [
    ...pelis,
    ...series,
    ...accion,
    ...cienciaFiccion,
    ...comedia,
    ...drama,
    ...fantasia,
    ...terror,
  ];

  const articulo = catalogoCompleto.find((buscar) => {
    return String(buscar.id) === String(id);
  });

  const { url, nombre, genero, descripcion, fecha } = articulo;

  function handleFav() {
    setTimeout(() => {
      setConfirmModal(false);
    }, 3000);

    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");

    let existe = false;

    favoritos.forEach((favorito) => {
      if (favorito.id === articulo.id) {
        existe = true;
      }
    });

    if (existe) {
      setConfirmModal(false);
      setShowError(true);

      setTimeout(() => {
        setShowError(false);
      }, 3000);
    } else {
      setConfirmModal(true);
      favoritos.push(articulo);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    }
  }

  function closeMessage() {
    setConfirmModal(false);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{ display: showError ? "flex" : "none" }}>
        <ErrorModal nombre={nombre} />
      </div>

      <ConfirmFav
        confirmModal={confirmModal}
        nombre={nombre}
        img={url}
        closeMessage={closeMessage}
      />
      <section className="preview_section">
        <article className="preview">
          <div className="preview_topbar">
            <button onClick={() => navigate(-1)}>
              <img src={volver} alt="" />
            </button>

            <button onClick={() => navigate(-1)}>
              <img src={compartir} alt="" />
            </button>
          </div>

          <div className="preview_img">
            <img src={url} alt={nombre} />
          </div>

          <div className="preview_details-section">
            <div className="preview_details">
              <div className="preview_details_title">
                <p>{nombre}</p>
              </div>

              <div className="preview_details_more">
                <div>{fecha}</div>
                <span className="split"></span>
                <div>{genero}</div>
                <span className="split"></span>
                <div>
                  <img src={star} alt="" />
                  {randomStars}/10
                </div>
              </div>
            </div>

            <div className="preview_buttons">
              <button onClick={handleFav}>
                <img src={add} alt="" />
                Añadir a favoritos
              </button>
              <button>
                <img src={play} alt="" />
                Ver trailer
              </button>
            </div>

            <div className="preview_description">
              <p>Sinapsis</p>
              <p>{descripcion}</p>
            </div>

            <div className="preview_reparto">
              <p>Reparto Principal</p>
              <div>
                {repatoFullRandom.map((reparto, key) => {
                  const { nombre, url_img } = reparto;
                  return (
                    <>
                      <div key={key} className="preview_reparto-card">
                        <div className="preview_reparto-card_img">
                          <img src={url_img} alt="" />
                        </div>
                        <p>{nombre}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            <div className="preview_clips">
              <p>Trailers y Clips</p>
              <div>
                <div className="preview_clips_preview"></div>
                <div className="preview_clips_preview"></div>
                <div className="preview_clips_preview"></div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
