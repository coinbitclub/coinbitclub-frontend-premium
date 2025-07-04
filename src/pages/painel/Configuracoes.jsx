import React, { useState } from 'react';

export default function Configuracoes() {
  const [apiKey, setApiKey] = useState('');
  const [secret, setSecret] = useState('');

  const save = () => {
    // salva no backend
    alert('Chaves salvas!');
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-white">Configurações de API</h1>
      <div className="space-y-4 max-w-md">
        <div>
          <label className="block text-gray-300">API Key</label>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full p-2 mt-1 bg-gray-800 rounded"
          />
        </div>
        <div>
          <label className="block text-gray-300">Secret</label>
          <input
            type="text"
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            className="w-full p-2 mt-1 bg-gray-800 rounded"
          />
        </div>
        <button
          onClick={save}
          className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500"
        >
          Salvar
        </button>
      </div>
    </div>
  );
}
