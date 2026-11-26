import React, { useState, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import UserList from "../components/UserList";
import useDebounce from "../hooks/useDebounce";

function UsersPage() {
  const { data, loading, error, refetch } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [company, setCompany] = useState("all");

  const filteredUsers = useMemo(() => {
    if (!data) return [];

    return data.filter((user) => {
      const matchSearch = user.name
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase());

      const matchCompany = company === "all" || user.company.name === company;

      return matchSearch && matchCompany;
    });
  }, [data, debouncedSearch, company]);

  if (loading) {
    return <h2>Загрузка...</h2>;
  }

  if (error) {
    return (
      <div>
        <p>Ошибка: {error}</p>
        <button onClick={refetch}>Повторить запрос</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Каталог пользователей</h1>

      <input
        type="text"
        placeholder="Поиск по имени..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={company} onChange={(e) => setCompany(e.target.value)}>
        <option value="all">Все компании</option>

        {[...new Set(data.map((user) => user.company.name))].map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>

      <button
        onClick={() => {
          setSearch("");
          setCompany("all");
        }}
      >
        Очистить фильтры
      </button>

      <button onClick={refetch}>Повторить запрос</button>

      <h3>Найдено пользователей: {filteredUsers.length}</h3>

      {filteredUsers.length === 0 ? (
        <p>Пользователи не найдены</p>
      ) : (
        <UserList users={filteredUsers} />
      )}
    </div>
  );
}

export default UsersPage;
