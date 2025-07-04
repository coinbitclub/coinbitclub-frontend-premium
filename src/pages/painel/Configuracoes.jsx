import React from "react";

export default function Configuracoes() {
  return (
    <div className="p-6 text-white space-y-8">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">Minhas Configurações</h1>

      <div className="grid md:grid-cols-2 gap-4">
        <input placeholder="Nome completo" className="bg-zinc-700 p-2 rounded" />
        <input placeholder="E-mail" className="bg-zinc-700 p-2 rounded" />
        <input placeholder="Telefone" className="bg-zinc-700 p-2 rounded" />
        <input placeholder="País" className="bg-zinc-700 p-2 rounded" />
      </div>

      <div className="bg-zinc-800 p-4 rounded space-y-4">
        <h2 className="text-lg font-bold text-yellow-400">Dados Bancários / PIX</h2>
        <input placeholder="Chave PIX" className="w-full p-2 rounded bg-zinc-700" />
        <input placeholder="Banco" className="w-full p-2 rounded bg-zinc-700" />
        <input placeholder="Conta" className="w-full p-2 rounded bg-zinc-700" />
      </div>

      <div className="bg-zinc-800 p-4 rounded space-y-4">
        <h2 className="text-lg font-bold text-yellow-400">Chaves API - Exchanges</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input placeholder="Bybit Testnet - API Key" className="p-2 rounded bg-zinc-700" />
          <input placeholder="Bybit Testnet - Secret" className="p-2 rounded bg-zinc-700" />
          <input placeholder="Binance Testnet - API Key" className="p-2 rounded bg-zinc-700" />
          <input placeholder="Binance Produção - API Key" className="p-2 rounded bg-zinc-700" />
        </div>
      </div>
    </div>
  );
}
