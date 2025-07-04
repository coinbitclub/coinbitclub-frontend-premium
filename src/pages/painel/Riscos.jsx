import React, { useState } from 'react';

export default function Riscos() {
  const [nivel, setNivel] = useState(2);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-white">Configuração de Riscos</h1>
      <label className="block text-gray-300">Nível de Risco: {nivel}</label>
      <input
        type="range"
        min="1"
        max="5"
        value={nivel}
        onChange={(e) => setNivel(e.target.value)}
        className="w-full mt-2"
      />
      <p className="mt-4 text-gray-400">
        Níveis de 1 (mais conservador) a 5 (mais agressivo).
      </p>
    </div>
  );
}
