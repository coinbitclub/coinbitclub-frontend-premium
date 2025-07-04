import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Plans from "./pages/Plans";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
// Você pode adicionar mais páginas conforme forem criadas

export default function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        {/* Público */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/planos" element={<Plans />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/termos" element={<Terms />} />

        {/* Privado */}
        <Route
          path="/painel"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </Router>
  );
}
