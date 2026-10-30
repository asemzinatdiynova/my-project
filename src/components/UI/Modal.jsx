import React from "react";

function Modal({ isOpen, onClose, tour, quantity, setQuantity }) {
  if (!isOpen || !tour) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        padding: "20px",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#ffffff",
          padding: "24px",
          borderRadius: "20px",
          maxWidth: "480px",
          width: "100%",
          position: "relative",
          color: "#1f2937",
          fontFamily: "inherit",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            border: "none",
            background: "#f3f4f6",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            fontSize: "16px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✕
        </button>

        <img
          src={tour.imageUrl}
          alt={tour.title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />

        <h3
          style={{
            marginTop: "16px",
            marginBottom: "8px",
            fontSize: "20px",
            fontWeight: "800",
            color: "#1f421c",
          }}
        >
          {tour.title}
        </h3>
        <p
          style={{
            color: "#6b7280",
            fontSize: "14px",
            lineHeight: "1.5",
            marginBottom: "20px",
          }}
        >
          {tour.description}
        </p>

        {/* Сценарий 6: Количество участников */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 16px",
            backgroundColor: "#f7faf6",
            borderRadius: "12px",
            marginBottom: "20px",
          }}
        >
          <span style={{ fontSize: "14px", fontWeight: "600" }}>
            Количество человек:
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                border: "1px solid #d0e0cd",
                background: "#fff",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              -
            </button>
            <span style={{ fontWeight: "700", fontSize: "16px" }}>
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                border: "1px solid #d0e0cd",
                background: "#fff",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              +
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <span style={{ fontSize: "12px", color: "#6b7280" }}>
              Итоговая стоимость:
            </span>
            <h3
              style={{
                margin: 0,
                color: "#2d5a27",
                fontSize: "22px",
                fontWeight: "800",
              }}
            >
              ${tour.price * quantity}
            </h3>
          </div>
          <button
            style={{
              backgroundColor: "#2d5a27",
              color: "#fff",
              border: "none",
              padding: "12px 24px",
              borderRadius: "12px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Забронировать
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
