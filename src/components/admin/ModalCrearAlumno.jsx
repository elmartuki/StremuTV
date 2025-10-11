import { Button, Modal } from "react-bootstrap";
import FormCrearAlumno from "./FormCrearAlumno.jsx";

export default function ModalCrearAlumno({
  showCrear,
  setShowCrear,
  fetchAlumnos,
}) {
  return (
    <Modal show={showCrear} onHide={() => setShowCrear(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Alumno</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormCrearAlumno fetchAlumnos={fetchAlumnos} setShowCrear={setShowCrear}></FormCrearAlumno>
      </Modal.Body>
    </Modal>
  );
}
