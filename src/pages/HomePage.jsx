import Accion from "../components/home/Accion";
import CienciaFiccion from "../components/home/CienciaFiccion";
import Comedia from "../components/home/Comedia";
import Drama from "../components/home/Drama";
import Fantasia from "../components/home/Fantasia";
import Important from "../components/home/Important";
import Movies from "../components/home/Movies";
import "../components/home/movies.css";
import Series from "../components/home/Series";
import Terror from "../components/home/Terror";

export default function HomePage() {
  return (
    <>
      <section className="home-page">
        <section className="section_important">
          <Important />
        </section>

        <p className="section_home-title">Peliculas Destacadas</p>
        <section className="section_home">
          <Movies />
        </section>

        <p className="section_home-title">Series Destacadas</p>
        <section className="section_home">
          <Series />
        </section>

        <p className="section_home-title">Terror</p>
        <section className="section_home">
          <Terror />
        </section>
        <p className="section_home-title">Comedia</p>
        <section className="section_home">
          <Comedia />
        </section>
        <p className="section_home-title">Fantasia</p>
        <section className="section_home">
          <Fantasia />
        </section>
        <p className="section_home-title">Drama</p>
        <section className="section_home">
          <Drama />
        </section>
        <p className="section_home-title">Ciencia Ficcion</p>
        <section className="section_home">
          <CienciaFiccion />
        </section>
        <p className="section_home-title">Accion</p>
        <section className="section_home">
          <Accion />
        </section>
      </section>
    </>
  );
}
