import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Plans from './pages/Plans';
import ComoFunciona from './pages/ComoFunciona';
import FAQ from './pages/FAQ';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

// Panel pages (Português folder 'painel')
import Dashboard from './pages/painel/Dashboard';
import Configuracoes from './pages/painel/Configuracoes';
import Extrato from './pages/painel/Extrato';
import Plano from './pages/painel/Plano';
import Riscos from './pages/painel/Riscos';
import Sinais from './pages/painel/Sinais';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/como-funciona" element={<ComoFunciona />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
      <Route path="/termos"          element={<Terms />} />

      {/* Panel routes */}
      <Route path="/panel/dashboard" element={<Dashboard />} />
      <Route path="/panel/configuracoes" element={<Configuracoes />} />
      <Route path="/panel/extrato" element={<Extrato />} />
      <Route path="/panel/plano" element={<Plano />} />
      <Route path="/panel/riscos" element={<Riscos />} />
      <Route path="/panel/sinais" element={<Sinais />} />

      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
