import React from "react";

function Navigation({ links = [] }) {
  return (
    <nav style={{ display: "flex", gap: "20px", alignItems: "center" }}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url || "#"}
          style={{
            color: index === 0 ? "#2d5a27" : "#4b5563",
            textDecoration: "none",
            fontSize: "14px",
            fontWeight: index === 0 ? "700" : "500",
            transition: "color 0.2s",
          }}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
