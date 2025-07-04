import React from "react";

export default function Dashboard() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">Dashboard do Usuário</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="bg-zinc-800 p-4 rounded-xl">✅ Índice de Acertos: <span className="text-green-400 font-bold">83%</span></div>
        <div className="bg-zinc-800 p-4 rounded-xl">📈 Retorno do Dia: <span className="text-green-400 font-bold">+2.4%</span></div>
        <div className="bg-zinc-800 p-4 rounded-xl">📊 Retorno Histórico: <span className="text-yellow-400 font-bold">+87.6%</span></div>
        <div className="bg-zinc-800 p-4 rounded-xl">💰 Saldo na Exchange: <span className="text-cyan-400 font-bold">R$ 3.450,00</span></div>
        <div className="bg-zinc-800 p-4 rounded-xl">💳 Saldo Pré-Pago: <span className="text-cyan-400 font-bold">R$ 187,00</span></div>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl shadow mb-10">
        <h2 className="text-xl font-bold text-yellow-300 mb-2">🧠 Leitura da IA</h2>
        <div className="bg-red-600 text-white px-4 py-2 inline-block rounded-full font-semibold">Tendência: SHORT</div>
        <p className="mt-4 text-sm text-zinc-300">Motivo: volume vendedor elevado nas últimas horas após rejeição de resistência em BTC e queda de altcoins.</p>
        <ul className="text-sm text-zinc-400 mt-2 list-disc ml-6">
          <li>Volume vendedor +34%</li>
          <li>Sentimento caiu de 58 para 43</li>
          <li>BTC perdeu suporte de 4h</li>
        </ul>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold text-yellow-300 mb-2">🦅 Relatório da Águia</h2>
        <p className="text-sm text-zinc-300 leading-relaxed">
          Cenário macroeconômico ainda sensível a dados de inflação nos EUA. O mercado cripto segue correlacionado ao Nasdaq, com destaque para tokens de infraestrutura. Evite exposição máxima e preserve capital no intraday.
        </p>
      </div>
    </div>
  );
}
