import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PainelLayout from "./components/PainelLayout";
import Dashboard from "./pages/painel/dashboard";
import Plano from "./pages/painel/plano";
import Riscos from "./pages/painel/riscos";
import Configuracoes from "./pages/painel/configuracoes";
import Extrato from "./pages/painel/extrato";
import Sinais from "./pages/painel/sinais";

import LandingPage from "./pages/landingPage";
import ComoFunciona from "./pages/ComoFunciona";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export default function App() {
  const isAuthenticated = true; // substituir por lógica real de auth

  return (
    <Router>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/termos" element={<Terms />} />
        <Route path="/politica-de-privacidade" element={<PoliticaPrivacidade />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Painel privado */}
        <Route
          path="/painel"
          element={isAuthenticated ? <PainelLayout /> : <Navigate to="/login" replace />}
        >
          <Route index element={<Dashboard />} />
          <Route path="plano" element={<Plano />} />
          <Route path="riscos" element={<Riscos />} />
          <Route path="configuracoes" element={<Configuracoes />} />
          <Route path="extrato" element={<Extrato />} />
          <Route path="sinais" element={<Sinais />} />
        </Route>

        {/* Rota fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
