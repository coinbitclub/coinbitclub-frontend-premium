import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  FiHome,
  FiDollarSign,
  FiPieChart,
  FiSettings,
  FiFileText,
  FiZap,
  FiLogOut,
} from 'react-icons/fi';

export default function PainelLayout() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
  };

  const menu = [
    { to: '',              label: 'Dashboard',     icon: <FiHome /> },
    { to: 'plano',         label: 'Plano',         icon: <FiDollarSign /> },
    { to: 'riscos',        label: 'Riscos',        icon: <FiPieChart /> },
    { to: 'configuracoes', label: 'Configurações', icon: <FiSettings /> },
    { to: 'extrato',       label: 'Extrato',       icon: <FiFileText /> },
    { to: 'sinais',        label: 'Sinais',        icon: <FiZap /> },
  ];

  return (
    <div className="min-h-screen flex bg-gray-900 text-gray-200">
      {/* Sidebar */}
      <aside className="w-64 hidden md:flex flex-col bg-gray-800">
        <div className="p-6 text-xl font-bold text-yellow-400">Painel</div>
        <nav className="flex-1 px-4 space-y-2">
          {menu.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                `flex items-center p-2 rounded hover:bg-gray-700 transition-colors ${
                  isActive ? 'bg-gray-700 text-white' : 'text-gray-200'
                }`
              }
            >
              <span className="text-lg mr-3">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Botão de logout aprimorado */}
        <button
          onClick={logout}
          className="flex items-center justify-center m-4 p-2 bg-red-600 hover:bg-red-500 rounded transition-colors text-white font-medium"
        >
          <FiLogOut className="mr-2" size={20} />
          Sair
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 overflow-auto bg-gray-900">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
