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
import Plano from "./pages/painel/plano";
import Riscos from "./pages/painel/riscos";
import Configuracoes from "./pages/painel/configuracoes";
import Extrato from "./pages/painel/extrato";
import Sinais from "./pages/painel/sinais";

export default function App() {
  const isAuthenticated = true; // substituir por lógica real de auth

  return (
    <Router>
      <Routes>
        {/* Rota pública padrão */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Rota protegida do painel */}
        <Route path="/painel" element={isAuthenticated ? <PainelLayout /> : <Navigate to="/login" />}>
          <Route index element={<Dashboard />} />
          <Route path="plano" element={<Plano />} />
          <Route path="riscos" element={<Riscos />} />
          <Route path="configuracoes" element={<Configuracoes />} />
          <Route path="extrato" element={<Extrato />} />
          <Route path="sinais" element={<Sinais />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
