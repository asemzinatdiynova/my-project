import React, { useState } from "react";

function RegisterForm() {
  // 1. Состояния для всех полей формы
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [skills, setSkills] = useState([]); // Массив для выбранных чекбоксов
  const [about, setAbout] = useState("");

  // 2. Состояние для ошибок и статуса отправки
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Обработчик чекбоксов (так как их может быть несколько)
  const handleSkillChange = (e) => {
    const value = e.target.value;
    if (skills.includes(value)) {
      // Убираем, если уже был выбран
      setSkills(skills.filter((skill) => skill !== value));
    } else {
      // Добавляем новый навык
      setSkills([...skills, value]);
    }
    // Очищаем ошибку навыков при изменении
    if (errors.skills) {
      setErrors({ ...errors, skills: "" });
    }
  };

  // 3. Валидация и отправка формы
  const handleSubmit = (event) => {
    event.preventDefault();
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Имя не должно быть пустым";
    if (!email.trim()) newErrors.email = "Email не должен быть пустым";
    if (password.length < 6)
      newErrors.password = "Пароль должен содержать минимум 6 символов";
    if (!age || Number(age) < 18)
      newErrors.age = "Возраст должен быть не меньше 18";
    if (!country) newErrors.country = "Выберите страну";
    if (!gender) newErrors.gender = "Выберите пол";
    if (skills.length === 0) newErrors.skills = "Выберите хотя бы один навык";

    setErrors(newErrors);

    // Если ошибок нет — считаем форму успешной
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  };

  // 4. Функция полного сброса формы (handleReset)
  const handleReset = () => {
    setName("");
    setEmail("");
    setPassword("");
    setAge("");
    setCountry("");
    setGender("");
    setSkills([]);
    setAbout("");
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "30px auto",
        padding: "20px",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Регистрация пользователя (TravelSphere)</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        {/* Name */}
        <div>
          <label>Имя:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors({ ...errors, name: "" });
            }}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.name && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {errors.name}
            </span>
          )}
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: "" });
            }}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.email && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {errors.email}
            </span>
          )}
        </div>

        {/* Password */}
        <div>
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (errors.password) setErrors({ ...errors, password: "" });
            }}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.password && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {errors.password}
            </span>
          )}
        </div>

        {/* Age */}
        <div>
          <label>Возраст:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              if (errors.age) setErrors({ ...errors, age: "" });
            }}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          />
          {errors.age && (
            <span style={{ color: "red", fontSize: "14px" }}>{errors.age}</span>
          )}
        </div>

        {/* Country (Select) */}
        <div>
          <label>Страна:</label>
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              if (errors.country) setErrors({ ...errors, country: "" });
            }}
            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
          >
            <option value="">-- Выберите страну --</option>
            <option value="Kazakhstan">Казахстан</option>
            <option value="USA">США</option>
            <option value="Germany">Германия</option>
            <option value="Japan">Япония</option>
          </select>
          {errors.country && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {errors.country}
            </span>
          )}
        </div>

        {/* Gender (Radio) */}
        <div>
          <label>Пол:</label>
          <div style={{ display: "flex", gap: "15px", marginTop: "5px" }}>
            <label>
              <input
                type="radio"
                name="gender"
                value="Женский"
                checked={gender === "Женский"}
                onChange={(e) => {
                  setGender(e.target.value);
                  if (errors.gender) setErrors({ ...errors, gender: "" });
                }}
              />{" "}
              Женский
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Мужской"
                checked={gender === "Мужской"}
                onChange={(e) => {
                  setGender(e.target.value);
                  if (errors.gender) setErrors({ ...errors, gender: "" });
                }}
              />{" "}
              Мужской
            </label>
          </div>
          {errors.gender && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {errors.gender}
            </span>
          )}
        </div>

        {/* Skills (Checkboxes) */}
        <div>
          <label>Навыки:</label>
          <div style={{ display: "flex", gap: "15px", marginTop: "5px" }}>
            {["HTML", "CSS", "JavaScript", "React"].map((skill) => (
              <label key={skill}>
                <input
                  type="checkbox"
                  value={skill}
                  checked={skills.includes(skill)}
                  onChange={handleSkillChange}
                />{" "}
                {skill}
              </label>
            ))}
          </div>
          {errors.skills && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {errors.skills}
            </span>
          )}
        </div>

        {/* About (Textarea) */}
        <div>
          <label>О себе:</label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              height: "80px",
            }}
          />
        </div>

        {/* Кнопки управления */}
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#2d5a27",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Зарегистрироваться
          </button>
          <button
            type="button"
            onClick={handleReset}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ccc",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Сбросить
          </button>
        </div>
      </form>

      {/* Условное отображение сообщения об успехе */}
      {isSubmitted && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#d4edda",
            color: "#155724",
            borderRadius: "5px",
          }}
        >
          <h3>Форма успешно отправлена!</h3>
          <button
            onClick={handleReset}
            style={{
              marginTop: "10px",
              padding: "8px 15px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Очистить форму
          </button>
        </div>
      )}

      {/* Условное отображение блока с введенными данными */}
      {isSubmitted && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#f8f9fa",
            border: "1px solid #dee2e6",
            borderRadius: "5px",
          }}
        >
          <h4>Данные пользователя:</h4>
          <p>
            <strong>Имя:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Возраст:</strong> {age}
          </p>
          <p>
            <strong>Страна:</strong> {country}
          </p>
          <p>
            <strong>Пол:</strong> {gender}
          </p>
          <p>
            <strong>Навыки:</strong> {skills.join(", ")}
          </p>
          <p>
            <strong>О себе:</strong> {about || "Не указано"}
          </p>
        </div>
      )}
    </div>
  );
}

export default RegisterForm;
