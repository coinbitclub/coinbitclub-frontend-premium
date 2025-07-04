import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ComoFunciona from "./pages/ComoFunciona";
import Register from "./pages/Register"; // supondo que exista
import Login from "./pages/Login"; // supondo que exista
import Terms from "./pages/Terms"; // supondo que exista
import Dashboard from "./pages/Dashboard"; // privada

export default function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/painel" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />} />
        <Route path="*" element={<div className='text-center text-white p-10'>Página não encontrada</div>} />
      </Routes>
    </Router>
  );
}
