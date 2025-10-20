import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa"; 
import "./../css/Init.css";

export default function Home() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  const faqs = [
    ["¿Qué es StreamTV?", "StreamTV es una plataforma de streaming con miles de películas y series."],
    ["¿Cuánto cuesta StreamTV?", "Depende del plan que elijas. Hay opciones para todos los presupuestos."],
    ["¿Dónde puedo ver StreamTV?", "Puedes verlo en cualquier dispositivo con conexión a internet."],
    ["¿Cómo cancelo?", "Puedes cancelar en cualquier momento desde tu cuenta."],
  ];

  const tendencias = [
    { src: "/assets/naruto.jpg", alt: "Naruto" },
    { src: "/assets/monstruo.jpg", alt: "Monstruo" },
    { src: "/assets/noches.jpg", alt: "Noches" },
    { src: "/assets/batalla.jpg", alt: "Batalla" },
    { src: "/assets/reti.jpg", alt: "Reti" },
  ];

  return (
    <main className="container">
      <h1 className="title">
        Descubre tu <br /> próxima película favorita
      </h1>

      <section className="features">
        <div className="card">
          <span className="icon">
            <FaSearch />
          </span>
          <br />
          <h2>Explora un gran catálogo</h2>
          <p>Encuentra miles de películas y series de todos los géneros.</p>
        </div>

        <div className="card">
          <span className="icon">
            <FaHeart />
          </span>
          <br />
          <h2>Crea tus listas</h2>
          <p>Guarda tus favoritas y organiza lo que quieres ver.</p>
        </div>

        <div className="card">
          <span className="icon">
            <FaUser />
          </span>
          <br />
          <h2>¿Quieres ver StreamTV ya?</h2>
          <p>Registrate y crea tu cuenta para iniciar a ver el contenido.</p>
        </div>
      </section>

      
      <div className="auth-buttons">
        <button className="btn">Iniciar Sesión</button>
        <a href="#" className="link">Regístrate aquí</a>
      </div>

      
      <section className="trending">
        <h2>Tendencias</h2>
        <div className="trending-list">
          {tendencias.map((item, index) => (
            <div className="trend" key={index}>
              <span>{index + 1}</span>
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      
      <section className="faq">
        <h2>¿Por que contratar StreamTV?</h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${active === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="faq-question">{faq[0]}</h3>
            {active === index && <p className="faq-answer">{faq[1]}</p>}
          </div>
        ))}
      </section>
    </main>
  );
}
