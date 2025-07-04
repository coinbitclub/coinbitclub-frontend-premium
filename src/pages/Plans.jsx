import React from "react";

export default function Plans() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-4">Escolha seu Plano</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-zinc-800 p-6 rounded text-center border border-zinc-600">
          <h2 className="text-xl font-bold text-cyan-400">Básico</h2>
          <p className="my-2 text-2xl font-semibold">R$50/mês</p>
          <ul className="text-sm mb-4">
            <li>✔️ Automação completa</li>
            <li>✔️ Operações ilimitadas</li>
            <li>✔️ Prioridade padrão</li>
          </ul>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black p-2 w-full rounded">Assinar</button>
        </div>
        <div className="bg-zinc-800 p-6 rounded text-center border-2 border-yellow-500">
          <h2 className="text-xl font-bold text-yellow-400">Padrão</h2>
          <p className="my-2 text-2xl font-semibold">R$100/mês</p>
          <ul className="text-sm mb-4">
            <li>✔️ Automação completa</li>
            <li>✔️ Operações ilimitadas</li>
            <li>✔️ Prioridade padrão</li>
          </ul>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black p-2 w-full rounded">Assinar</button>
        </div>
        <div className="bg-zinc-800 p-6 rounded text-center border border-yellow-400">
          <h2 className="text-xl font-bold text-yellow-400">VIP</h2>
          <p className="my-2 text-2xl font-semibold">R$200/mês</p>
          <ul className="text-sm mb-4">
            <li>✔️ Automação completa</li>
            <li>✔️ Operações ilimitadas</li>
            <li>✔️ Prioridade elevada</li>
          </ul>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black p-2 w-full rounded">Assinar</button>
        </div>
      </div>
    </div>
  );
}
