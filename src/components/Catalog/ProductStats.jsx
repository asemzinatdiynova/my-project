import React, { useMemo, memo } from "react";

function ProductStats({ tours }) {
  console.log("ProductStats render");

  const stats = useMemo(() => {
    console.log("Calculating tour statistics...");

    const totalCount = tours.length;

    if (totalCount === 0) {
      return {
        totalCount: 0,
        averagePrice: 0,
        averageRating: 0,
      };
    }

    const totalPrice = tours.reduce((sum, tour) => sum + tour.price, 0);
    const totalRating = tours.reduce((sum, tour) => sum + tour.rating, 0);

    return {
      totalCount,
      averagePrice: totalPrice / totalCount,
      averageRating: totalRating / totalCount,
    };
  }, [tours]);

  const heavyCalculation = useMemo(() => {
    console.log("Performing heavy calculation...");

    let result = 0;

    for (let i = 0; i < 1000000; i++) {
      result += Math.sqrt(i);
    }

    return result.toFixed(2);
  }, [tours]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        flexWrap: "wrap",
        margin: "24px 0",
        padding: "20px",
        background: "#eaf2e8",
        borderRadius: "12px",
        color: "#2d5a27",
      }}
    >
      <div>
        <strong>Всего туров:</strong> {stats.totalCount}
      </div>

      <div>
        <strong>Средняя цена:</strong> ${stats.averagePrice.toFixed(2)}
      </div>

      <div>
        <strong>Средний рейтинг:</strong> {stats.averageRating.toFixed(2)} ⭐
      </div>

      <div>
        <strong>Результат вычисления:</strong> {heavyCalculation}
      </div>
    </div>
  );
}

export default memo(ProductStats);
