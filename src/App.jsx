import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ComoFunciona from "./pages/ComoFunciona";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";

export default function App() {
  const isAuthenticated = !!localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/register" element={<Register />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/login" element={<Login />} />
        <Route path="/painel" element={isAuthenticated ? <div className='text-white p-6'>Painel</div> : <Navigate to="/login" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
