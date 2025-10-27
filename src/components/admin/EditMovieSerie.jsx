import volver from "../../assets/volver.svg";

export default function EditForm({
  obtenerDatos,
  openModal,
  closeModal,
  nombre,
  setNombre,
  fecha,
  setFecha,
  genero,
  setGenero,
  tipo,
  setTipo,
  descripcion,
  setDescripcion,
  url,
  setURL,
}) {
  if (!openModal) return null;

  return (
    <section className="section-modal" role="dialog" aria-modal="true">
      <form className="modal-edit" onSubmit={obtenerDatos}>
        <div className="modal-edit-topbar">
          <div>
            <button type="button" onClick={closeModal} aria-label="Volver">
              <img src={volver} alt="Volver" />
            </button>
          </div>
          <div id="titulo-modal-editar">Editar Pelicula/Serie</div>
          <div>
            <button type="button" onClick={closeModal}>
              Cancelar
            </button>
          </div>
        </div>

        <div className="modal-edit_inputs">
          <label htmlFor="nombre">Nombre de la pelicula o serie</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            maxLength={30}
            onChange={(e) => setNombre(e.target.value).trim()}
            placeholder="Nombre"
            required
          />

          <label htmlFor="fecha">Año de estreno</label>
          <input
            id="fecha"
            type="number"
            min={1800}
            max={2025}
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            placeholder=""
          />

          <label>Género</label>

          <div className="genero-section">
            <div className="modal-edit_inputs_buttons" role="radiogroup">
              <div>
                <input
                  type="radio"
                  name="genero"
                  id="accion"
                  value="Acción"
                  checked={genero === "Acción"}
                  onChange={(e) => setGenero(e.target.value)}
                />
                <label htmlFor="accion">Acción</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="genero"
                  id="comedia"
                  value="Comedia"
                  checked={genero === "Comedia"}
                  onChange={(e) => setGenero(e.target.value)}
                />
                <label htmlFor="comedia">Comedia</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="genero"
                  id="drama"
                  value="Drama"
                  checked={genero === "Drama"}
                  onChange={(e) => setGenero(e.target.value)}
                />
                <label htmlFor="drama">Drama</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="genero"
                  id="ciencia-ficcion"
                  value="Ciencia Ficción"
                  checked={genero === "Ciencia Ficción"}
                  onChange={(e) => setGenero(e.target.value)}
                />
                <label htmlFor="ciencia-ficcion">Ciencia Ficción</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="genero"
                  id="terror"
                  value="Terror"
                  checked={genero === "Terror"}
                  onChange={(e) => setGenero(e.target.value)}
                />
                <label htmlFor="terror">Terror</label>
              </div>

              <div>
                <input
                  type="radio"
                  name="genero"
                  id="fantasia"
                  value="Fantasía"
                  checked={genero === "Fantasía"}
                  onChange={(e) => setGenero(e.target.value)}
                />
                <label htmlFor="fantasia">Fantasía</label>
              </div>
            </div>
          </div>

          <label>Tipo</label>
          <div
            className="modal-edit_inputs_buttons"
            role="radiogroup"
            aria-label="Tipo de contenido"
          >
            <input
              type="radio"
              id="tipo-pelicula"
              name="tipo"
              value="Pelicula"
              checked={tipo === "Pelicula"}
              onChange={(e) => setTipo(e.target.value)}
            />
            <label htmlFor="tipo-pelicula">Pelicula</label>

            <input
              type="radio"
              id="tipo-serie"
              name="tipo"
              value="Serie"
              checked={tipo === "Serie"}
              onChange={(e) => setTipo(e.target.value)}
            />
            <label htmlFor="tipo-serie">Serie</label>
          </div>

          <label htmlFor="descripcion">Agrega una descripcion</label>
          <textarea
            id="descripcion"
            className="text-area"
            value={descripcion}
            maxLength={400}
            onChange={(e) => setDescripcion(e.target.value).trim()}
          />

          <label htmlFor="url">Foto de portada</label>
          <input
            id="url"
            type="text"
            value={url}
            onChange={(e) => setURL(e.target.value).trim()}
            required
          />

          <div className="modal-edit_inputs_img-previw">
            <p>Vista previa</p>
            {url ? <img src={url} alt="Vista previa" /> : <></>}
          </div>

          <div className="modal-edit_buttons">
            <button className="btn-editar" type="submit">
              Enviar
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
