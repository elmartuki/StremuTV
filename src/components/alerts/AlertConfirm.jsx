import alertCheck from "../../assets/verdadero.svg";

export default function AlertConfirm({ showConfirm, alertText }) {
  if (!showConfirm) return null;
  return (
    <section className="alert-section-bg">
      <article className="alert-message">
        <img src={alertCheck} alt="" />

        <p>{alertText}</p>
      </article>
    </section>
  );
}
