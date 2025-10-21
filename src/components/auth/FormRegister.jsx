import React, { useState } from "react";
import {
  agregarEnSessionStorage,
  obtenerDelSessionStorage,
} from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";
import personAdd from "../../assets/personAdd.svg";
import back from "../../assets/back.svg";

export default function FormRegister() {
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [perfil, setPerfil] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();

  function showPerfil() {
    setShowPreview(true);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const listadoUsuarios = obtenerDelSessionStorage("usuarios") || [];

    const nuevoUsuario = {
      id: Date.now(),
      usuario: usuario.trim(),
      perfil: perfil.trim(),
      correo: correo.trim().toLowerCase(),
      password,
    };

    const existeUsuario = listadoUsuarios.find(
      (u) =>
        u.correo === nuevoUsuario.correo || u.usuario === nuevoUsuario.usuario
    );

    if (existeUsuario) {
      alert("Ya existe un usuario registrado con este correo.");
    } else if (password !== repeatPassword) {
      alert("Las contraseñas no coinciden.");
    } else {
      agregarEnSessionStorage("usuarios", nuevoUsuario);

      alert("Si puedio crear la cuenta.");

      setUsuario("");
      setCorreo("");
      setPerfil("");
      setPassword("");
      setRepeatPassword("");

      setTimeout(() => navigate("/login"), 1000);
    }
  }

  return (
    <>
      <div className="form-login-back">
        <button onClick={()=> navigate("/")}>
          <img src={back} alt="" />
          <p>Volver</p>
        </button>
      </div>

      <section className="form-login-section">
        <article>
          <div className="form-login-topbar">
            {perfil ? (
              <img style={{ padding: "0px" }} src={perfil} alt="" />
            ) : (
              <img src={personAdd} alt="" />
            )}

            <h2 className="title-login">Registrate</h2>
          </div>

          <form onSubmit={handleSubmit} className="form-login">
            <div>
              <p>Nombre de usuario</p>
              <div className="inputs">
                <input
                  onChange={(e) => setUsuario(e.target.value)}
                  type="text"
                  placeholder="Usuario"
                  value={usuario}
                  minLength="2"
                  maxLength="20"
                  pattern="^[a-zA-Z0-9_]{2,20}$"
                  title="Solo letras, números y guiones bajos. Entre 2 y 20 caracteres."
                  required
                  className="inputs"
                />
              </div>
            </div>
            <div>
              <p>Foto de perfil</p>
              <div className="inputs">
                <input
                  onChange={(e) => setPerfil(e.target.value)}
                  type="text"
                  placeholder="Perfil (URL o nombre)"
                  value={perfil}
                  maxLength={500}
                  pattern="https?://.+"
                  title="Debe ser una URL válida que comience con http:// o https://"
                  required
                  className="inputs"
                />
              </div>
            </div>
            <div>
              <p>Correo</p>
              <div className="inputs">
                <input
                  onChange={(e) => setCorreo(e.target.value)}
                  type="email"
                  placeholder="Correo"
                  value={correo}
                  minLength="10"
                  maxLength="25"
                  required
                  className="inputs"
                />
              </div>
            </div>
            <div>
              <p>Contraseña</p>
              <div className="inputs">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  minLength={8}
                  maxLength={20}
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]{8,20}$"
                  title="Debe tener entre 8 y 20 caracteres, incluyendo al menos una mayúscula, una minúscula, un número y un símbolo."
                  required
                  className="inputs"
                />
              </div>
            </div>
            <div>
              <p>Repite la contraseña</p>
              <div className="inputs">
                <input
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  type="password"
                  placeholder="Repite la contraseña"
                  value={repeatPassword}
                  maxLength={20}
                  required
                />
              </div>
            </div>

            <button type="submit">Registrar</button>
          </form>
        </article>
      </section>
    </>
  );
}
