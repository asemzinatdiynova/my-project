import React from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

function ProfilePage() {
  const { user } = useAuth();
  const { favoritesCount } = useCart();

  if (!user) return null;

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      {/* Карточка профиля */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          padding: "32px",
          border: "1px solid #e2ebe0",
          boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {/* Аватарка */}
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #2d5a27 0%, #437a3c 100%)",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: "800",
              boxShadow: "0 4px 12px rgba(45,90,39,0.3)",
            }}
          >
            {user.name.slice(0, 2).toUpperCase()}
          </div>

          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <h1
                style={{
                  fontSize: "26px",
                  fontWeight: "800",
                  margin: 0,
                  color: "#1f421c",
                }}
              >
                {user.name}
              </h1>
              <span
                style={{
                  backgroundColor: "#eaf2e8",
                  color: "#2d5a27",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                {user.role}
              </span>
            </div>
            <p
              style={{
                color: "#6b7280",
                fontSize: "14px",
                marginTop: "6px",
                margin: 0,
              }}
            >
              Участник программы эко-путешественников с 2026 года
            </p>
          </div>
        </div>

        {/* Статистика в кабинете */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "16px",
            marginTop: "28px",
            paddingTop: "24px",
            borderTop: "1px solid #f0f4ef",
          }}
        >
          <div
            style={{
              backgroundColor: "#f7faf6",
              padding: "16px",
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: "12px", color: "#6b7280" }}>
              Забронировано туров
            </span>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "#2d5a27",
                margin: "4px 0 0",
              }}
            >
              2 тура
            </h3>
          </div>

          <div
            style={{
              backgroundColor: "#f7faf6",
              padding: "16px",
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: "12px", color: "#6b7280" }}>
              Избранное
            </span>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "#2d5a27",
                margin: "4px 0 0",
              }}
            >
              ❤️ {favoritesCount}
            </h3>
          </div>

          <div
            style={{
              backgroundColor: "#f7faf6",
              padding: "16px",
              borderRadius: "16px",
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: "12px", color: "#6b7280" }}>
              Эко-баллы
            </span>
            <h3
              style={{
                fontSize: "22px",
                fontWeight: "800",
                color: "#2d5a27",
                margin: "4px 0 0",
              }}
            >
              450 🌿
            </h3>
          </div>
        </div>
      </div>

      {/* История бронирований */}
      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "24px",
          padding: "28px",
          border: "1px solid #e2ebe0",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "800",
            marginBottom: "16px",
            color: "#1f421c",
          }}
        >
          Мои предстоящие поездки
        </h3>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px",
            borderRadius: "14px",
            border: "1px solid #e2ebe0",
          }}
        >
          <div>
            <strong style={{ fontSize: "15px" }}>Восхождение на Кольсай</strong>
            <p
              style={{ fontSize: "12px", color: "#6b7280", margin: "4px 0 0" }}
            >
              Даты: 15–18 Мая 2026 • 2 участника
            </p>
          </div>
          <span
            style={{
              backgroundColor: "#dcfce7",
              color: "#15803d",
              padding: "6px 12px",
              borderRadius: "10px",
              fontSize: "12px",
              fontWeight: "700",
            }}
          >
            Подтверждено
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
