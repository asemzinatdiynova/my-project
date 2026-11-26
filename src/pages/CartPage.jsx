import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { allTours } from "../data/tours";

function CartPage() {
  const { cart, addToCart, decreaseQuantity, removeFromCart } = useCart();

  const cartTours = cart
    .map((item) => {
      const tour = allTours.find((t) => t.id === item.id);
      return tour ? { ...tour, quantity: item.quantity } : null;
    })
    .filter(Boolean);

  const totalPrice = cartTours.reduce(
    (sum, tour) => sum + tour.price * tour.quantity,
    0,
  );

  if (cartTours.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "60px 20px" }}>
        <h1>Ваша корзина пуста</h1>
        <p>Вы ещё не добавили ни одного тура.</p>
        <Link to="/catalog" style={{ color: "#2d5a27" }}>
          Перейти в каталог
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ color: "#2d5a27" }}>Корзина</h1>

      {cartTours.map((tour) => (
        <div
          key={tour.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            padding: "20px",
            marginBottom: "15px",
            background: "#ffffff",
            borderRadius: "12px",
            border: "1px solid #e2ebe0",
          }}
        >
          <div>
            <h3>{tour.title}</h3>
            <p>Цена: ${tour.price}</p>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <button onClick={() => decreaseQuantity(tour.id)}>−</button>

              <strong>{tour.quantity}</strong>

              <button onClick={() => addToCart(tour.id)}>+</button>
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <strong>${tour.price * tour.quantity}</strong>

            <div>
              <button
                onClick={() => removeFromCart(tour.id)}
                style={{
                  marginTop: "12px",
                  padding: "8px 12px",
                  background: "#fee2e2",
                  color: "#b91c1c",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Удалить
              </button>
            </div>
          </div>
        </div>
      ))}

      <h2>Итого: ${totalPrice}</h2>

      <Link to="/catalog" style={{ color: "#2d5a27" }}>
        Продолжить покупки
      </Link>
    </div>
  );
}

export default CartPage;
