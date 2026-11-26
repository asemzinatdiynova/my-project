import React, { memo } from "react";
import { Link } from "react-router-dom";

function TourCard({ tour, isFavorite, onToggleFavorite, onAddToCart }) {
  console.log("TourCard render:", tour.id);

  return (
    <div
      style={{
        border: "1px solid #e2ebe0",
        borderRadius: "16px",
        padding: "14px",
        position: "relative",
        background: "#ffffff",
      }}
    >
      <button
        onClick={(e) => onToggleFavorite(tour.id, e)}
        style={{
          position: "absolute",
          top: "22px",
          right: "22px",
          border: "none",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "50%",
          width: "34px",
          height: "34px",
          cursor: "pointer",
        }}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      <img
        src={tour.imageUrl}
        alt={tour.title}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />

      <h3
        style={{
          fontSize: "16px",
          margin: "12px 0 8px",
          fontWeight: "700",
          color: "#111827",
        }}
      >
        {tour.title}
      </h3>

      <div
        style={{
          color: "#d69e22",
          fontSize: "14px",
          marginBottom: "10px",
          fontWeight: "600",
        }}
      >
        ⭐ {tour.rating.toFixed(1)} / 5
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <strong style={{ color: "#2d5a27", fontSize: "18px" }}>
          ${tour.price}
        </strong>

        <Link
          to={`/tour/${tour.id}`}
          style={{
            color: "#2d5a27",
            fontWeight: "700",
            textDecoration: "none",
            fontSize: "14px",
          }}
        >
          Подробнее →
        </Link>
        <button
         onClick={() => onAddToCart(tour.id)}
         style={{
          width: "100%",
          marginTop: "12px",
          padding: "10px",
          border: "none",
          borderRadius: "8px",
          background: "#2d5a27",
          color: "#ffffff",
          fontWeight: "600",
          cursor: "pointer",
         }}
         >
          В корзину
        </button>
      </div>
    </div>
  );
}

export default memo(TourCard);
