import { obtenerDelLocalStorage } from "../utils/localStorage";
import { Navigate, Outlet } from "react-router-dom";

export default function UsserRoutes() {
  const usserKey = obtenerDelLocalStorage("UsserKey") || null;
  const usuarios = obtenerDelLocalStorage("usuarios") || [];

  if (!usserKey) {
    return <Navigate to="/login" />;
  } else {
    if (usserKey.rol === "admin") {
      return <Outlet />;
    } else {
      const accepTerminos = usuarios.some((u) => {
        return u?.id === usserKey?.id;
      });

      if (accepTerminos && usserKey.tyc === true) {
        return <Outlet />;
      } else {
        return <Navigate to="/" />;
      }
    }
  }
}
