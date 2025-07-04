import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const token = localStorage.getItem('token');
  const location = useLocation();

  if (!token) {
    // redireciona para login, guardando a rota atual
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
