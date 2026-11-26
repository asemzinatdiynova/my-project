import React, { useState, useMemo, useCallback } from 'react';

// 1. Массив из 20+ товаров (туров TravelSphere)
const initialTours = [
  { id: 1, name: 'Тур на Кольсайские озёра', category: 'Горы', price: 45000, rating: 4.8 },
  { id: 2, name: 'Поход на пик Чимбулак', category: 'Горы', price: 30000, rating: 4.6 },
  { id: 3, name: 'Экскурсия в Чарынский каньон', category: 'Каньон', price: 25000, rating: 4.9 },
  { id: 4, name: 'Поездка на озеро Кайынды', category: 'Озёра', price: 40000, rating: 4.7 },
  { id: 5, name: 'Тур в парк Алтын-Эмель', category: 'Парки', price: 55000, rating: 4.5 },
  { id: 6, name: 'Восхождение на БАО', category: 'Горы', price: 20000, rating: 4.4 },
  { id: 7, name: 'Тур на плато Устюрт', category: 'Пустыня', price: 85000, rating: 4.9 },
  { id: 8, name: 'Горячие источники Чунджи', category: 'Термы', price: 35000, rating: 4.3 },
  { id: 9, name: 'Тур в Туркестан', category: 'История', price: 60000, rating: 4.8 },
  { id: 10, name: 'Этно-тур в деревню мастеров', category: 'Культура', price: 28000, rating: 4.2 },
  { id: 11, name: 'Сплав по реке Или', category: 'Экстрим', price: 38000, rating: 4.7 },
  { id: 12, name: 'Джип-тур на озеро Иссык', category: 'Озёра', price: 32000, rating: 4.6 },
  { id: 13, name: 'Ночная обсерватория', category: 'Наука', price: 22000, rating: 4.9 },
  { id: 14, name: 'Водопад Бурханбулак', category: 'Горы', price: 50000, rating: 4.8 },
  { id: 15, name: 'Конный тур на плато Ассы', category: 'Активный', price: 45000, rating: 4.7 },
  { id: 16, name: 'Заповедник Аксу-Жабаглы', category: 'Парки', price: 70000, rating: 4.9 },
  { id: 17, name: 'Поездка на Мертвое озеро', category: 'Мистика', price: 33000, rating: 4.1 },
  { id: 18, name: 'Каньоны реки Бестюбе', category: 'Каньон', price: 42000, rating: 4.5 },
  { id: 19, name: 'Велотур по Тянь-Шаню', category: 'Активный', price: 27000, rating: 4.4 },
  { id: 20, name: 'Пещера Коныр-Оули', category: 'История', price: 48000, rating: 4.6 }
];

// Искусственно «тяжёлое» вычисление
const calculateSomething = (count) => {
  console.log('🔴 Выполнение тяжёлого вычисления calculateSomething()...');
  let sum = 0;
  for (let i = 0; i < 50000000; i++) {
    sum += i % (count || 1);
  }
  return sum;
};

// ==========================================
// 1. Компонент Counter (независимый счетчик)
// ==========================================
const Counter = React.memo(({ counter, onIncrement, onDecrement }) => {
  console.log('Counter render');
  return (
    <div style={{ padding: '10px', border: '1px dashed #2d5a27', borderRadius: '6px', marginBottom: '15px' }}>
      <span>Счётчик (проверка ререндеров родителя): <strong>{counter}</strong></span>
      <button onClick={onIncrement} style={{ marginLeft: '10px', padding: '4px 8px' }}>+</button>
      <button onClick={onDecrement} style={{ marginLeft: '5px', padding: '4px 8px' }}>-</button>
    </div>
  );
});

// ==========================================
// 2. Компонент Search (поиск и фильтрация)
// ==========================================
const Search = React.memo(({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, categories, sortType, setSortType }) => {
  console.log('Search render');
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
      <input
        type="text"
        placeholder="Поиск тура по названию..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: '8px', flex: '1', minWidth: '200px' }}
      />

      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} style={{ padding: '8px' }}>
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <select value={sortType} onChange={(e) => setSortType(e.target.value)} style={{ padding: '8px' }}>
        <option value="default">Без сортировки</option>
        <option value="price-asc">Цена: от меньшей к большей</option>
        <option value="price-desc">Цена: от большей к меньшей</option>
        <option value="rating">По рейтингу (⭐)</option>
      </select>
    </div>
  );
});

// ==========================================
// 3. Компонент ProductStats (статистика + useMemo)
// ==========================================
const ProductStats = React.memo(({ products }) => {
  console.log('ProductStats render');

  // Расчёты через useMemo
  const { totalCount, avgPrice, avgRating } = useMemo(() => {
    console.log('⚡ useMemo в ProductStats: пересчёт статистики...');
    const count = products.length;
    if (count === 0) return { totalCount: 0, avgPrice: 0, avgRating: 0 };

    const totalPrice = products.reduce((acc, p) => acc + p.price, 0);
    const totalRating = products.reduce((acc, p) => acc + p.rating, 0);

    return {
      totalCount: count,
      avgPrice: Math.round(totalPrice / count),
      avgRating: (totalRating / count).toFixed(1)
    };
  }, [products]);

  return (
    <div style={{ padding: '12px', backgroundColor: '#eaf2e8', borderRadius: '6px', marginBottom: '15px' }}>
      <p>📊 <strong>Статистика:</strong> Найдено туров: <strong>{totalCount}</strong> | Средняя цена: <strong>{avgPrice} ₸</strong> | Средний рейтинг: <strong>⭐ {avgRating}</strong></p>
    </div>
  );
});

// ==========================================
// 4. Компонент ProductItem (карточка товара)
// ==========================================
const ProductItem = React.memo(({ product, onAddToCart }) => {
  console.log(`ProductItem render: ${product.name}`);

  return (
    <div style={{ border: '1px solid #d0e0cd', padding: '15px', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h4>{product.name}</h4>
      <p>Категория: {product.category}</p>
      <p>Цена: {product.price} ₸</p>
      <p>Рейтинг: ⭐ {product.rating}</p>
      <button 
        onClick={() => onAddToCart(product)}
        style={{ padding: '6px 12px', backgroundColor: '#2d5a27', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Добавить в корзину
      </button>
    </div>
  );
});

// ==========================================
// 5. Компонент ProductList (список товаров)
// ==========================================
const ProductList = React.memo(({ products, onAddToCart }) => {
  console.log('ProductList render');

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '15px' }}>
      {products.length > 0 ? (
        products.map(product => (
          <ProductItem 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart} 
          />
        ))
      ) : (
        <p>Туры не найдены.</p>
      )}
    </div>
  );
});

// ==========================================
// 6. Главный компонент App (или страница каталога)
// ==========================================
export default function App() {
  const [products] = useState(initialTours);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortType, setSortType] = useState('default');
  const [counter, setCounter] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  // Уникальные категории для селекта
  const categories = useMemo(() => {
    return ['All', ...new Set(initialTours.map(p => p.category))];
  }, []);

  // Искусственно тяжёлое вычисление через useMemo
  const heavyValue = useMemo(() => {
    return calculateSomething(products.length);
  }, [products.length]);

  // Фильтрация и сортировка туров с помощью useMemo
  const filteredAndSortedProducts = useMemo(() => {
    console.log('🔍 Фильтрация и сортировка туров (useMemo)...');
    let result = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    if (sortType === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortType === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortType === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [products, searchQuery, selectedCategory, sortType]);

  // Оптимизированная функция добавления в корзину через useCallback
  const handleAddToCart = useCallback((product) => {
    console.log('🛒 Добавлено в корзину:', product.name);
    setCartCount(prev => prev + 1);
  }, []);

  // Обработчики для счетчика
  const handleIncrement = useCallback(() => setCounter(c => c + 1), []);
  const handleDecrement = useCallback(() => setCounter(c => c - 1), []);

  return (
    <div style={{ maxWidth: '900px', margin: '20px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Каталог туров TravelSphere (Оптимизация производительности)</h2>

      {/* Инфо о корзине и тяжелой функции */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', fontWeight: 'bold', color: '#2d5a27' }}>
        <span>🛒 Товаров в корзине: {cartCount}</span>
        <span style={{ fontSize: '11px', color: '#777' }}>(Тяжелый расчёт: {heavyValue})</span>
      </div>

      {/* Компонент Counter */}
      <Counter 
        counter={counter} 
        onIncrement={handleIncrement} 
        onDecrement={handleDecrement} 
      />

      {/* Компонент Search */}
      <Search 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
        sortType={sortType}
        setSortType={setSortType}
      />

      {/* Компонент ProductStats */}
      <ProductStats products={filteredAndSortedProducts} />

      {/* Компонент ProductList (содержит ProductItem) */}
      <ProductList 
        products={filteredAndSortedProducts} 
        onAddToCart={handleAddToCart} 
      />
    </div>
  );
}