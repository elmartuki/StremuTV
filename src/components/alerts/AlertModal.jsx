import alertImg from "../../assets/warning.svg";

export default function AlertModal({ showAlert, alertText }) {
  if (!showAlert) return null;
  return (
    <section className="alert-section-bg">
      <article className="alert-message">
        <img src={alertImg} alt="icono de alerta" />

        <p>{alertText}</p>
      </article>
    </section>
  );
}
