import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import CategoryFilter from "../components/Catalog/CategoryFilter";
import { useCart } from "../context/CartContext";

const initialTours = [
  {
    id: 1,
    title: "Восхождение на Кольсай и Кайынды",
    category: "Горы & Треккинг",
    price: 120,
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
  },
  {
    id: 2,
    title: "Реликтовые леса и ущелья Алматы",
    category: "Горы & Треккинг",
    price: 85,
    rating: 4.7,
    imageUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
  },
  {
    id: 3,
    title: "Тропический Бали & Острова",
    category: "Пляжи & Острова",
    price: 890,
    rating: 5.0,
    imageUrl:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
  },
  {
    id: 4,
    title: "Гастро-тур по уютной Грузии",
    category: "Гастро-туры",
    price: 450,
    rating: 4.8,
    imageUrl:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
  },
  {
    id: 5,
    title: "Закаты Чарынского Каньона",
    category: "Горы & Треккинг",
    price: 95,
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
  },
  {
    id: 6,
    title: "Фьорды и скалы Норвегии",
    category: "Горы & Треккинг",
    price: 1100,
    rating: 5.0,
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
  },
];

function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { favorites, toggleFavorite } = useCart();

  const categoryParam = searchParams.get("category") || "Все маршруты";
  const queryParam = searchParams.get("q") || "";

  const handleCategorySelect = (cat) => {
    setSearchParams({ category: cat, q: queryParam });
  };

  const handleSearchChange = (e) => {
    setSearchParams({ category: categoryParam, q: e.target.value });
  };

  const filteredTours = initialTours.filter((t) => {
    const matchCat =
      categoryParam === "Все маршруты" || t.category === categoryParam;
    const matchSearch = t.title
      .toLowerCase()
      .includes(queryParam.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "8px",
          fontSize: "28px",
          fontWeight: "800",
          color: "#ffffff",
        }}
      >
        Каталог путешествий
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#9ca3af",
          fontSize: "14px",
          marginBottom: "24px",
        }}
      >
        Найдите идеальное направление для отдыха: от горных восхождений до
        уютных гастро-туров
      </p>

      <CategoryFilter
        categories={[
          "Все маршруты",
          "Горы & Треккинг",
          "Пляжи & Острова",
          "Гастро-туры",
        ]}
        activeCategory={categoryParam}
        onSelectCategory={handleCategorySelect}
      />

      <input
        type="text"
        placeholder="🔍 Поиск туров по названию..."
        value={queryParam}
        onChange={handleSearchChange}
        style={{
          width: "100%",
          padding: "12px 16px",
          borderRadius: "12px",
          border: "1px solid #d0e0cd",
          marginBottom: "24px",
          outline: "none",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredTours.map((tour) => (
          <div
            key={tour.id}
            style={{
              border: "1px solid #e2ebe0",
              borderRadius: "16px",
              padding: "14px",
              position: "relative",
              background: "#ffffff",
            }}
          >
            <button
              onClick={(e) => toggleFavorite(tour.id, e)}
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
              {favorites.includes(tour.id) ? "❤️" : "🤍"}
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

            {/* Явно заданный темный цвет текста */}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;
