import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PainelLayout from "./components/PainelLayout";
import Dashboard from "./pages/painel/Dashboard";
import Plano from "./pages/painel/Plano";
import Riscos from "./pages/painel/Riscos";
import Configuracoes from "./pages/painel/Configuracoes";
import Extrato from "./pages/painel/Extrato";
import Sinais from "./pages/painel/Sinais";

export default function App() {
  const isAuthenticated = true; // depois substituir por auth real

  return (
    <Router>
      <Routes>
        <Route path="/painel" element={<PainelLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="plano" element={<Plano />} />
          <Route path="riscos" element={<Riscos />} />
          <Route path="configuracoes" element={<Configuracoes />} />
          <Route path="extrato" element={<Extrato />} />
          <Route path="sinais" element={<Sinais />} />
        </Route>
      </Routes>
    </Router>
  );
}
