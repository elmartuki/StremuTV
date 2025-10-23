import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../css/termsUsePage.css";

export default function TermUse() {
  const [checked, setChecked] = useState(false);
  const [scrolledToEnd, setScrolledToEnd] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const handleScroll = () => {
    const el = contentRef.current;
    if (!el) return;
    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight - el.clientHeight;
    const scrolled = (scrollTop / scrollHeight) * 100;
    setProgress(scrolled);
    if (scrolled >= 95) setScrolledToEnd(true);
  };

  const handleAccept = () => {
    setShowMessage(true);
    setTimeout(() => {
      navigate("/login");
    }, 2500);
  };

  useEffect(() => {
    const el = contentRef.current;
    if (el) el.addEventListener("scroll", handleScroll);
    return () => el && el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="termuse-container">
      {/* 🔔 Mensaje visual */}
      {showMessage && (
        <div className="termuse-message">
          ✅ Has aceptado los Términos y Condiciones correctamente
        </div>
      )}

      <div className="termuse-card">
        <h1 className="termuse-title">Términos y Condiciones de Uso</h1>

        <div ref={contentRef} className="termuse-content">
          <p>
            Bienvenido/a a nuestro sitio web. Al acceder y utilizar esta página,
            usted acepta cumplir con los siguientes términos y condiciones de uso.
            Si no está de acuerdo con alguna parte de estos términos, le
            recomendamos no utilizar el sitio.
          </p>

          <h2>1. Aceptación</h2>
          <p>
            Al ingresar y utilizar este sitio web, el usuario acepta haber leído,
            comprendido y estar de acuerdo con los presentes términos. Nos
            reservamos el derecho de modificar o actualizar estos términos en
            cualquier momento sin previo aviso.
          </p>

          <h2>2. Uso del Sitio</h2>
          <p>
            El contenido del sitio tiene fines informativos y no podrá ser utilizado
            con propósitos ilegales, fraudulentos o que infrinjan derechos de
            terceros. El usuario se compromete a hacer un uso adecuado y responsable
            de toda la información y servicios ofrecidos.
          </p>

          <h2>3. Propiedad Intelectual</h2>
          <p>
            Todo el material disponible en este sitio, incluyendo textos, imágenes,
            logotipos, gráficos y códigos fuente, es propiedad exclusiva del titular
            del sitio o de sus licenciantes. Queda prohibida su copia, distribución o
            modificación sin autorización previa.
          </p>

          <h2>4. Enlaces Externos</h2>
          <p>
            El sitio puede incluir enlaces a páginas de terceros. No nos hacemos
            responsables del contenido, políticas de privacidad o prácticas de dichos
            sitios externos.
          </p>

          <h2>5. Protección de Datos Personales</h2>
          <p>
            La recopilación y el tratamiento de los datos personales se realizan de
            acuerdo con la legislación vigente y nuestra Política de Privacidad. Nos
            comprometemos a proteger la confidencialidad de la información
            proporcionada por los usuarios.
          </p>

          <h2>6. Limitación de Responsabilidad</h2>
          <p>
            No garantizamos la disponibilidad continua del sitio ni la ausencia de
            errores en su contenido. En ningún caso seremos responsables por daños
            directos o indirectos derivados del uso o imposibilidad de uso de los
            servicios ofrecidos.
          </p>

          <h2>7. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar, actualizar o interrumpir los
            servicios y la información del sitio sin previo aviso. El usuario acepta
            que es su responsabilidad revisar periódicamente los términos
            actualizados.
          </p>

          <h2>8. Legislación Aplicable</h2>
          <p>
            Estos términos se rigen por las leyes de la República Argentina.
            Cualquier controversia derivada del uso del sitio será sometida a la
            jurisdicción de los tribunales competentes del país.
          </p>

          <h2>9. Contacto</h2>
          <p>
            Si tiene preguntas, reclamos o comentarios sobre estos Términos y
            Condiciones, puede comunicarse con nosotros a través del formulario de
            contacto o el correo electrónico indicado en el sitio.
          </p>

          <p className="termuse-update">
            Última actualización: 23 de octubre de 2025
          </p>
        </div>

        <div className="termuse-progress">
          <div className="termuse-progress-bar" style={{ width: `${progress}%` }} />
        </div>

        <div className="termuse-accept">
          <label>
            <input
              type="checkbox"
              disabled={!scrolledToEnd}
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />{" "}
            He leído y acepto los Términos y Condiciones
          </label>
        </div>

        <button
          className={`termuse-button ${checked && scrolledToEnd ? "active" : "disabled"
            }`}
          disabled={!checked || !scrolledToEnd}
          onClick={handleAccept}
        >
          Aceptar
        </button>

        {!scrolledToEnd && (
          <p className="termuse-hint">
            Desplázate hasta el final para habilitar la aceptación.
          </p>
        )}
      </div>
    </div>
  );
}
