import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

export default function CompatibleDevices() {
  const [filter, setFilter] = useState("all");

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
    <Container className="py-5">
      <h1 className="text-center mb-4 fw-bold">📱 Dispositivos Compatibles</h1>
      <p className="text-center text-muted mb-5">
        Consulta la lista de equipos compatibles con nuestra aplicación.  
        Si tu dispositivo no aparece, puedes probar igualmente, ya que seguimos ampliando compatibilidad.
      </p>

      {/* Filtros */}
      <div className="text-center mb-4">
        <Button
          variant={filter === "all" ? "primary" : "outline-primary"}
          className="mx-1"
          onClick={() => setFilter("all")}
        >
          Todos
        </Button>
        <Button
          variant={filter === "Android" ? "primary" : "outline-primary"}
          className="mx-1"
          onClick={() => setFilter("Android")}
        >
          Android
        </Button>
        <Button
          variant={filter === "iOS" ? "primary" : "outline-primary"}
          className="mx-1"
          onClick={() => setFilter("iOS")}
        >
          iOS
        </Button>
        <Button
          variant={filter === "Windows" ? "primary" : "outline-primary"}
          className="mx-1"
          onClick={() => setFilter("Windows")}
        >
          Windows
        </Button>
        <Button
          variant={filter === "macOS" ? "primary" : "outline-primary"}
          className="mx-1"
          onClick={() => setFilter("macOS")}
        >
          macOS
        </Button>
      </div>

      {/* Lista de dispositivos */}
      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredDevices.map((device) => (
          <Col key={device.id}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Body>
                <Card.Title className="fw-semibold">{device.name}</Card.Title>
                <Card.Text className="text-muted mb-2">
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
                  className="p-2"
                >
                  {device.status}
                </Badge>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-5">
        <p className="text-muted small">
          ⚙️ Última actualización: {new Date().toLocaleDateString()}
        </p>
      </div>
    </Container>
  );
}
