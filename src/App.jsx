import AppRouter from "./routes/AppRouter.jsx";

import "./css/header.css";
import "./css/footer.css";
import "./css/crud.css";
import "./css/filter.css";
import "./css/modal.css";
import "./css/modalDelete.css";
import "./css/moreDetails.css";
import "./css/movies.css";
import "./css/moviesSection.css";
import "./css/preview.css";
import "./css/titulo.css";
import "./css/favorite.css";
import "./css/modalConfirm.css";
import "./css/modalError.css";
import "./css/cardCarroucel.css";
import "./css/search.css";
import "./css/index.css";

export default function App() {
  return (
    <>
      <div>
        <AppRouter />
      </div>
    </>
  );
}
