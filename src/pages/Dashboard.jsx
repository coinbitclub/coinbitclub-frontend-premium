import React from "react";

export default function Dashboard() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-zinc-800 p-4 rounded">🔄 Operações abertas: 3</div>
        <div className="bg-zinc-800 p-4 rounded">✅ Fechadas hoje: 12</div>
        <div className="bg-zinc-800 p-4 rounded">📈 Acertos: 87%</div>
        <div className="bg-zinc-800 p-4 rounded">💰 Lucro acumulado: +23.5%</div>
      </div>
    </div>
  );
}
