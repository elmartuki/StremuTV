export default function ConfirmFav({
  img,
  confirmModal,
  nombre,
  closeMessage,
}) {
  if (confirmModal) {
    return (
      <section onClick={closeMessage} className="message-background">
        <article className="message">
          <div className="message_img">
            <img src={img} />
            <p>{nombre}</p>
          </div>
        </article>
      </section>
    );
  }
}
