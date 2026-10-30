import React from "react";
import Badge from "../UI/Badge";
import RatingStars from "../UI/RatingStars";
import Button from "../UI/Button";

function Card({
  title,
  description,
  imageUrl,
  price,
  rating,
  reviewsCount,
  badgeLabel,
  badgeColor,
}) {
  return (
    <div
      style={{
        border: "1px solid #e1ebe0",
        borderRadius: "16px",
        overflow: "hidden",
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 4px 12px rgba(45, 90, 39, 0.05)",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src={imageUrl}
          alt={title}
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
        />
        {badgeLabel && (
          <div style={{ position: "absolute", top: "12px", left: "12px" }}>
            <Badge label={badgeLabel} colorScheme={badgeColor} />
          </div>
        )}
      </div>

      <div
        style={{
          padding: "18px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "space-between",
        }}
      >
        <div>
          <h3
            style={{ fontSize: "18px", margin: "0 0 6px 0", color: "#1f2937" }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: "13px",
              color: "#6b7280",
              margin: "0 0 10px 0",
              lineHeight: "1.4",
            }}
          >
            {description}
          </p>
          <RatingStars score={rating} reviewsCount={reviewsCount} />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "16px",
            paddingTop: "12px",
            borderTop: "1px solid #f0f5ef",
          }}
        >
          <div>
            <span
              style={{ fontSize: "11px", color: "#9ca3af", display: "block" }}
            >
              Цена за тур
            </span>
            <span
              style={{ fontSize: "20px", fontWeight: "700", color: "#1f2937" }}
            >
              ${price}
            </span>
          </div>
          <Button text="Забронировать" variant="primary" />
        </div>
      </div>
    </div>
  );
}

export default Card;
