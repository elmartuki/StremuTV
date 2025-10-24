import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import back from "../../assets/back.svg";
import passwordRecover from "../../assets/passwordRecover.svg";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { obtenerDelLocalStorage } from "../../utils/localStorage";

export default function Passwords() {
  const [usuarioCorreo, setUsuarioCorreo] = useState("");
  const [messagePass, setMessagePass] = useState(null);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const correodelLS = obtenerDelLocalStorage("usuarios") || [];
    const [usuario] = correodelLS;
    const { correo } = usuario;

    console.log(correo);

    if (!usuarioCorreo || !usuarioCorreo.includes("@")) {
      setMessagePass({ ok: false, msg: "Por favor ingresa un correo válido" });
      return;
    } else if (usuarioCorreo === correo) {
      emailjs
        .send(
          "service_cj4ecar",
          "template_bpv9zif",
          {
            user_email: usuarioCorreo,
            message: "Solicitud de restablecimiento de contraseña",
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          setMessagePass({ ok: true, msg: "Mensaje enviado 😏" });
          setUsuarioCorreo("");
          console.log("Redireccionando al Inicio de sesion");
          setTimeout(() => {
            navigate("/login");
          }, 5000);
          <a href="/login">Login</a>
        })
        .catch((error) => {
          console.error("Error al enviar el correo:", error);
          setMessagePass({
            ok: false,
            msg: "Error: no se pudo enviar el mensaje 😑",
          });
        });
    } else {
      alert("Email inexistente");
    }
  }

  return (
    <>
      <div className="form-login-back">
        <button onClick={() => navigate(-1)}>
          <img src={back} alt="" />
          <p>Volver</p>
        </button>
      </div>
      <article className="article-password">
        <div className="card-password">
          <article className="img-parrafo-password">
            <div className="img-password">
              <img src={passwordRecover} alt="" />
            </div>
            <p className="parrafo-correo">
              Ingresa tu email o nombre de usuario.
            </p>
          </article>

          <form onSubmit={handleSubmit}>
            <input
              className="input-password"
              value={usuarioCorreo}
              onChange={(event) => {
                setUsuarioCorreo(event.target.value);
              }}
              type="text"
              placeholder="tu@email.com"
            />
            <div className="button-submit">
              <button type="submit">Enviarme email</button>
            </div>
          </form>
          {messagePass && (
            <p
              style={{
                color: messagePass.ok ? "green" : "red",
                marginTop: "10px",
              }}
            >
              {messagePass.msg}
            </p>
          )}
          <div className="navLink">
            <NavLink to="/login">
              <p className="letter">
                ¿Recuerdas tu contraseña? Volve al inicio de sesión
              </p>
            </NavLink>
          </div>
        </div>
      </article>
    </>
  );
}
