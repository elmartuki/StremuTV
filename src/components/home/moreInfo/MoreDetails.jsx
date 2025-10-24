import volver from "../../../assets/volver.svg";
import compartir from "../../../assets/compartir.svg";
import play from "../../../assets/play.svg";
import star from "../../../assets/star.svg";
import fav from "../../../assets/favorite.svg";
import { repartoCompleto } from "../../../db/Reparto";
import { useNavigate, useParams } from "react-router-dom";
import {
  filtrarYMostrar,
  guardarEnLocalStorage,
  obtenerDelLocalStorage,
  obtenerPeliculasOSerieLS,
} from "../../../utils/localStorage";
import { useEffect, useState } from "react";
import ConfirmFav from "../../fav/ConfirmFav";
import ErrorModal from "./ErrorModal";

export default function MoreDetails() {
  const repatoFullRandom = [...repartoCompleto].sort(() => Math.random() - 0.5);
  const randomStars = Math.floor(Math.random() * 10);

  const [confirmModal, setConfirmModal] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [active, setActive] = useState(false);
  const [listFavoritos, setListFavoritos] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const pelis = obtenerPeliculasOSerieLS("Pelicula") || [];
  const series = obtenerPeliculasOSerieLS("Serie") || [];
  const terror = filtrarYMostrar("Terror") || [];
  const accion = filtrarYMostrar("Accion") || [];
  const cienciaFiccion = filtrarYMostrar("Ciencia Ficcion") || [];
  const comedia = filtrarYMostrar("Comedia") || [];
  const drama = filtrarYMostrar("Drama") || [];
  const fantasia = filtrarYMostrar("Fantasia") || [];

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
    return Number(buscar.id) === Number(id);
  });

  let url, video, nombre, genero, descripcion, fecha;

  if (articulo) {
    ({ url, video, nombre, genero, descripcion, fecha } = articulo);
  }

  function handleFav() {
    let thisExist = false;

    const favoritos = obtenerDelLocalStorage("favoritos") || [];
    favoritos.filter((item) => {
      if (Number(item.id) === Number(articulo.id)) {
        thisExist = true;
      }
    });

    if (thisExist) {
      const nuevos = favoritos.filter(
        (item) => Number(item.id) !== Number(articulo.id)
      );
      guardarEnLocalStorage("favoritos", nuevos);
      setActive(false);
      setShowError(true);
      setConfirmModal(false);
    } else {
      const nuevos = [...favoritos, articulo];
      guardarEnLocalStorage("favoritos", nuevos);
      setActive(true);
      setShowError(false);
      setConfirmModal(true);
    }

    setTimeout(() => {
      setConfirmModal(false);
      setShowError(false);
    }, 5000);
  }

  function closeMessage() {
    setConfirmModal(false);
  }

  function handlePlay() {
    setShowVideo(true);
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
        <article
          className="preview"
          style={{ margin: showVideo ? "0px 0px 70px 0px" : "" }}
        >
          <div className="preview_topbar">
            <button onClick={() => navigate(-1)}>
              <img src={volver} alt="" />
              <p>Volver</p>
            </button>
          </div>

          {showVideo ? (
            <div
              style={{ margin: showVideo ? "20px 0px 0px 0px" : "0px" }}
              className="preview_img"
            >
              <iframe
                src={video}
                width="640"
                height="360"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowfullscreen
                frameborder="0"
              ></iframe>
            </div>
          ) : (
            <div className="preview_img">
              <img src={url} alt={nombre} />
            </div>
          )}

          <div
            className="preview_details-section"
            style={{
              top: showVideo ? "0px" : "-100px",
              padding: showVideo ? "5px 20px" : "",
            }}
          >
            {showVideo ? (
              <>
                <div className="preview_buttons">
                  <div className="fav-buttons">
                    <button
                      className={active ? "fav-active" : "fav-disabled"}
                      onClick={handleFav}
                    >
                      <img className="fav" src={fav} alt="" />
                      Favoritos
                    </button>

                    <button>
                      <img className="filter-invert" src={compartir} alt="" />
                      Compartir
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
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
                  <button>
                    <img
                      className="filter-invert"
                      onClick={handlePlay}
                      src={play}
                      alt=""
                    />
                    Ver trailer
                  </button>
                  <div className="fav-buttons">
                    <button
                      className={active ? "fav-active" : "fav-disabled"}
                      onClick={handleFav}
                    >
                      <img className="fav" src={fav} alt="" />
                      Favoritos
                    </button>
                    <button>
                      <img className="filter-invert" src={compartir} alt="" />
                      Compartir
                    </button>
                  </div>
                </div>
              </>
            )}

            <div className="preview_description">
              <p>Sinapsis</p>
              <p>{descripcion}</p>
            </div>

            <div className="preview_reparto">
              <p>Reparto Principal</p>
              <div>
                {repatoFullRandom.map((reparto) => {
                  const { nombre, url_img } = reparto;
                  return (
                    <>
                      <div className="preview_reparto-card">
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
