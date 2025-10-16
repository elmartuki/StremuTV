import { obtenerPeliculasOSerieLS } from "../../utils/localStorage";

export default function Series() {
  const movieList = obtenerPeliculasOSerieLS("Serie");
  const seriesRandom = movieList.sort(() => Math.random() - 0.5);

  return (
    <>
      {seriesRandom.map((serie, key) => {
        const { nombre, url } = serie;
        return (
          <>
            <article className="movies-card-home" key={key}>
              <div className="movies-card-home_img">
                <img src={url} alt="" />
              </div>
              <div className="movies-card-home_title">
                {" "}
                <p>{nombre}</p>
              </div>
            </article>
          </>
        );
      })}
    </>
  );
}
