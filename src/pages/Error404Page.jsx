import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

export default function Error404Page() {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-light text-center"
    >
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="fw-semibold mb-3">Página no encontrada</h2>
      <p className="text-secondary mb-4" style={{ maxWidth: "500px" }}>
        La página que estás buscando no existe o fue movida. No te preocupes,
        podés volver al inicio fácilmente.
      </p>
      <Link to="/">
        <Button
          variant="outline-light"
          className="d-flex align-items-center gap-2"
        >
          <i className="bi bi-arrow-left"></i> Volver al inicio
        </Button>
      </Link>
    </Container>
  );
}
