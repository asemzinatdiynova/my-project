import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Единый массив туров для детальной страницы
const initialTours = [
  {
    id: 1,
    title: "Восхождение на Кольсай и Кайынды",
    category: "Горы & Треккинг",
    price: 120,
    rating: 4.9,
    description:
      "Невероятный треккинг по высокогорным озерам Тянь-Шаня с ночевкой в уютном глэмпинге и прогулкой на лодке.",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
  },
  {
    id: 2,
    title: "Реликтовые леса и ущелья Алматы",
    category: "Горы & Треккинг",
    price: 85,
    rating: 4.7,
    description:
      "Прогулка по хвойным лесам, чистейший горный воздух, освежающие водопады и авторский обед на природе.",
    imageUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
  },
  {
    id: 3,
    title: "Тропический Бали & Острова",
    category: "Пляжи & Острова",
    price: 890,
    rating: 5.0,
    description:
      "Уединенные эко-респубики, рисовые террасы Убуда, медитации на рассвете и закаты на берегу океана.",
    imageUrl:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
  },
  {
    id: 4,
    title: "Гастро-тур по уютной Грузии",
    category: "Гастро-туры",
    price: 450,
    rating: 4.8,
    description:
      "Дегустация органика-вин в Кахетии, мастер-классы по приготовлению хинкали и древняя архитектура.",
    imageUrl:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
  },
  {
    id: 5,
    title: "Закаты Чарынского Каньона",
    category: "Горы & Треккинг",
    price: 95,
    rating: 4.9,
    description:
      "Путешествие в Долину Замков, ночное наблюдение за звездами и пикник на берегу реки Чарын.",
    imageUrl:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
  },
  {
    id: 6,
    title: "Фьорды и скалы Норвегии",
    category: "Горы & Треккинг",
    price: 1100,
    rating: 5.0,
    description:
      "Походы вдоль живописных фьордов, ночевки в скандинавских домиках и круиз по северным водам.",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
  },
];

function TourDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useCart();


  const [isBooked, setIsBooked] = useState(false);

  const tour = initialTours.find((t) => t.id === Number(id));

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
