// src/layout/AdminLayout.jsx
import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  FiGrid, FiClipboard, FiBell, FiDollarSign,
  FiUsers, FiUserPlus, FiSettings, FiLogOut
} from 'react-icons/fi';

export default function AdminLayout() {
  const nav = useNavigate();
  const sair = () => {
    localStorage.clear();
    nav('/login', { replace: true });
  };

  const menu = [
    { to: 'dashboard', label: 'Dashboard', icon: <FiGrid /> },
    { to: 'operacoes', label: 'Operações', icon: <FiClipboard /> },
    { to: 'alertas',   label: 'Alertas & Logs', icon: <FiBell /> },
    { to: 'financeiro',label: 'Financeiro', icon: <FiDollarSign /> },
    { to: 'usuarios',  label: 'Usuários', icon: <FiUsers /> },
    { to: 'afiliados', label: 'Afiliados', icon: <FiUserPlus /> },
    { to: 'parametros',label: 'Parâmetros', icon: <FiSettings /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-200">
      <aside className="w-64 bg-gray-800 p-4 flex flex-col">
        <h2 className="text-xl font-bold text-yellow-400 mb-6">Admin</h2>
        <nav className="flex-1 space-y-2">
          {menu.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center p-2 rounded hover:bg-gray-700 ${
                  isActive ? 'bg-gray-700 text-white' : 'text-gray-300'
                }`
              }
            >
              <span className="mr-2 text-lg">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={sair}
          className="mt-4 flex items-center justify-center p-2 bg-red-600 hover:bg-red-500 rounded text-white"
        >
          <FiLogOut className="mr-1"/> Sair
        </button>
      </aside>
      <main className="flex-1 p-6 overflow-auto bg-gray-900">
        <Outlet />
      </main>
    </div>
  );
}
