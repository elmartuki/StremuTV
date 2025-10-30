export default function ModalDelate({
  openModal,
  closeModal,
  nombre,
  onConfirm,
}) {
  if (!openModal) {
  } else {
    return (
      <section onClick={closeModal} className="modal-dele-background">
        <article className="modal-delete">
          <div className="modal-delete_title">
            <p>¿Estas seguro que quires eliminar {nombre}? </p>
          </div>
          <div className="modal-delete_buttons">
            <button onClick={onConfirm}>Eliminar</button>
            <button onClick={closeModal}>Cancelar</button>
          </div>
        </article>
      </section>
    );
  }
}
