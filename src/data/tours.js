export const initialTours = [
  {
    id: 1,
    title: "Восхождение на Кольсай и Кайынды",
    category: "Горы & Треккинг",
    price: 120,
    rating: 4.9,
    description:
      "Невероятный треккинг по высокогорным озерам Тянь-Шаня с ночевкой в уютном глэмпинге и прогулкой на лодке.",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
  },
  {
    id: 2,
    title: "Реликтовые леса и ущелья Алматы",
    category: "Горы & Треккинг",
    price: 85,
    rating: 4.7,
    description:
      "Прогулка по хвойным лесам, чистейший горный воздух, освежающие водопады и авторский обед на природе.",
    imageUrl:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800",
  },
  {
    id: 3,
    title: "Тропический Бали & Острова",
    category: "Пляжи & Острова",
    price: 890,
    rating: 5.0,
    description:
      "Уединенные эко-респубики, рисовые террасы Убуда, медитации на рассвете и закаты на берегу океана.",
    imageUrl:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
  },
  {
    id: 4,
    title: "Гастро-тур по уютной Грузии",
    category: "Гастро-туры",
    price: 450,
    rating: 4.8,
    description:
      "Дегустация органика-вин в Кахетии, мастер-классы по приготовлению хинкали и древняя архитектура.",
    imageUrl:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
  },
  {
    id: 5,
    title: "Закаты Чарынского Каньона",
    category: "Горы & Треккинг",
    price: 95,
    rating: 4.9,
    description:
      "Путешествие в Долину Замков, ночное наблюдение за звездами и пикник на берегу реки Чарын.",
    imageUrl:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800",
  },
  {
    id: 6,
    title: "Фьорды и скалы Норвегии",
    category: "Горы & Треккинг",
    price: 1100,
    rating: 5.0,
    description:
      "Походы вдоль живописных фьордов, ночевки в скандинавских домиках и круиз по северным водам.",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
  },
];

const extraTours = Array.from({ length: 994 }, (_, index) => {
  const template = initialTours[index % initialTours.length];
  const id = index + 7;

  return {
    ...template,
    id,
    title: `${template.title} — маршрут №${id}`,
    price: template.price + (index % 20) * 5,
    rating: Number((4 + (index % 10) / 10).toFixed(1)),
    description: `Авторский маршрут №${id}. ${template.description}`,
  };
});

export const allTours = [...initialTours, ...extraTours];
