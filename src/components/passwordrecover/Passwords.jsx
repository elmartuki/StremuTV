import emailjs from "@emailjs/browser";
import { obtenerDelLocalStorage } from "../../utils/localStorage";
import { useState } from "react";

export default function Passwords() {
  const [usuarioCorreo, setUsuarioCorreo] = useState("");
  const [messagePass, setMessagePass] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const usuarios = obtenerDelLocalStorage("usuarios") || [];
    const usuario = usuarios.find((u) => u.correo === usuarioCorreo);

    if (!usuario) {
      alert("❌ Correo inexistente");
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
    <form onSubmit={handleSubmit}>
      <h2>Recuperar contraseña</h2>
      <input
        type="email"
        value={usuarioCorreo}
        onChange={(e) => setUsuarioCorreo(e.target.value)}
        placeholder="tu@email.com"
      />
      <button type="submit">Enviar correo</button>
      {messagePass && <p>{messagePass.msg}</p>}
    </form>
  );
}
