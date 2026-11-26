
import React, { memo } from "react";

function Counter({ count, onIncrease, onDecrease }) {
  console.log("Counter render");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        margin: "24px 0",
        color: "#2d5a27",
      }}
    >
      <button onClick={onDecrease} style={buttonStyle}>
        −
      </button>

      <strong style={{ fontSize: "18px" }}>
        Счётчик: {count}
      </strong>

      <button onClick={onIncrease} style={buttonStyle}>
        +
      </button>
    </div>
  );
}

const buttonStyle = {
  width: "36px",
  height: "36px",
  border: "1px solid #cbdcc7",
  borderRadius: "8px",
  background: "#eaf2e8",
  color: "#2d5a27",
  fontSize: "20px",
  cursor: "pointer",
};

export default memo(Counter);
