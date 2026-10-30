import React from "react";

function HeroSection() {
  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #23471e 0%, #2d5a27 50%, #3e6b37 100%)",
        padding: "60px 32px",
        borderRadius: "28px",
        margin: "24px 0",
        textAlign: "center",
        color: "#ffffff",
        boxShadow: "0 16px 36px rgba(35, 71, 30, 0.12)",
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "6px 16px",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(8px)",
          borderRadius: "20px",
          fontSize: "13px",
          fontWeight: "600",
          color: "#e2f0e0",
          marginBottom: "16px",
        }}
      >
        🌿 Авторские маршруты по всему миру
      </div>

      <h1
        style={{
          fontSize: "40px",
          fontWeight: "800",
          marginBottom: "14px",
          letterSpacing: "-0.8px",
          lineHeight: "1.2",
        }}
      >
        Открой для себя мир <br /> в гармонии с природой
      </h1>

      <p
        style={{
          fontSize: "16px",
          color: "#d2e6cf",
          marginBottom: "32px",
          maxWidth: "520px",
          margin: "0 auto 32px",
          lineHeight: "1.6",
          fontWeight: "400",
        }}
      >
        Индивидуальные путешествия и небольшие уютные группы для тех, кто ценят
        живые впечатления.
      </p>

      <button
        style={{
          backgroundColor: "#ffffff",
          color: "#1f421c",
          border: "none",
          padding: "14px 32px",
          borderRadius: "14px",
          fontWeight: "700",
          fontSize: "14px",
          cursor: "pointer",
          boxShadow: "0 4px 14px rgba(0,0,0,0.12)",
          transition: "transform 0.2s",
        }}
      >
        Подобрать направление
      </button>
    </section>
  );
}

export default HeroSection;
