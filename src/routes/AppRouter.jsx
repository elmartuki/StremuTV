import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Error404Page from "../pages/Error404Page.jsx";
import AdminPage from "../pages/AdminPage.jsx";
import Footer from "../components/Footer.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import Header from "../components/Header.jsx";
import MoviesPage from "../pages/MoviesPage.jsx";
import SeriesPage from "../pages/SeriesPage.jsx";
import FavoritosPage from "../pages/FavoritosPage.jsx";
import MoreDetails from "../components/home/moreInfo/MoreDetails.jsx";
import AccountPerfil from "../components/account/AccountPerfil.jsx";
import AccountModal from "../components/account/AccountConfig.jsx";
import InitPage from "../pages/InitPage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import RecoverPasswordPage from "../pages/RecoverPasswordPage.jsx";
import RecoverSection from "../components/passwordrecover/RecoverSection.jsx";
import PricingPlans from "../pages/PricingPlans.jsx";
import TermUse from "../pages/TermUsePage.jsx";
import UsserRoutes from "./UsserRoutes.jsx";
import AdminRoutes from "./AdminRoutes.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<InitPage />} />
      <Route path="/registro" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/termsuse" element={<TermUse />} />
      <Route
        path="/sobre-nosotros"
        element={
          <>
            <AboutPage />
            <Footer />
          </>
        }
      />
      <Route
        path="/suscripciones"
        element={
          <>
            <PricingPlans />
            <Footer />
          </>
        }
      />

      <Route element={<AdminRoutes />}>
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
      </Route>

      <Route element={<UsserRoutes />}>
        <Route
          path="/home"
          element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route path="/perfil/edit-perfil" element={<AccountPerfil />} />
        <Route
          path="/perfil"
          element={
            <>
              <AccountModal />
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
          path="/favoritos"
          element={
            <>
              <Header />
              <FavoritosPage />
              <Footer />
            </>
          }
        />

        <Route
          path="/favoritos/:id"
          element={
            <>
              <MoreDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/password/:id"
          element={
            <>
              <RecoverPasswordPage />
            </>
          }
        />
        <Route
          path="/recover-section/:id"
          element={
            <>
              <RecoverSection />
            </>
          }
        />
        <Route
          path="/series/:id"
          element={
            <>
              <MoreDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/pelicula/:id"
          element={
            <>
              <MoreDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/pelicula/terror/:id"
          element={
            <>
              <MoreDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/pelicula/comedia/:id"
          element={
            <>
              <MoreDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/pelicula/accion/:id"
          element={
            <>
              <MoreDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/pelicula/fantasia/:id"
          element={
            <>
              <MoreDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/pelicula/ciencia-ficcion/:id"
          element={
            <>
              <MoreDetails />
              <Footer />
            </>
          }
        />
        <Route
          path="/pelicula/drama/:id"
          element={
            <>
              <MoreDetails />
              <Footer />
            </>
          }
        />
      </Route>

      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
}
