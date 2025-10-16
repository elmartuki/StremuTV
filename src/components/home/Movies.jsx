import { obtenerPeliculasOSerieLS } from "../../utils/localStorage";

export default function Movies() {
  const movieList = obtenerPeliculasOSerieLS("Pelicula");
  const moviesRandom = movieList.sort(() => Math.random() - 0.5);

  return (
    <>
      {moviesRandom.map((movie, key) => {
        const { nombre, url } = movie;
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
