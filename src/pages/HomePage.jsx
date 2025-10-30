import { useEffect, useState } from "react";
import flechaabajo from "../assets/flechaabajo.svg";
import Accion from "../components/home/Accion";
import CienciaFiccion from "../components/home/CienciaFiccion";
import Comedia from "../components/home/Comedia";
import Drama from "../components/home/Drama";
import Fantasia from "../components/home/Fantasia";
import Important from "../components/home/Important";
import Movies from "../components/home/Movies";
import Series from "../components/home/Series";
import Terror from "../components/home/Terror";

export default function HomePage() {
  const [showFive1, setShowFive1] = useState(7);
  const [showFive2, setShowFive2] = useState(7);
  const [showFive3, setShowFive3] = useState(7);
  const [showFive4, setShowFive4] = useState(7);
  const [showFive5, setShowFive5] = useState(7);
  const [showFive6, setShowFive6] = useState(7);
  const [showFive7, setShowFive7] = useState(7);
  const [showFive8, setShowFive8] = useState(7);

  function showMore1() {
    if (window.innerWidth > 1024) {
      setShowFive1(showFive1 + 7);
    } else {
    }
  }

  function showMore2() {
    if (window.innerWidth > 1024) {
      setShowFive2(showFive2 + 7);
    }
  }

  function showMore3() {
    if (window.innerWidth > 1024) {
      setShowFive3(showFive3 + 7);
    }
  }

  function showMore4() {
    if (window.innerWidth > 1024) {
      setShowFive4(showFive4 + 7);
    }
  }

  function showMore5() {
    if (window.innerWidth > 1024) {
      setShowFive5(showFive5 + 7);
    }
  }

  function showMore6() {
    if (window.innerWidth > 1024) {
      setShowFive6(showFive6 + 7);
    }
  }

  function showMore7() {
    if (window.innerWidth > 1024) {
      setShowFive7(showFive7 + 7);
    }
  }

  function showMore8() {
    if (window.innerWidth > 1024) {
      setShowFive8(showFive8 + 7);
    }
  }

  return (
    <>
      <section className="home-page">
        <section className="section_important">
          <Important />
        </section>

        <p className="section_home-title">Series Destacadas</p>
        <section className="section_home">
          <Series showMore={showFive2} />
        </section>
        <div className="home-page_button">
          <button onClick={showMore2}>
            <img src={flechaabajo} alt="boton para ver mas" />
            Ver más
          </button>
        </div>

        <p className="section_home-title">Peliculas Destacadas</p>
        <section className="section_home">
          <Movies showMore={showFive1} />
        </section>
        <div className="home-page_button">
          <button onClick={showMore1}>
            <img src={flechaabajo} alt="boton para ver mas" />
            Ver más
          </button>
        </div>

        <p className="section_home-title">Terror</p>
        <section className="section_home">
          <Terror showMore={showFive3} />
        </section>
        <div className="home-page_button">
          <button onClick={showMore3}>
            <img src={flechaabajo} alt="boton para ver mas" />
            Ver más
          </button>
        </div>

        <p className="section_home-title">Comedia</p>
        <section className="section_home">
          <Comedia showMore={showFive4} />
        </section>
        <div className="home-page_button">
          <button onClick={showMore4}>
            <img src={flechaabajo} alt="boton para ver mas" />
            Ver más
          </button>
        </div>

        <p className="section_home-title">Fantasia</p>
        <section className="section_home">
          <Fantasia showMore={showFive5} />
        </section>
        <div className="home-page_button">
          <button onClick={showMore5}>
            <img src={flechaabajo} alt="boton para ver mas" />
            Ver más
          </button>
        </div>

        <p className="section_home-title">Drama</p>
        <section className="section_home">
          <Drama showMore={showFive6} />
        </section>
        <div className="home-page_button">
          <button onClick={showMore6}>
            <img src={flechaabajo} alt="boton para ver mas" />
            Ver más
          </button>
        </div>

        <p className="section_home-title">Ciencia Ficción</p>
        <section className="section_home">
          <CienciaFiccion showMore={showFive7} />
        </section>
        <div className="home-page_button">
          <button onClick={showMore7}>
            <img src={flechaabajo} alt="boton para ver mas" />
            Ver más
          </button>
        </div>

        <p className="section_home-title">Acción</p>
        <section className="section_home">
          <Accion showMore={showFive8} />
        </section>

        <div className="home-page_button">
          <button onClick={showMore8}>
            <img src={flechaabajo} alt="boton para ver mas" />
            Ver más
          </button>
        </div>
      </section>
    </>
  );
}
