import React, { useState } from 'react';

export default function Plano() {
  const planos = [
    { name: 'Básico', price: 'R$ 49,90/mês', features: ['1 Robô', 'Suporte e-mail'] },
    { name: 'Premium', price: 'R$ 99,90/mês', features: ['3 Robôs', 'Suporte 24/7'] },
  ];
  const [selected, setSelected] = useState(planos[0].name);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-white">Meu Plano</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {planos.map((p) => (
          <div
            key={p.name}
            onClick={() => setSelected(p.name)}
            className={`p-4 rounded-lg cursor-pointer border ${
              selected === p.name
                ? 'border-yellow-400 bg-gray-800'
                : 'border-gray-700'
            }`}
          >
            <h2 className="text-xl font-semibold text-white">{p.name}</h2>
            <p className="text-gray-300">{p.price}</p>
            <ul className="mt-2 text-gray-400 list-disc list-inside">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
