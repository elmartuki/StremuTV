import { Outlet, Navigate } from "react-router-dom";
import { obtenerDelSessionStorage } from "../utils/localStorage.js";

export default function AdminRoutes() {
  const usuarioDelSessionStorage = obtenerDelSessionStorage("usuario");

  if (usuarioDelSessionStorage) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
}
