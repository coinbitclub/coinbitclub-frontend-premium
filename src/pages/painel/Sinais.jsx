import React from 'react';

export default function Sinais() {
  const sinais = [
    { symbol: 'BTCUSDT', action: 'BUY', price: 30000 },
    { symbol: 'ETHUSDT', action: 'SELL', price: 2000 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-white">Sinais Ativos</h1>
      <ul className="space-y-2">
        {sinais.map((s, i) => (
          <li
            key={i}
            className="flex justify-between p-4 bg-gray-800 rounded shadow"
          >
            <span>{s.symbol}</span>
            <span className={s.action === 'BUY' ? 'text-green-400' : 'text-red-400'}>
              {s.action} a {s.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
