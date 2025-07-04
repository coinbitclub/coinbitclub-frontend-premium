import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { FiHome, FiFileText, FiSettings, FiPieChart, FiDollarSign, FiZap } from 'react-icons/fi';

export default function PainelLayout() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
  };

  const menu = [
    { to: '',       label: 'Dashboard', icon: <FiHome /> },
    { to: 'plano',  label: 'Plano',      icon: <FiDollarSign /> },
    { to: 'riscos', label: 'Riscos',     icon: <FiPieChart /> },
    { to: 'configuracoes', label: 'Configurações', icon: <FiSettings /> },
    { to: 'extrato', label: 'Extrato',   icon: <FiFileText /> },
    { to: 'sinais',  label: 'Sinais',    icon: <FiZap /> },
  ];

  return (
    <div className="min-h-screen flex bg-gray-900 text-gray-200">
      {/* Sidebar */}
      <aside className="w-64 hidden md:flex flex-col bg-gray-800">
        <div className="p-6 text-xl font-bold">Painel</div>
        <nav className="flex-1 px-4 space-y-2">
          {menu.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                `flex items-center p-2 rounded hover:bg-gray-700 ${
                  isActive ? 'bg-gray-700 text-white' : ''
                }`
              }
            >
              <span className="mr-3 text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
        <button
          onClick={logout}
          className="m-4 p-2 bg-red-600 rounded hover:bg-red-500"
        >
          Sair
        </button>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar (mobile) */}
        <header className="md:hidden flex items-center justify-between bg-gray-800 p-4">
          <button
            onClick={() => document.body.classList.toggle('sidebar-open')}
            className="text-2xl"
          >
            ☰
          </button>
          <div className="font-bold text-lg">Painel</div>
          <button onClick={logout} className="text-red-500">Sair</button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto bg-gray-900">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
