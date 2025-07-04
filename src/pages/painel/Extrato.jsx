import React from 'react';

export default function Extrato() {
  const entries = [
    { date: '2025-07-01', type: 'Compra', amount: '+0.005 BTC' },
    { date: '2025-07-02', type: 'Venda',  amount: '-0.002 BTC' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-white">Extrato de Operações</h1>
      <table className="w-full text-left text-gray-300">
        <thead className="border-b border-gray-700">
          <tr>
            <th className="p-2">Data</th>
            <th className="p-2">Tipo</th>
            <th className="p-2">Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((e, i) => (
            <tr key={i} className="border-b border-gray-800">
              <td className="p-2">{e.date}</td>
              <td className="p-2">{e.type}</td>
              <td className="p-2">{e.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
