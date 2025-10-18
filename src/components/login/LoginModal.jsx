import account from "../../assets/account.svg";
import back from "../../assets/back.svg";

export default function LoginModal({closeLogin}) {
  return (
    <section className="login-modal-section">
      <article className="login-modal">
        <div className="login-modal_topbar">
          <button onClick={closeLogin}>
            <img src={back} alt="" />
            Volver
          </button>
        </div>
        <div className="login-modal_start">
          <img src={account} alt="" />

          <p>¡Unete a nuestra comunidad!</p>

          <p>
            Crea una cuenta para acceder a todo el contenido y funciones de
            StremuTV.
          </p>
        </div>
        <div className="login-modal_buttons">
          <button>Iniciar Sesión</button>
          <button>Registrase</button>
        </div>
      </article>
    </section>
  );
}
