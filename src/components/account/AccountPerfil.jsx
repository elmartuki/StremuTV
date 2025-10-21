import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  guardarEnSessionStorage,
  obtenerDelSessionStorage,
} from "../../utils/localStorage";
import back from "../../assets/back.svg";

export default function AccountPerfil() {
  const [usserName, setUssername] = useState("");
  const [editPhoto, setEditPhoto] = useState("");
  const [usuarioList, setUsuarioList] = useState([]);
  const [usuarioLogueado, setUsuarioLogueado] = useState({});

  useEffect(() => {
    const usuarioList = obtenerDelSessionStorage("usuarios") || [];
    const usuarioLogueado = obtenerDelSessionStorage("SavedUsser") || {};
    setUsuarioList(usuarioList);
    setUsuarioLogueado(usuarioLogueado);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const updateUsser = {
      ...usuarioLogueado,
      perfil: editPhoto,
      usuario: usserName,
    };

    const usserFinded = usuarioList.map((usuario) => {
      if (usuario.id === usuarioLogueado.id) {
        return updateUsser;
      }
      return usuario;
    });

    guardarEnSessionStorage("usuarios", usserFinded);
    guardarEnSessionStorage("SavedUsser", updateUsser);

    setUsuarioList(usserFinded);
    setUsuarioLogueado(updateUsser);
  }

  const navigate = useNavigate();
  return (
    <section className="edit-perfil-section">
      <article className="edit-perfil">
        <div className="edit-perfil-topbar">
          <button onClick={() => navigate(-1)}>
            <img src={back} alt="" />
            Volver
          </button>
        </div>
        <div className="edit-perfil_img">
          {editPhoto ? (
            <>
              <p>Editar Perfil</p>
              <img src={editPhoto} />
              <p>{usuarioLogueado.usuario}</p>
            </>
          ) : (
            <>
              <p>Editar Perfil</p>
              <img src={usuarioLogueado.perfil} />
              <p>{usuarioLogueado.usuario}</p>
            </>
          )}
        </div>

        <div></div>

        <div className="edit-perfil_inputs">
          <form onSubmit={handleSubmit}>
            <input
              onChange={(event) => setUssername(event.target.value)}
              type="text"
              placeholder="Ingrese su nuevo usuario"
            />
            <input
              onChange={(event) => setEditPhoto(event.target.value)}
              type="text"
              placeholder="Ingrese su nueva foto de perfil (URL)"
            />
            <button onClick={() => navigate(-1)}>Guardar</button>
          </form>
        </div>
      </article>
    </section>
  );
}
