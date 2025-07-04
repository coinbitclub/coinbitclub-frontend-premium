import React, { useEffect, useState } from 'react';

export default function AdminFinanceiro() {
  const [metrics, setMetrics] = useState({
    receitaMensal: 0,
    assinaturasAtivas: 0,
    pagamentosPendentes: 0,
  });
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    // TODO: substituir URLs pelos endpoints reais do backend
    fetch('/api/financeiro/metrics')
      .then(res => res.json())
      .then(data => setMetrics(data))
      .catch(err => console.error('Erro ao carregar métricas:', err));

    fetch('/api/financeiro/transacoes')
      .then(res => res.json())
      .then(data => setTransacoes(data))
      .catch(err => console.error('Erro ao carregar transações:', err));
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Financeiro</h1>

      {/* Métricas principais */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <p className="text-sm text-gray-400">Receita Mensal</p>
          <p className="mt-2 text-2xl font-semibold text-green-400">
            R$ {metrics.receitaMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <p className="text-sm text-gray-400">Assinaturas Ativas</p>
          <p className="mt-2 text-2xl font-semibold text-yellow-400">
            {metrics.assinaturasAtivas}
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow">
          <p className="text-sm text-gray-400">Pagamentos Pendentes</p>
          <p className="mt-2 text-2xl font-semibold text-red-400">
            {metrics.pagamentosPendentes}
          </p>
        </div>
      </div>

      {/* Lista de Transações */}
      <div className="bg-gray-800 p-4 rounded-lg shadow overflow-auto">
        <h2 className="text-xl font-semibold text-white mb-4">Últimas Transações</h2>
        <table className="min-w-full table-auto text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="px-4 py-2 text-gray-400">ID</th>
              <th className="px-4 py-2 text-gray-400">Data</th>
              <th className="px-4 py-2 text-gray-400">Usuário</th>
              <th className="px-4 py-2 text-gray-400">Valor</th>
              <th className="px-4 py-2 text-gray-400">Status</th>
            </tr>
          </thead>
          <tbody>
            {transacoes.map(tx => (
              <tr key={tx.id} className="hover:bg-gray-700">
                <td className="px-4 py-2 text-gray-200">{tx.id}</td>
                <td className="px-4 py-2 text-gray-200">{new Date(tx.data).toLocaleDateString()}</td>
                <td className="px-4 py-2 text-gray-200">{tx.usuario}</td>
                <td className={`px-4 py-2 font-medium ${tx.valor >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  R$ {tx.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </td>
                <td className="px-4 py-2 text-gray-200">{tx.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
