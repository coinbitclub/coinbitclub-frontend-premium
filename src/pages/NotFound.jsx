import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-white text-center">
      <div>
        <h1 className="text-6xl font-bold mb-4 text-yellow-500">404</h1>
        <p className="text-lg mb-6">Página não encontrada</p>
        <Link to="/" className="text-yellow-400 underline">Voltar para o início</Link>
      </div>
    </div>
  );
}
