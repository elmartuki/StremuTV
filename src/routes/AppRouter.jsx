import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Error404Page from "../pages/Error404Page.jsx";
import AdminPage from "../pages/AdminPage.jsx";
import Footer from "../components/Footer.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import Header from "../components/Header.jsx";
import MoviesPage from "../pages/MoviesPage.jsx";
import SeriesPage from "../pages/SeriesPage.jsx";
import MoreDetails from "../components/home/moredetails/moreDetails.jsx";

export default function AppRouter() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/registro"
          element={
            <>
              <Header />
              <RegisterPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header />
              <LoginPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/admin"
          element={
            <>
              <Header />
              <AdminPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header />
              <MoviesPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/series"
          element={
            <>
              <Header />
              <SeriesPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/series/:id"
          element={
            <>
              <MoreDetails /> <Footer />
            </>
          }
        />

        <Route
          path="/pelicula/:id"
          element={
            <>
              <MoreDetails /> <Footer />
            </>
          }
        />
        <Route
          path="/pelicula/terror/:id"
          element={
            <>
              <MoreDetails /> <Footer />
            </>
          }
        />
        <Route
          path="/pelicula/comedia/:id"
          element={
            <>
              <MoreDetails /> <Footer />
            </>
          }
        />
        <Route
          path="/pelicula/accion/:id"
          element={
            <>
              <MoreDetails /> <Footer />
            </>
          }
        />
        <Route
          path="/pelicula/fantasia/:id"
          element={
            <>
              <MoreDetails /> <Footer />
            </>
          }
        />
        <Route
          path="/pelicula/ciencia-ficcion/:id"
          element={
            <>
              <MoreDetails /> <Footer />
            </>
          }
        />
        <Route
          path="/pelicula/drama/:id"
          element={
            <>
              <MoreDetails /> <Footer />
            </>
          }
        />

        <Route path="*" element={<Error404Page />} />
      </Routes>
    </>
  );
}
