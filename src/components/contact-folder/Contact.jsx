import React, { useState } from "react";

export default function Contact() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const manejarCambio = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Datos del formulario:", formulario);

    alert("Mensaje enviado correctamente");

    setFormulario({
      nombre: "",
      correo: "",
      asunto: "",
      mensaje: "",
    });
  };

  return (
    <div className="seccion-contacto">
      {/* formulario */}
      <div className="contenedor-formulario">
        <h2 className="titulo-contacto">Contáctanos</h2>

        <form className="formulario-contacto" onSubmit={manejarEnvio}>
          <label className="etiqueta">Nombre</label>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={formulario.nombre}
            onChange={manejarCambio}
            required
            className="campo-texto"
          />

          <label className="etiqueta">Correo Electrónico</label>
          <input
            type="email"
            name="correo"
            placeholder="ejemplo@correo.com"
            value={formulario.correo}
            onChange={manejarCambio}
            required
            className="campo-texto"
          />

          <label className="etiqueta">Asunto</label>
          <input
            type="text"
            name="asunto"
            placeholder="Asunto"
            value={formulario.asunto}
            onChange={manejarCambio}
            required
            className="campo-texto"
          />

          <label className="etiqueta">Mensaje</label>
          <textarea
            name="mensaje"
            placeholder="Tu mensaje"
            value={formulario.mensaje}
            onChange={manejarCambio}
            required
            className="campo-mensaje"
          ></textarea>

          <button type="submit" className="boton-enviar">
            Enviar
          </button>
        </form>

        <p className="texto-privacidad">Política de Privacidad</p>
      </div>

      {/* ubicacion */}
      <div className="contenedor-mapa">
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1110035048896!2d-65.20970432528028!3d-26.83642149001916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225c0e8d3f160f%3A0xaf25f4de8ee29e12!2sGral.%20Jos%C3%A9%20Mar%C3%ADa%20Paz%20576%2C%20T4000%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1761232847211!5m2!1ses-419!2sar"
          allowFullScreen=""
          loading="lazy"
          className="mapa"
        ></iframe>

        <div className="info-contacto">
          <p className="texto-ubicacion">📍 Tucuman, Argentina</p>
          <p className="texto-telefono">📞 +54 9 381 123 45-67</p>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
