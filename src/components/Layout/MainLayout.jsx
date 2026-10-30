import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import UserProfile from "../Header/UserProfile";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";

function MainLayout() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { favoritesCount } = useCart();

  const getLinkStyle = ({ isActive }) => ({
    color: isActive
      ? isDarkMode
        ? "#86efac"
        : "#2d5a27"
      : isDarkMode
        ? "#d1d5db"
        : "#4b5563",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: isActive ? "700" : "500",
    borderBottom: isActive ? "2px solid" : "none",
    paddingBottom: "4px",
  });

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#111827" : "#f7faf6",
        color: isDarkMode ? "#f9fafb" : "#1f2937",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          width: "100%",
          padding: "0 20px",
          flex: 1,
        }}
      >
        {/* Шапка с марштуризацией */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 0",
            borderBottom: isDarkMode
              ? "1px solid #374151"
              : "1px solid #e2ebe0",
          }}
        >
          <NavLink
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
            }}
          >
            <span style={{ fontSize: "24px" }}>🌿</span>
            <span
              style={{
                fontSize: "20px",
                fontWeight: "800",
                color: isDarkMode ? "#86efac" : "#1f421c",
              }}
            >
              TravelSphere
            </span>
          </NavLink>

          <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <NavLink to="/" style={getLinkStyle}>
              Главная
            </NavLink>
            <NavLink to="/catalog" style={getLinkStyle}>
              Каталог туров
            </NavLink>
            <NavLink to="/about" style={getLinkStyle}>
              О нас
            </NavLink>
            <NavLink to="/profile" style={getLinkStyle}>
              Кабинет
            </NavLink>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                backgroundColor: isDarkMode ? "#374151" : "#eaf2e8",
                padding: "6px 14px",
                borderRadius: "20px",
                fontSize: "13px",
                color: isDarkMode ? "#86efac" : "#2d5a27",
                fontWeight: "600",
              }}
            >
              ❤️ {favoritesCount}
            </div>

            <UserProfile />

            <button
              onClick={toggleTheme}
              style={{
                padding: "8px 12px",
                borderRadius: "12px",
                border: "1px solid #d0e0cd",
                cursor: "pointer",
                backgroundColor: isDarkMode ? "#374151" : "#ffffff",
                color: isDarkMode ? "#ffffff" : "#2d5a27",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </header>

        {/* Сюда подставляются активные страницы */}
        <main style={{ padding: "30px 0" }}>
          <Outlet />
        </main>
      </div>

      <footer
        style={{
          textAlign: "center",
          padding: "20px",
          borderTop: isDarkMode ? "1px solid #374151" : "1px solid #e2ebe0",
          fontSize: "13px",
          color: "#6b7280",
        }}
      >
        © 2026 TravelSphere — Экологические авторские путешествия
      </footer>
    </div>
  );
}

export default MainLayout;
