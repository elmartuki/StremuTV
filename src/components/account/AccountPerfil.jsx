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

  const navigate = useNavigate();

  function handleBack() {
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  }

  useEffect(() => {
    const usuarioList = obtenerDelSessionStorage("usuarios") || [];
    const usuarioLogueado = obtenerDelSessionStorage("SavedUsser") || {};
    setUsuarioList(usuarioList);
    setUsuarioLogueado(usuarioLogueado);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    if (editPhoto === "") {
      const updateUsser = {
        ...usuarioLogueado,
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
    } else if (usserName === "") {
      const updateUsser = {
        ...usuarioLogueado,
        perfil: editPhoto,
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
    } else {
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
  }

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
              minLength="2"
              maxLength="15"
              type="text"
              placeholder="Ingrese su nuevo usuario"
            />
            <input
              onChange={(event) => setEditPhoto(event.target.value)}
              type="text"
              placeholder="Ingrese su nueva foto de perfil (URL)"
            />

            <button onClick={handleBack}>Guardar</button>
          </form>
        </div>
      </article>
    </section>
  );
}
