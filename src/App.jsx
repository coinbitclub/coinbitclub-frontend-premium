// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ComoFunciona from "./pages/ComoFunciona";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

import PainelLayout from "./components/PainelLayout";
import Dashboard from "./pages/painel/Dashboard";
import Plano from "./pages/painel/Plano";
import Riscos from "./pages/painel/Riscos";
import Configuracoes from "./pages/painel/Configuracoes";
import Extrato from "./pages/painel/Extrato";
import Sinais from "./pages/painel/Sinais";

export default function App() {
  // Ajuste para usar seu fluxo real de auth
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router basename="/">
      <Routes>
        {/* Público */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protegido: painel */}
        <Route
          path="/painel/*"
          element={
            isAuthenticated
              ? <PainelLayout />
              : <Navigate to="/login" replace />
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="plano" element={<Plano />} />
          <Route path="riscos" element={<Riscos />} />
          <Route path="configuracoes" element={<Configuracoes />} />
          <Route path="extrato" element={<Extrato />} />
          <Route path="sinais" element={<Sinais />} />
          {/* Redireciona rotas inválidas dentro do painel para /painel */}
          <Route path="*" element={<Navigate to="/painel" replace />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
