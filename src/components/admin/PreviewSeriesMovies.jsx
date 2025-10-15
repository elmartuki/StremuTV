import React, { useState } from "react";
import editImg from "../../assets/edit.svg";
import deleteImg from "../../assets/delete.svg";

export default function ShowMoviesSeries({
  movieList,
  movieToEdit,
  onDeleteClick,
}) {
  return (
    <section className="section-1">
      <p className="section-1-title">Crud de Peliculas y Series</p>
      {movieList.map((movie) => {
        const { id, nombre, url, fecha, genero, tipo, descripcion } = movie;
        return (
          <article key={id} className="card-movie-serie">
            <div className="card-movie-serie_img">
              <img src={url} alt="" />
            </div>
            <div className="card-movie-serie_info">
              <div>
                <p>{nombre},</p>
                <p>{tipo}</p>
              </div>
              <div>
                <p>{fecha},</p>
                <p>{genero}</p>
              </div>
            </div>

            <div className="card-movie-serie_buttons">
              <button onClick={() => movieToEdit(movie)}>
                <img src={editImg}></img>
              </button>
              <button onClick={() => onDeleteClick(movie)}>
                {" "}
                <img src={deleteImg}></img>
              </button>
            </div>
          </article>
        );
      })}
    </section>
  );
}
