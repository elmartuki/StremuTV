import { obtenerDelLocalStorage } from "../utils/localStorage";
import { Navigate, Outlet } from "react-router-dom";

export default function UsserRoutes() {
  const usserKey = obtenerDelLocalStorage("UsserKey") || {};
  const usuarios = obtenerDelLocalStorage("usuarios") || [];

  const usuarioEncontrado = usuarios.some((u) => {
    return u.id === usserKey.id;
  });

  if (usserKey.tyc === true) {
    if (usuarioEncontrado) {
      return <Outlet />;
    } else {
      return <Navigate to="/" />;
    }
  } else {
    return <Navigate to="/" />;
  }
}
