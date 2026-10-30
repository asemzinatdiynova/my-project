import React from "react";

function StatCard({ title, value, change, isPositive }) {
  return (
    <div
      style={{
        flex: 1,
        padding: "20px",
        borderRadius: "14px",
        border: "1px solid #e1ebe0",
        background: "#ffffff",
        boxShadow: "0 2px 8px rgba(45, 90, 39, 0.04)",
      }}
    >
      <span style={{ fontSize: "13px", color: "#6b7280", fontWeight: "500" }}>
        {title}
      </span>
      <div
        style={{
          fontSize: "26px",
          fontWeight: "700",
          margin: "6px 0",
          color: "#1f2937",
        }}
      >
        {value}
      </div>
      <span
        style={{
          fontSize: "13px",
          color: isPositive ? "#2d5a27" : "#dc2626",
          fontWeight: "700",
        }}
      >
        {isPositive ? "↑" : "↓"} {change}% за месяц
      </span>
    </div>
  );
}

export default StatCard;
