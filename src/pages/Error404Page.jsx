import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import { obtenerDelLocalStorage } from "../utils/localStorage";
import movieIcon from "../assets/movieIcon.svg";
import "../css/error-404.css";

export default function Error404Page() {
  const usserKey = obtenerDelLocalStorage("UsserKey");

  return (
    <section className="error-404-section">
      <article className="error-404">
        <div className="error-404_img">
          <img src={movieIcon} alt="" />
        </div>
        <div className="error-404_tittle">
          <p>404</p>
          <p>¡Ups! Parece que esta página se perdió en el guion.</p>
        </div>
        <div className="error-404_desc">
          <p>
            No te preocupes, no es tu culpa. La página que buscas no se ha
            podido encontrar, pero la función debe continuar. Puedes volver al
            inicio.
          </p>
        </div>

        <div className="error-404_buttons">
          {usserKey ? (
            <>
              <Link to="/home">
                <button
                  variant="outline-light"
                  className="d-flex align-items-center gap-2"
                >
                  <i className="bi bi-arrow-left"></i> Volver al inicio
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <button
                  variant="outline-light"
                  className="d-flex align-items-center gap-2"
                >
                  <i className="bi bi-arrow-left"></i> Volver al inicio
                </button>
              </Link>
            </>
          )}
        </div>
      </article>
    </section>
  );
}
