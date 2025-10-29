import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  guardarEnLocalStorage,
  obtenerDelLocalStorage,
} from "../../utils/localStorage";
import back from "../../assets/back.svg";
import AlertConfirm from "../alerts/AlertConfirm";
import AlertModal from "../alerts/AlertModal";

export default function AccountPerfil() {
  const [usserName, setUssername] = useState("");
  const [editPhoto, setEditPhoto] = useState("");
  const [usuarioList, setUsuarioList] = useState([]);
  const [usuarioLogueado, setUsuarioLogueado] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const usuarioList = obtenerDelLocalStorage("usuarios") || [];
    const usuarioLogueado = obtenerDelLocalStorage("UsserKey") || {};
    setUsuarioList(usuarioList);
    setUsuarioLogueado(usuarioLogueado);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const existeUsuario = usuarioList.some(
      (usser) => usser.usuario === usserName
    );

    if (existeUsuario) {
      setShowAlert(true);
      setMessage("El usuario que ingresaste ya existe.");
      setTimeout(() => setShowAlert(false), 3000);
    } else {
      if (editPhoto === "" && usserName === "") {
        setShowModal(true);
        setMessage("Guardado sin cambios.");
        setTimeout(() => setShowModal(false), 3000);
      } else {
        if (editPhoto === "") {
          const updateUsser = {
            ...usuarioLogueado,
            usuario: usserName,
          };

          setShowModal(true);
          setMessage("Se modifico el usuario.");
          setTimeout(() => setShowModal(false), 3000);

          const usserFinded = usuarioList.map((usuario) => {
            if (usuario.id === usuarioLogueado.id) {
              return updateUsser;
            }
            return usuario;
          });

          guardarEnLocalStorage("usuarios", usserFinded);
          guardarEnLocalStorage("UsserKey", updateUsser);

          setUsuarioList(usserFinded);
          setUsuarioLogueado(updateUsser);
        } else if (usserName === "") {
          const updateUsser = {
            ...usuarioLogueado,
            perfil: editPhoto,
          };

          setShowModal(true);
          setMessage("Se modificó la foto.");
          setTimeout(() => setShowModal(false), 5000);
          setMessage("Se modifico la foto.");
          setTimeout(() => setShowModal(false), 3000);

          const usserFinded = usuarioList.map((usuario) => {
            if (usuario.id === usuarioLogueado.id) {
              return updateUsser;
            }
            return usuario;
          });

          guardarEnLocalStorage("usuarios", usserFinded);
          guardarEnLocalStorage("UsserKey", updateUsser);

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

          guardarEnLocalStorage("usuarios", usserFinded);
          guardarEnLocalStorage("UsserKey", updateUsser);

          setUsuarioList(usserFinded);
          setUsuarioLogueado(updateUsser);
        }
      }
    }
  }

  function handleBack() {
    setTimeout(() => navigate(-1), 3000);
  }

  return (
    <>
      <AlertConfirm alertText={message} showConfirm={showModal} />
      <AlertModal alertText={message} showAlert={showAlert} />
      <section className="edit-perfil-section">
        <article className="edit-perfil">
          <div className="edit-perfil-topbar">
            <button onClick={() => navigate(-1)}>
              <img src={back} alt="boton para volver atras" />
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
                onChange={(event) => setUssername(event.target.value.trim())}
                minLength="2"
                maxLength="15"
                type="text"
                pattern="^[A-Za-z0-9_]+$"
                placeholder="Ingrese su nuevo usuario"
              />
              <input
                onChange={(event) => setEditPhoto(event.target.value.trim())}
                type="text"
                maxLength="300"
                placeholder="Ingrese su nueva foto de perfil (URL)"
              />

              <button onClick={handleBack}>Guardar</button>
            </form>
          </div>
        </article>
      </section>
    </>
  );
}
