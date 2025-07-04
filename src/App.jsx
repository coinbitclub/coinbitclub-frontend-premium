// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RequireAuth from './auth/RequireAuth';

// Públicas...
import LandingPage         from './pages/LandingPage';
import Login               from './pages/Login';
import Register            from './pages/Register';
import FAQ                 from './pages/FAQ';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';
import Terms               from './pages/Terms';
import NotFound            from './pages/NotFound';

// Área do Usuário
import PainelLayout        from './pages/painel/PainelLayout';
import Dashboard           from './pages/painel/Dashboard';
import Plano               from './pages/painel/Plano';
import Riscos              from './pages/painel/Riscos';
import Configuracoes       from './pages/painel/Configuracoes';
import Extrato             from './pages/painel/Extrato';
import Sinais              from './pages/painel/Sinais';

// Afiliado
import AffiliateLayout     from './layout/AffiliateLayout';
import AffiliateDashboard  from './pages/afiliado/Dashboard';
import AffiliateExtrato    from './pages/afiliado/Extrato';
import AffiliateConvite    from './pages/afiliado/Convite';
import AffiliateSaque      from './pages/afiliado/Saque';

// Admin
import AdminLayout         from './layout/AdminLayout';
import AdminDashboard      from './pages/admin/Dashboard';
import AdminOperacoes      from './pages/admin/Operacoes';
import AdminAlertas        from './pages/admin/Alertas';
import AdminFinanceiro     from './pages/admin/Financeiro';
import AdminUsuarios       from './pages/admin/Usuarios';
import AdminAfiliados      from './pages/admin/Afiliados';
import AdminParametros     from './pages/admin/Parametros';

export default function App() {
  return (
    <Routes>
      {/* públicas */}
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="politica-privacidade" element={<PoliticaPrivacidade />} />
      <Route path="termos-de-uso" element={<Terms />} />

      {/* usuário normal (painel) */}
      <Route
        path="painel/*"
        element={
          <RequireAuth roles={[ 'user' ]}>
            <PainelLayout />
          </RequireAuth>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="plano" element={<Plano />} />
        <Route path="riscos" element={<Riscos />} />
        <Route path="configuracoes" element={<Configuracoes />} />
        <Route path="extrato" element={<Extrato />} />
        <Route path="sinais" element={<Sinais />} />
      </Route>

      {/* afiliado */}
      <Route
        path="afiliado/*"
        element={
          <RequireAuth roles={[ 'affiliate' ]}>
            <AffiliateLayout />
          </RequireAuth>
        }
      >
        <Route index element={<AffiliateDashboard />} />
        <Route path="extrato" element={<AffiliateExtrato />} />
        <Route path="convite" element={<AffiliateConvite />} />
        <Route path="saque" element={<AffiliateSaque />} />
      </Route>

      {/* admin */}
      <Route
        path="admin/*"
        element={
          <RequireAuth roles={[ 'admin' ]}>
            <AdminLayout />
          </RequireAuth>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="operacoes" element={<AdminOperacoes />} />
        <Route path="alertas" element={<AdminAlertas />} />
        <Route path="financeiro" element={<AdminFinanceiro />} />
        <Route path="usuarios" element={<AdminUsuarios />} />
        <Route path="afiliados" element={<AdminAfiliados />} />
        <Route path="parametros" element={<AdminParametros />} />
      </Route>

      {/* fallback 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}