import React from "react";

function Badge({ label, colorScheme = "green" }) {
  const colors = {
    green: { bg: "#d8ebd5", text: "#1f421c" },
    yellow: { bg: "#fef3c7", text: "#92400e" },
    red: { bg: "#fde8e8", text: "#9b1c1c" },
  };

  const style = {
    padding: "4px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "700",
    backgroundColor: colors[colorScheme]?.bg || "#f1f5f9",
    color: colors[colorScheme]?.text || "#1f2937",
  };

  return <span style={style}>{label}</span>;
}

export default Badge;
