import React from "react";

function CategoryFilter({ categories, activeCategory, onSelectCategory }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        marginBottom: "28px",
        flexWrap: "wrap",
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          style={{
            padding: "9px 18px",
            borderRadius: "25px",
            border: "none",
            cursor: "pointer",
            fontSize: "14px",
            backgroundColor: activeCategory === cat ? "#2d5a27" : "#eaf2e8",
            color: activeCategory === cat ? "#ffffff" : "#374151",
            fontWeight: activeCategory === cat ? "600" : "500",
            transition: "all 0.2s",
          }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
