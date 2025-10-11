import React from "react";

export default function Portada({ titulo, subTitulo }) {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        backgroundImage:
          "url('https://wallpapers.com/images/hd/anime-4k-pictures-9n8qdbx5o639w6s6.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // oscurece la imagen
        }}
      ></div>

      {/* Contenido */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          padding: "0 20px",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>{titulo}</h1>
        <p style={{ fontSize: "1.5rem" }}>{subTitulo}</p>
      </div>
    </div>
  );
}
