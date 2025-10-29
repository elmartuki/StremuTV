import alertCheck from "../../assets/verdadero.svg";

export default function AlertConfirm({ showConfirm, alertText }) {
  if (!showConfirm) return null;
  return (
    <section className="alert-section-bg">
      <article className="alert-message-green">
        <img src={alertCheck} alt="icono de alerta" />

        <p>{alertText}</p>
      </article>
    </section>
  );
}
