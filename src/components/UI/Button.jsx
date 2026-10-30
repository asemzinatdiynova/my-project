import React from "react";

function Button({ text, variant = "primary", isDisabled = false, onClick }) {
  const styles = {
    padding: "10px 22px",
    borderRadius: "10px",
    border: variant === "outline" ? "1px solid #2d5a27" : "none",
    cursor: isDisabled ? "not-allowed" : "pointer",
    fontWeight: "600",
    fontSize: "14px",
    backgroundColor:
      variant === "primary"
        ? "#2d5a27"
        : variant === "secondary"
          ? "#eaf2e8"
          : "transparent",
    color: variant === "primary" ? "#ffffff" : "#2d5a27",
    opacity: isDisabled ? 0.6 : 1,
    transition: "all 0.2s",
  };

  return (
    <button style={styles} disabled={isDisabled} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
