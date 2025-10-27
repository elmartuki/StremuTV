import { Outlet, Navigate } from "react-router-dom";
import { obtenerDelLocalStorage } from "../utils/localStorage.js";

export default function AdminRoutes() {
  const user = obtenerDelLocalStorage("UsserKey");

  if (user?.rol === "admin") {
    return <Outlet />;
  }
  return <Navigate to="/home" replace />;
}
