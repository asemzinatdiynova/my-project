import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { allTours } from "../data/tours";

function TourDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useCart();

  const [isBooked, setIsBooked] = useState(false);

  const tour = allTours.find((t) => t.id === Number(id));

  if (!tour) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h3>Тур не найден</h3>
        <button
          onClick={() => navigate("/catalog")}
          style={{ marginTop: "12px" }}
        >
          Назад в каталог
        </button>
      </div>
    );
  }

  const handleBooking = () => {
    setIsBooked(true);
    setTimeout(() => {
      alert(`🎉 Поздравляем! Тур "${tour.title}" успешно забронирован!`);
      navigate("/profile");
    }, 300);
  };

  const isFav = favorites.includes(tour.id);

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        style={{
          padding: "8px 16px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        ← Назад
      </button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <img
          src={tour.imageUrl}
          alt={tour.title}
          style={{
            width: "100%",
            borderRadius: "16px",
            height: "300px",
            objectFit: "cover",
          }}
        />

        <div>
          <span
            style={{
              backgroundColor: "#eaf2e8",
              color: "#2d5a27",
              padding: "4px 12px",
              borderRadius: "8px",
              fontSize: "12px",
              fontWeight: "700",
            }}
          >
            {tour.category}
          </span>
          <h1 style={{ fontSize: "28px", margin: "12px 0", color: "#1f421c" }}>
            {tour.title}
          </h1>
          <p
            style={{
              color: "#6b7280",
              lineHeight: "1.6",
              marginBottom: "20px",
            }}
          >
            {tour.description}
          </p>

          <div
            style={{
              fontSize: "28px",
              fontWeight: "800",
              color: "#2d5a27",
              marginBottom: "20px",
            }}
          >
            ${tour.price}
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {/* 3. Кнопка с подключенной функцией onClick */}
            <button
              onClick={handleBooking}
              style={{
                backgroundColor: isBooked ? "#15803d" : "#2d5a27",
                color: "#fff",
                border: "none",
                padding: "12px 24px",
                borderRadius: "12px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
            >
              {isBooked ? "✓ Забронировано!" : "Забронировать тур"}
            </button>
            <button
              onClick={(e) => toggleFavorite(tour.id, e)}
              style={{
                padding: "12px 18px",
                borderRadius: "12px",
                border: "1px solid #d0e0cd",
                cursor: "pointer",
              }}
            >
              {isFav ? "❤️ В избранном" : "🤍 В избранное"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetailPage;
