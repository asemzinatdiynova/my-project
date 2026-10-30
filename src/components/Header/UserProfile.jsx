import React from "react";
import { useAuth } from "../../context/AuthContext";

function UserProfile() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#f0f6ef",
        padding: "6px 14px 6px 8px",
        borderRadius: "30px",
        border: "1px solid #e1ebe0",
      }}
    >
      <div
        style={{
          width: "34px",
          height: "34px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #2d5a27 0%, #437a3c 100%)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "700",
          fontSize: "13px",
        }}
      >
        {user.name.slice(0, 2).toUpperCase()}
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", lineHeight: "1.2" }}
      >
        <strong
          style={{ color: "#1f421c", fontSize: "13px", fontWeight: "700" }}
        >
          {user.name}
        </strong>
        <span style={{ color: "#52784d", fontSize: "11px", fontWeight: "500" }}>
          {user.role}
        </span>
      </div>
    </div>
  );
}

export default UserProfile;
