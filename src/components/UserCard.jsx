import React from "react";

function UserCard({ user }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        margin: "12px 0",
      }}
    >
      <h3>{user.name}</h3>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Телефон: {user.phone}</p>
      <p>Компания: {user.company.name}</p>
    </div>
  );
}

export default UserCard;
