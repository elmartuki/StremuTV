import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Error404Page from "../pages/Error404Page.jsx";
import AdminPage from "../pages/AdminPage.jsx";
import Footer from "../components/Footer.jsx";
import AdminRoutes from "./AdminRoutes.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import Header from "../components/Header.jsx";
import MoviesPage from "../pages/MoviesPage.jsx";
import SeriesPage from "../pages/SeriesPage.jsx";

export default function AppRouter() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registro" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route element={<AdminRoutes />}></Route>
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="*" element={<Error404Page />} />
      </Routes>
      <Footer />
    </>
  );
}
