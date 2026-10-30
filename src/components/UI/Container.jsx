import React from "react";

function Container({ children, maxWidth = "1140px" }) {
  return (
    <div
      style={{
        maxWidth: maxWidth,
        margin: "0 auto",
        padding: "20px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        backgroundColor: "#fbfdfb",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
}

export default Container;
