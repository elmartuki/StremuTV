import emailjs from "@emailjs/browser";
import {
  obtenerDelLocalStorage,
  obtenerPeliculasOSerieLS,
} from "../../utils/localStorage";
import { useEffect, useState } from "react";
import backPassword from "../../assets/passwordRecover.svg";
import back from "../../assets/back.svg";
import { useNavigate } from "react-router-dom";

export default function Passwords() {
  const [usuarioCorreo, setUsuarioCorreo] = useState("");
  const [messagePass, setMessagePass] = useState(null);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const usuarios = obtenerDelLocalStorage("usuarios") || [];
    const usuario = usuarios.find((u) => u.correo === usuarioCorreo);

    if (!usuario) {
      alert("Correo inexistente");
      return;
    }

    const resetLink = `https://stremutv.vercel.app/recover-section/${usuario.id}`;

    emailjs
      .send(
        "service_cj4ecar",
        "template_bpv9zif",
        {
          user_email: usuarioCorreo,
          message: "Solicitud de restablecimiento de contraseña",
          reset_link: resetLink,
        },
        "AOCYzaxwB2mV7irZ0"
      )
      .then(() => {
        setMessagePass({ ok: true, msg: "📩 Email enviado correctamente" });
        setUsuarioCorreo("");
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
        setMessagePass({
          ok: false,
          msg: "Error: no se pudo enviar el mensaje",
        });
      });
  }

  const [indice, setIndice] = useState(0);

  const movieList = obtenerPeliculasOSerieLS("Serie");

  const topFive = movieList.slice(60, 90);

  useEffect(() => {
    const reset = setTimeout(() => {
      if (indice < 4) {
        setIndice(indice + 1);
      } else if (indice > 0) {
        setIndice(0);
        clearInterval();
      }
    }, 8000);

    if (indice.lenght === 0) {
      reset(reset);
    }
  }, [indice]);

  let url;
  let nombre;

  if (topFive && topFive.length > 0 && topFive[indice]) {
    ({ url, nombre } = topFive[indice]);
  }

  return (
    <>
      <div className="form-login-back">
        <button onClick={() => navigate("/login")}>
          <img src={back} alt="boton para volver para atras" />
          <p>Volver</p>
        </button>
      </div>

      <section className="form-login-section">
        <article className="form-login-bg">
          <img src={url} alt={nombre} />
        </article>
        <article>
          <div className="img">
            <img src={backPassword} alt="password" />
          </div>

          <h2 className="title-password">Recuperar contraseña</h2>

          <form className="form-rec" onSubmit={handleSubmit}>
            <div className="input-password">
              <input
                type="email"
                value={usuarioCorreo}
                onChange={(e) => setUsuarioCorreo(e.target.value)}
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="button">
              <button type="submit">Enviar correo</button>
            </div>
          </form>

          {messagePass && (
            <div style={{ textAlign: "center", marginTop: "15px" }}>
              {messagePass.ok ? (
                <p style={{ color: "limegreen" }}>
                  {messagePass.msg}
                  <br />
                  <a
                    href="https://mail.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#8a2be2",
                      fontWeight: "600",
                      textDecoration: "underline",
                    }}
                  >
                    Abrir Gmail
                  </a>
                </p>
              ) : (
                <p style={{ color: "red" }}>{messagePass.msg}</p>
              )}
            </div>
          )}
        </article>
      </section>
    </>
  );
}
