import React, { useMemo, useCallback, useState } from "react";
import Counter from "../components/Catalog/Counter";
import ProductStats from "../components/Catalog/ProductStats";
import TourCard from "../components/Catalog/TourCard";
import { useSearchParams } from "react-router-dom";
import CategoryFilter from "../components/Catalog/CategoryFilter";
import { useCart } from "../context/CartContext";
import { allTours } from "../data/tours";

function CatalogPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { favorites, toggleFavorite, addToCart, cartCount } = useCart();

  const [count, setCount] = useState(0);
  const [sortBy, setSortBy] = useState("default");

  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleDecrease = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const categoryParam = searchParams.get("category") || "Все маршруты";
  const queryParam = searchParams.get("q") || "";

  const handleCategorySelect = useCallback(
    (cat) => {
      setSearchParams({ category: cat, q: queryParam });
    },
    [setSearchParams, queryParam],
  );

  const handleSearchChange = useCallback(
    (e) => {
      setSearchParams({ category: categoryParam, q: e.target.value });
    },
    [setSearchParams, categoryParam],
  );

  const filteredTours = useMemo(() => {
    console.log("Filtering tours...");

    return allTours.filter((t) => {
      const matchCat =
        categoryParam === "Все маршруты" || t.category === categoryParam;

      const matchSearch = t.title
        .toLowerCase()
        .includes(queryParam.toLowerCase());

      return matchCat && matchSearch;
    });
  }, [categoryParam, queryParam, allTours]);

  const sortedTours = useMemo(() => {
    console.log("Sorting tours...");

    const result = [...filteredTours];

    if (sortBy === "priceAsc") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "priceDesc") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [filteredTours, sortBy]);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "8px",
          fontSize: "28px",
          fontWeight: "800",
          color: "#2d5a27",
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

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 16px",
          borderRadius: "12px",
          border: "1px solid #d0e0cd",
          marginBottom: "20px",
          background: "#ffffff",
          color: "#2d5a27",
          cursor: "pointer",
        }}
      >
        <option value="default">Без сортировки</option>
        <option value="priceAsc">Сначала дешёвые</option>
        <option value="priceDesc">Сначала дорогие</option>
        <option value="rating">Сначала с высоким рейтингом</option>
      </select>

      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "20px",
        }}
      >
        {sortedTours.map((tour) => (
          <TourCard
            key={tour.id}
            tour={tour}
            isFavorite={favorites.includes(tour.id)}
            onToggleFavorite={toggleFavorite}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      <div
        style={{
          marginTop: "50px",
          padding: "24px",
          borderRadius: "16px",
          background: "#eaf2e8",
          border: "1px solid #d0e0cd",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#2d5a27",
            fontSize: "18px",
          }}
        >
          Тестирование производительности React
        </h2>

        <p style={{ textAlign: "center", color: "#6b7280" }}>
          Демонстрация React.memo, useMemo, useCallback и useState
        </p>

        <Counter
          count={count}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />

        <ProductStats tours={filteredTours} />
      </div>

    </>
  );
}

export default CatalogPage;
