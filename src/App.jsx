// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Páginas públicas
import LandingPage           from './pages/LandingPage';
import Login                 from './pages/Login';
import Register              from './pages/Register';
import FAQ                   from './pages/FAQ';
import PoliticaPrivacidade   from './pages/PoliticaPrivacidade';
import Terms                 from './pages/Terms';
import NotFound              from './pages/NotFound';

// Auth guard
import RequireAuth           from './auth/RequireAuth';

// Área de usuário (painel)
import PainelLayout          from './pages/painel/PainelLayout';
import Dashboard             from './pages/painel/Dashboard';
import Plano                 from './pages/painel/Plano';
import Riscos                from './pages/painel/Riscos';
import Configuracoes         from './pages/painel/Configuracoes';
import Extrato               from './pages/painel/Extrato';
import Sinais                from './pages/painel/Sinais';

export default function App() {
  return (
    <Routes>
      {/* --- Rotas Públicas --- */}
      <Route path="/"                    element={<LandingPage />} />
      <Route path="login"               element={<Login />} />
      <Route path="register"            element={<Register />} />
      <Route path="faq"                 element={<FAQ />} />
      <Route path="politica-privacidade"element={<PoliticaPrivacidade />} />
      <Route path="termos-de-uso"       element={<Terms />} />

      {/* --- Área de Usuário Protegida --- */}
      <Route
        path="painel/*"
        element={
          <RequireAuth>
            <PainelLayout />
          </RequireAuth>
        }
      >
        <Route index              element={<Dashboard />} />
        <Route path="plano"       element={<Plano />} />
        <Route path="riscos"      element={<Riscos />} />
        <Route path="configuracoes" element={<Configuracoes />} />
        <Route path="extrato"     element={<Extrato />} />
        <Route path="sinais"      element={<Sinais />} />
      </Route>

      {/* --- Fallback Geral --- */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
