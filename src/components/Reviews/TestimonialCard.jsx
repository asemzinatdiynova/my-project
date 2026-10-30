import React from "react";

function TestimonialCard({ authorName, authorRole, avatar, text, date }) {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #e1ebe0",
        borderRadius: "14px",
        background: "#f4f8f3",
        margin: "12px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          marginBottom: "10px",
        }}
      >
        <img
          src={avatar}
          alt={authorName}
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div>
          <h4 style={{ margin: 0, fontSize: "15px", color: "#1f2937" }}>
            {authorName}
          </h4>
          <span
            style={{ fontSize: "12px", color: "#2d5a27", fontWeight: "500" }}
          >
            {authorRole}
          </span>
        </div>
      </div>
      <p
        style={{
          fontSize: "14px",
          color: "#374151",
          fontStyle: "italic",
          margin: "0 0 8px 0",
          lineHeight: "1.5",
        }}
      >
        "{text}"
      </p>
      <small style={{ color: "#9ca3af", fontSize: "12px" }}>{date}</small>
    </div>
  );
}

export default TestimonialCard;
