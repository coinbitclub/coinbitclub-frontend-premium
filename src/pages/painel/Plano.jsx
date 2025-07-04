import React from "react";

export default function Plano() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">Meu Plano</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-800 p-6 rounded-xl border border-cyan-400">
          <h2 className="text-xl font-bold text-cyan-400 mb-2">Básico</h2>
          <p>R$50/mês</p>
          <ul className="text-sm text-zinc-300 mt-2">
            <li>✔️ Automação completa</li>
            <li>✔️ Operações ilimitadas</li>
            <li>✔️ Prioridade padrão</li>
          </ul>
        </div>
        <div className="bg-zinc-800 p-6 rounded-xl border-2 border-yellow-500">
          <h2 className="text-xl font-bold text-yellow-400 mb-2">Padrão (Atual)</h2>
          <p>R$100/mês</p>
          <ul className="text-sm text-zinc-300 mt-2">
            <li>✔️ Automação completa</li>
            <li>✔️ Operações ilimitadas</li>
            <li>✔️ Prioridade padrão</li>
          </ul>
        </div>
        <div className="bg-zinc-800 p-6 rounded-xl border border-yellow-500">
          <h2 className="text-xl font-bold text-yellow-400 mb-2">VIP</h2>
          <p>R$200/mês</p>
          <ul className="text-sm text-zinc-300 mt-2">
            <li>✔️ Automação completa</li>
            <li>✔️ Operações ilimitadas</li>
            <li>✔️ Prioridade elevada</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
