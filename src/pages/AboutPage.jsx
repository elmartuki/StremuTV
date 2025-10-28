import { MdMovie } from "react-icons/md";
import back from "../assets/back.svg";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <main className="about-container">
      <div className="edit-perfil-topbar">
        <button onClick={() => navigate(-1)}>
          <img src={back} alt="boton para volver para atras" />
          Volver
        </button>
      </div>
      <section className="about-header">
        <h1>Sobre Nosotros</h1>
        <div className="about-logo">
          <div className="circle">
            <MdMovie />
          </div>
          <h2>StreamTV</h2>
          <p>Tu universo de películas</p>
        </div>
      </section>

      <section className="about-section">
        <h3>Nuestra Misión</h3>
        <p>
          Conectar a los amantes del cine con las historias que los inspiran,
          ofreciendo una experiencia de descubrimiento y visualización de
          calidad, accesible en cualquier momento y lugar.
        </p>
      </section>

      <section className="about-section">
        <h3>Nuestra Visión</h3>
        <p>
          Ser la plataforma líder a nivel mundial para el descubrimiento de
          contenido cinematográfico, impulsando la creatividad y la innovación
          tecnológica, celebrando la diversidad del cine.
        </p>
      </section>

      <section className="about-section">
        <h3>Nuestra Historia</h3>
        <p>
          Nacimos en 2025 de la pasión de un grupo de cinéfilos y
          desarrolladores que quisieron compartir su propio espacio para el
          cine. Desde entonces, hemos crecido hasta convertirnos en una
          comunidad vibrante y global que celebra el séptimo arte.
        </p>
      </section>

      <section className="about-section">
        <h3>Nuestros Valores</h3>
        <ul>
          <li>
            <strong>Pasión por el cine:</strong> Todo lo que hacemos está
            inspirado por el amor por las películas.
          </li>
          <li>
            <strong>Innovación constante:</strong> Buscamos siempre nuevas
            formas de sorprender a nuestra comunidad.
          </li>
          <li>
            <strong>Comunidad:</strong> Creemos en el poder de compartir y
            disfrutar juntos.
          </li>
          <li>
            <strong>Accesibilidad:</strong> Trabajamos por llevar el cine a
            todos los amantes del séptimo arte.
          </li>
        </ul>
      </section>

      <section className="about-team">
        <h3>Nuestro Equipo</h3>
        <div className="team-grid">
          <div className="team-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVg_URh9Mvrm3NYaTlCUyiM7r382ohELc1g&s"
              alt="MD"
            />
            <h4>Martin Diaz</h4>
          </div>
          <div className="team-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVg_URh9Mvrm3NYaTlCUyiM7r382ohELc1g&s"
              alt="IG"
            />
            <h4>Isaias Gonzalez</h4>
          </div>
          <div className="team-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVg_URh9Mvrm3NYaTlCUyiM7r382ohELc1g&s"
              alt="JS"
            />
            <h4>Jose Salvi</h4>
          </div>
          <div className="team-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVg_URh9Mvrm3NYaTlCUyiM7r382ohELc1g&s"
              alt="RM"
            />
            <h4>Romina Marrone</h4>
          </div>
          <div className="team-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqVg_URh9Mvrm3NYaTlCUyiM7r382ohELc1g&s"
              alt="JM"
            />
            <h4>Jorge Milani</h4>
          </div>
        </div>
      </section>
    </main>
  );
}
