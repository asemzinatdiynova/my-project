import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import RegisterForm from "./pages/RegisterForm";
import MainLayout from "./components/Layout/MainLayout";
import CatalogPage from "./pages/CatalogPage";
import TourDetailPage from "./pages/TourDetailPage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

import HeroSection from "./components/Hero/HeroSection";
import StatCard from "./components/Analytics/StatCard";
import { useAuth } from "./context/AuthContext";

function Home() {
  return (
    <>
      <HeroSection />
      <div
        style={{
          display: "flex",
          gap: "16px",
          margin: "24px 0",
          flexWrap: "wrap",
        }}
      >
        <StatCard
          title="Забронировано туров"
          value="380+"
          change="18"
          isPositive={true}
        />
        <StatCard
          title="Посещенных стран"
          value="42"
          change="8"
          isPositive={true}
        />
        <StatCard
          title="Индекс удовольствия"
          value="99.4%"
          change="2"
          isPositive={true}
        />
      </div>
    </>
  );
}

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/" replace />;
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="tour/:id" element={<TourDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
