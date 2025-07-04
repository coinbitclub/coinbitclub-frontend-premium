import React from "react";

export default function Extrato() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold text-yellow-400 mb-4">Extrato Financeiro</h1>
      <table className="w-full text-sm text-left bg-zinc-800 rounded">
        <thead className="text-zinc-300 border-b border-zinc-700">
          <tr>
            <th className="p-3">Data</th>
            <th className="p-3">Tipo</th>
            <th className="p-3">Valor</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-zinc-700">
            <td className="p-3">04/07/2025</td>
            <td className="p-3">Comissão</td>
            <td className="p-3">R$ 90,00</td>
            <td className="p-3 text-green-400">Confirmado</td>
          </tr>
          <tr>
            <td className="p-3">03/07/2025</td>
            <td className="p-3">Saque</td>
            <td className="p-3">R$ 200,00</td>
            <td className="p-3 text-yellow-400">Pendente</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
