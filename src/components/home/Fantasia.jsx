import { filtrarYMostrar } from "../../utils/localStorage";

export default function Fantasia() {
  const movieList = filtrarYMostrar("Fantasia");
  const terrorList = movieList.sort(() => Math.random() - 0.5);
  return (
    <>
      {terrorList.map((serie, key) => {
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
