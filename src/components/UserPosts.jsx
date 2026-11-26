import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function UserPosts() {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users/${id}/posts`,
  );

  if (loading) {
    return <p>Загрузка постов...</p>;
  }

  if (error) {
    return <p>Ошибка загрузки постов: {error}</p>;
  }

  return (
    <div>
      <h2>Посты пользователя</h2>

      {data && data.length > 0 ? (
        data.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              margin: "10px 0",
              borderRadius: "8px",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>Постов нет</p>
      )}
    </div>
  );
}

export default UserPosts;
