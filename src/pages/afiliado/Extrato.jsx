import React, { useEffect, useState } from 'react';

export default function AffiliateExtrato() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    fetch('/api/afiliado/extrato')
      .then(res => res.json())
      .then(setEntries)
      .catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white">Extrato de Comissões</h1>
      <ul className="mt-4 space-y-2">
        {entries.map((e, i) => (
          <li key={i} className="bg-gray-800 p-3 rounded">
            <span className="text-gray-200">{e.data}</span>:{' '}
            <span className="text-green-400">R$ {e.valor}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
