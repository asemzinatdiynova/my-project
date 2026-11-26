import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Избранное
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Корзина
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Сохранение избранного
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Сохранение корзины
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Добавление в избранное
  const toggleFavorite = useCallback((id, e) => {
    if (e) e.stopPropagation();

    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  }, []);

  // Добавление тура в корзину
  const addToCart = useCallback((id) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);

      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...prev, { id, quantity: 1 }];
    });
  }, []);

  const decreaseQuantity = useCallback((id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // Общее количество туров в корзине
  const cartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const contextValue = useMemo(() => ({
    favorites,
    favoritesCount: favorites.length,
    toggleFavorite,
    cart,
    cartCount,
    addToCart,
    decreaseQuantity,
    removeFromCart,
  }), [
    favorites,
    toggleFavorite,
    cart,
    cartCount,
    addToCart,
    decreaseQuantity,
    removeFromCart,
  ]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
