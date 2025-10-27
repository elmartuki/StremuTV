import emailjs from "@emailjs/browser";
import { obtenerDelLocalStorage } from "../../utils/localStorage";
import { useState } from "react";
import backPassword from "../../assets/passwordRecover.svg";

export default function Passwords() {
  const [usuarioCorreo, setUsuarioCorreo] = useState("");
  const [messagePass, setMessagePass] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const usuarios = obtenerDelLocalStorage("usuarios") || [];
    const usuario = usuarios.find((u) => u.correo === usuarioCorreo);

    if (!usuario) {
      alert("Correo inexistente");
      return;
    }

    const resetLink = `https://trabajo-jygdvrifg-elmartukis-projects.vercel.app/recover-section/${usuario.id}`;

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

  return (
    <>
      <form onSubmit={handleSubmit} className="form-password">
        <div className="img">
          <img src={backPassword} alt="password" />
        </div>

        <h2 className="title-password">Recuperar contraseña</h2>

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

        {/* 👇 Esta es la parte nueva (opción 2) */}
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
      </form>
    </>
  );
}
