import warning from "../../../assets/warning.svg";

export default function ErrorModal({ nombre }) {
  return (
    <section className="errorModal-background">
      <div className="errorModal">
        <img src={warning} alt="" />
        <p>{nombre} se eliminó de favoritos.</p>
      </div>
    </section>
  );
}
