import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import UserPosts from "../components/UserPosts";

function UserDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  if (loading) {
    return <h2>Загрузка...</h2>;
  }

  if (error) {
    return <p>Ошибка: {error}</p>;
  }

  if (!data) {
    return <p>Пользователь не найден</p>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>{data.name}</h1>

      <p>Username: {data.username}</p>
      <p>Email: {data.email}</p>
      <p>Телефон: {data.phone}</p>
      <p>Сайт: {data.website}</p>

      <h3>Компания</h3>
      <p>{data.company.name}</p>

      <h3>Адрес</h3>
      <p>{data.address.city}</p>
      <p>{data.address.street}</p>

      <UserPosts />

      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
}

export default UserDetailsPage;
