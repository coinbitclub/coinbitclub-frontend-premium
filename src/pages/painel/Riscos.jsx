import React from "react";

export default function Riscos() {
  return (
    <div className="p-6 text-white max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Parâmetros de Risco</h1>
      <div className="bg-zinc-800 p-4 rounded mb-4">
        <h2 className="text-lg font-semibold text-cyan-400 mb-2">Padrão do Sistema</h2>
        <p>Alavancagem: 3x</p>
        <p>Capital por ordem: 5%</p>
        <p>Stop loss máximo: 10%</p>
      </div>
      <div className="bg-zinc-800 p-4 rounded">
        <h2 className="text-lg font-semibold text-yellow-400 mb-2">Seus Parâmetros</h2>
        <form className="space-y-4">
          <input className="w-full p-2 rounded bg-zinc-700" placeholder="Alavancagem" />
          <input className="w-full p-2 rounded bg-zinc-700" placeholder="Capital por ordem (%)" />
          <input className="w-full p-2 rounded bg-zinc-700" placeholder="Stop loss máximo (%)" />
          <button type="submit" className="w-full bg-yellow-500 text-black py-2 rounded font-semibold">Salvar Minhas Configurações</button>
        </form>
      </div>
    </div>
  );
}
