import React, { useEffect, useState } from "react";
import {
  guardarEnLocalStorage,
  obtenerDelLocalStorage,
} from "../../utils/localStorage";
import "../../css/usuarios.css";
import search from "../../assets/search.svg";

export default function UssersPanel() {
  const [searchWord, setSearchWord] = useState("");
  const [update, setUpdate] = useState(
    obtenerDelLocalStorage("usuarios") || []
  );
  const usuarios = obtenerDelLocalStorage("usuarios");

  const usserFiltered = usuarios.filter((u) => {
    return u.usuario.toLowerCase().includes(searchWord.toLowerCase());
  });

  const listToShow = searchWord.trim() ? usserFiltered : usuarios;

  function bannear(usser) {
    const usuarios = obtenerDelLocalStorage("usuarios");

    const usuarioActual = usuarios.find((u) => u.id === usser.id);

    if (usuarioActual.baneado === true) {
      const desbanearUsuario = {
        ...usuarioActual,
        baneado: false,
      };

      const usuariosActualizados = usuarios.map((u) => {
        return u.id === desbanearUsuario.id ? desbanearUsuario : u;
      });

      guardarEnLocalStorage("usuarios", usuariosActualizados);

      setUpdate(usuariosActualizados);
    } else {
      const agregarDato = {
        ...usuarioActual,
        baneado: true,
      };

      const usuariosActualizados = usuarios.map((u) => {
        return u.id === agregarDato.id ? agregarDato : u;
      });

      guardarEnLocalStorage("usuarios", usuariosActualizados);
      setUpdate(usuariosActualizados);
    }
  }
  return (
    <>
      <section className="section-usuario">
        <article className="usuario-search">
          <div className="usuario-search_input">
            <img src={search} alt="" />
            <input
              onChange={() => setSearchWord(event.target.value.trim())}
              type="text"
              placeholder="Buscar usuario..."
            />
          </div>
        </article>
        <section className="usuario-section">
          {listToShow.length === 0 ? (
            <>
              <div className="notfounds">
                <p>No se encontró ningun usuario.</p>
              </div>
            </>
          ) : (
            <>
              {listToShow.map((usser) => {
                const {
                  id,
                  usuario,
                  perfil,
                  correo,
                  subActiva,
                  subPrecio,
                  baneado,
                } = usser;
                return (
                  <>
                    <div className="usuario-card">
                      <div className="usuario-card_img">
                        <img src={perfil} alt="" />
                      </div>
                      <div className="usuario-card_data">
                        <p>{usuario}</p>
                        <p>{correo}</p>
                        <p>{subActiva}</p>
                        <p>{subPrecio}</p>
                      </div>
                      {baneado === true ? (
                        <div className="usuario-card_buttons">
                          <button
                            className="desban"
                            onClick={() => bannear(usser)}
                          >
                            Baneado
                          </button>
                        </div>
                      ) : (
                        <div className="usuario-card_buttons">
                          <button
                            className="ban"
                            onClick={() => bannear(usser)}
                          >
                            Desbaneado
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                );
              })}
            </>
          )}
        </section>
      </section>
    </>
  );
}
