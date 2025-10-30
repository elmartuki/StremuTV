import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import back from "../assets/back.svg";
import { useNavigate } from "react-router-dom";

export default function CompatibleDevices() {
  const [filter, setFilter] = useState("all");

  const navigate = useNavigate();

  const devices = [
    {
      id: 1,
      name: "iPhone 14 / 15",
      os: "iOS",
      version: "iOS 16+",
      status: "Compatible",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21 / S22 / S23",
      os: "Android",
      version: "Android 12+",
      status: "Compatible",
    },
    {
      id: 3,
      name: "Google Pixel 6 / 7 / 8",
      os: "Android",
      version: "Android 13+",
      status: "Compatible",
    },
    {
      id: 4,
      name: "Xiaomi Redmi Note 11 / 12",
      os: "Android",
      version: "Android 12+",
      status: "Compatible",
    },
    {
      id: 5,
      name: "Huawei P40 / P50",
      os: "Android (EMUI)",
      version: "Android 11+",
      status: "Parcialmente compatible",
    },
    {
      id: 6,
      name: "Windows PC",
      os: "Windows",
      version: "Windows 10 / 11",
      status: "Compatible",
    },
    {
      id: 7,
      name: "MacBook / iMac",
      os: "macOS",
      version: "Monterey o superior",
      status: "Compatible",
    },
  ];

  const filteredDevices =
    filter === "all" ? devices : devices.filter((d) => d.os === filter);

  return (
    <Container fluid className="pb-5 text-light">
      <div className="edit-perfil-topbar">
        <button onClick={() => navigate(-1)}>
          <img src={back} alt="boton para volver atras" />
          Volver
        </button>
      </div>
      <h1 className="text-center mb-4 fw-bold">📱 Dispositivos Compatibles</h1>
      <p className="text-center text-light mb-5 opacity-75">
        Consulta la lista de equipos compatibles con nuestra aplicación. Si tu
        dispositivo no aparece, puedes probar igualmente, ya que seguimos
        ampliando compatibilidad.
      </p>

      {/* Filtros */}
      <div className="text-center mb-4">
        {["all", "Android", "iOS", "Windows", "macOS"].map((type) => (
          <Button
            key={type}
            variant={filter === type ? "primary" : "outline-light"}
            className="mx-1"
            onClick={() => setFilter(type)}
          >
            {type === "all"
              ? "Todos"
              : type === "iOS"
              ? "iOS"
              : type === "macOS"
              ? "macOS"
              : type}
                ? "iOS"
                : type === "macOS"
                  ? "macOS"
                  : type}
          </Button>
        ))}
      </div>
      

      {/* Lista de dispositivos */}
      <Row
        xs={1}
        sm={2}
        md={3}
        className="g-4 justify-content-center w-100 px-3"
      >
        {filteredDevices.map((device) => (
          <Col key={device.id} className="d-flex">
            <Card
              className="flex-fill shadow-lg border-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(70,70,120,0.9), rgba(50,50,80,0.8))",
                borderRadius: "15px",
                color: "white",
              }}
            >
              <Card.Body>
                <Card.Title className="fw-semibold text-light">
                  {device.name}
                </Card.Title>
                <Card.Text className="text-light opacity-75 mb-3">
                  <strong>Sistema:</strong> {device.os}
                  <br />
                  <strong>Versión mínima:</strong> {device.version}
                </Card.Text>
                <Badge
                  bg={
                    device.status === "Compatible"
                      ? "success"
                      : device.status === "Parcialmente compatible"
                      ? "warning"
                      : "secondary"
                  }
                  text={
                    device.status === "Parcialmente compatible"
                      ? "dark"
                      : "light"
                  }
                        ? "warning"
                        : "secondary"
                  }
                  text={device.status === "Parcialmente compatible" ? "dark" : "light"}
                  className="p-2"
                >
                  {device.status}
                </Badge>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Texto final */}
      <div className="text-center mt-5">
        <p className="text-light small opacity-75">
          ⚙️ Última actualización: {new Date().toLocaleDateString()}
        </p>
      </div>
    </Container>
  );
}
