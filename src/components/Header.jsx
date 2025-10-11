import Swal from "sweetalert2";
import "./header.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { obtenerDelSessionStorage } from "../utils/localStorage.js";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const navegacion = useNavigate();

  const usuarioLogueado = obtenerDelSessionStorage("usuario");

  function handleLogout() {
    sessionStorage.removeItem("usuario");
    Swal.fire({
      title: "Bien hecho!",
      text: `Sesion cerrada con exito`,
      icon: "success",
    });
    navegacion("/");
  }

  const handleOpenMenu = () => {
    setMenu(!menu);
  };
  return (
    <header className="d-flex m-auto position-sticky top-0">
      <nav className="navbar d-flex">
        <div className="navbar_logo">
          <h1>Logo</h1>
        </div>
        <div className="navbar_menu d-flex">
          <button className="navbar_menu-btn" onClick={handleOpenMenu}>
            <img
              src="https://stremu.netlify.app/icons/menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"
              alt="icono para abrir el menú"
            />
          </button>
        </div>
      </nav>
      <nav className={menu ? "mostrar" : "ocultar"}>
        <ul className="navbar_menu_links list-unstyled d-flex">
          <li>
            {" "}
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/contador">Series</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/esculturas">Peliculas</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/tareas">Top</NavLink>
          </li>

          {usuarioLogueado?.rol !== "admin" && usuarioLogueado ? (
            <li>
              {" "}
              <NavLink to="/admin">Admin</NavLink>
            </li>
          ) : (
            <></>
          )}

          <ul className="navbar_menu_btn-container list-unstyled d-flex">
            {usuarioLogueado ? (
              <>
                <li>
                  <button
                    className="navbar_menu_btn-logout"
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </button>
                </li>
                <li>
                  <button className="navbar_menu_btn-user d-flex justify-content-center align-items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/23.jpg"
                      alt="imagen de perfil del usuario"
                    />
                    {""}
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink className="navbar_menu_btn-login" to="/login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navbar_menu_btn-register" to="/registro">
                    Registro
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </ul>
      </nav>
    </header>
  );
}
