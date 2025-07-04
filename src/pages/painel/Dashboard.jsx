import React from 'react';

export default function Dashboard() {
  // Exemplo de dados mock
  const stats = [
    { label: 'Saldo Atual',     value: 'R$ 12.345,67' },
    { label: 'Lucro do Mês',    value: 'R$ 1.234,56' },
    { label: 'Operações Hoje',  value: 24 },
    { label: 'Sinais Executados', value: 15 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-white">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="bg-gray-800 p-4 rounded shadow">
            <p className="text-gray-400">{s.label}</p>
            <p className="text-xl font-semibold text-white">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
