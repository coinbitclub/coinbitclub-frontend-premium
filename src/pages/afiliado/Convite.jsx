import React from 'react';

export default function AffiliateConvite() {
  const link = `${window.location.origin}/register?ref=MEU_CODIGO`;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-white">Link de Convite</h1>
      <div className="mt-4 flex items-center gap-2">
        <input
          type="text"
          readOnly
          value={link}
          className="flex-1 bg-gray-800 text-gray-200 p-2 rounded"
        />
        <button
          onClick={() => navigator.clipboard.writeText(link)}
          className="px-4 py-2 bg-yellow-400 rounded hover:bg-yellow-500"
        >
          Copiar
        </button>
      </div>
    </div>
  );
}
