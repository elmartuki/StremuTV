import React, { useState } from "react";

function FormularioVerMasTarde({ agregarPelicula }) {
  const [titulo, setTitulo] = useState("");
  const [nota, setNota] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (titulo.trim() === "") return;
    agregarPelicula({ titulo, nota, vista: false });
    setTitulo("");
    setNota("");
  };

  return (
    <form onSubmit={manejarEnvio} className="formulario-verMasTarde">
      <input
        type="text"
        placeholder="Nombre de la pelicula"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nota o comentario (opcional)"
        value={nota}
        onChange={(e) => setNota(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormularioVerMasTarde;
