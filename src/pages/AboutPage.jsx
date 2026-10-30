import React from "react";

function AboutPage() {
  const values = [
    {
      icon: "🌱",
      title: "100% Экологичность",
      desc: "Мы компенсируем углеродный след каждой поездки и поддерживаем национальные парки.",
    },
    {
      icon: "👥",
      title: "Малые группы",
      desc: "До 10 человек в группе для комфортного общения и бережного отношения к природе.",
    },
    {
      icon: "🏡",
      title: "Локальные гиды",
      desc: "Сотрудничаем с местными жителями, поддерживая традиционную культуру регионов.",
    },
  ];

  return (
    <div style={{ maxWidth: "850px", margin: "0 auto" }}>
      {/* Заголовок */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <span
          style={{
            fontSize: "13px",
            fontWeight: "700",
            color: "#2d5a27",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        ></span>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "800",
            marginTop: "8px",
            color: "#1f421c",
          }}
        >
          Путешествия, которые меняют взгляд на мир
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#4b5563",
            lineHeight: "1.7",
            marginTop: "16px",
          }}
        >
          <strong>TravelSphere</strong> родился из любви к нетронутой природе и
          стремления показать красоту гор, лесов и океанов без вреда для
          экосистемы. Мы организуем авторские туры, где комфорт сочетается с
          духом приключений.
        </p>
      </div>

      {/* Карточки ценностей */}
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "800",
          textAlign: "center",
          marginBottom: "24px",
        }}
      >
        Почему выбирают TravelSphere
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        {values.map((v, index) => (
          <div
            key={index}
            style={{
              padding: "24px",
              borderRadius: "16px",
              backgroundColor: "#ffffff",
              border: "1px solid #e2ebe0",
              boxShadow: "0 4px 12px rgba(0,0,0,0.02)",
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "12px" }}>
              {v.icon}
            </div>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "700",
                marginBottom: "8px",
                color: "#1f421c",
              }}
            >
              {v.title}
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "#6b7280",
                lineHeight: "1.5",
                margin: 0,
              }}
            >
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
