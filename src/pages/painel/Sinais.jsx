import React from "react";

export default function Sinais() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">Sinais Recebidos</h1>
      <table className="w-full text-sm text-left bg-zinc-800 rounded">
        <thead className="text-zinc-300 border-b border-zinc-700">
          <tr>
            <th className="p-3">Data/Hora</th>
            <th className="p-3">Origem</th>
            <th className="p-3">Par</th>
            <th className="p-3">Direção</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-3">04/07 10:40</td>
            <td className="p-3">TradingView</td>
            <td className="p-3">BTC/USDT</td>
            <td className="p-3 text-green-400">LONG</td>
          </tr>
          <tr>
            <td className="p-3">04/07 10:35</td>
            <td className="p-3">CoinStats</td>
            <td className="p-3">ETH/USDT</td>
            <td className="p-3 text-red-400">SHORT</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
