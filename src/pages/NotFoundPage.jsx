import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div style={{ textAlign: "center", padding: "80px 20px" }}>
      <h1 style={{ fontSize: "72px", margin: 0, color: "#2d5a27" }}>404</h1>
      <h2 style={{ fontSize: "24px", marginBottom: "16px" }}>
        Маршрут не найден
      </h2>
      <p style={{ color: "#6b7280", marginBottom: "24px" }}>
        Кажется, вы забрели в неизведанные леса.
      </p>
      <Link
        to="/"
        style={{
          backgroundColor: "#2d5a27",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: "12px",
          textDecoration: "none",
          fontWeight: "700",
        }}
      >
        Вернуться на главную
      </Link>
    </div>
  );
}

export default NotFoundPage;
