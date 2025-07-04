import React from "react";

export default function Dashboard() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Dashboard Operacional</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-zinc-800 p-4 rounded">🚀 Operações em andamento: 6</div>
        <div className="bg-zinc-800 p-4 rounded">✅ Fechadas hoje: 18</div>
        <div className="bg-zinc-800 p-4 rounded">🎯 Assertividade do dia: 83%</div>
        <div className="bg-zinc-800 p-4 rounded">📊 Usuários ativos: 317</div>
      </div>
      <div className="mt-8 bg-zinc-900 p-6 rounded-xl">
        <h2 className="text-xl font-semibold mb-2">🦅 Radar da Águia – Análise de Mercado</h2>
        <div className="bg-red-600 text-white inline-block px-4 py-1 rounded-full font-bold">Tendência: SHORT</div>
        <p className="mt-4">Justificativa: possível tendência de baixa após rejeição em nível de resistência.</p>
        <ul className="mt-2 text-sm list-disc ml-6">
          <li>Volume vendedor aumentou 35%</li>
          <li>Sentimento caiu de 52 para 38</li>
          <li>Queda na dominância das altcoins</li>
        </ul>
      </div>
    </div>
  );
}
