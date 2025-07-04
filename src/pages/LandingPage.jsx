import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen font-sans">
      <header className="px-6 py-4 flex justify-between items-center border-b border-zinc-800">
        <h1 className="text-2xl font-bold text-yellow-400">CoinbitClub MarketBot</h1>
        <div className="space-x-4">
          <Link to="/login" className="text-sm hover:underline">Login</Link>
          <Link to="/register" className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 text-sm font-medium">Cadastrar-se</Link>
        </div>
      </header>

      <main className="px-6 md:px-20 py-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">O robô de cripto que só <span className="text-yellow-400">lucra junto com você</span></h2>
        <p className="text-zinc-400 text-lg mb-6">Teste grátis por 7 dias: seu saldo sempre seguro na sua exchange.</p>
        <Link to="/register" className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold text-lg">Quero Testar Grátis</Link>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
          <div className="bg-zinc-800 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">🔒 Saldo Sempre Seguro</h3>
            <p className="text-zinc-400 text-sm">Seu dinheiro nunca sai da sua exchange. Total controle e transparência.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">🤖 IA 24/7 em Ação</h3>
            <p className="text-zinc-400 text-sm">Análise em tempo real com inteligência artificial de leitura de mercado.</p>
          </div>
          <div className="bg-zinc-800 p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-2">📈 Visualize Lucros em Tempo Real</h3>
            <p className="text-zinc-400 text-sm">Dashboard com tudo: operações, performance e estratégias da IA.</p>
          </div>
        </section>

        <section className="mt-20">
          <h3 className="text-2xl font-bold mb-6">4 Etapas do Setup Express</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-yellow-400 text-black rounded-lg py-4 px-2 font-semibold text-sm">📊 Leitura de Mercado</div>
            <div className="bg-red-500 text-white rounded-lg py-4 px-2 font-semibold text-sm">💎 Seleção de Ativos</div>
            <div className="bg-purple-600 text-white rounded-lg py-4 px-2 font-semibold text-sm">🤖 Escolha do Robô</div>
            <div className="bg-blue-600 text-white rounded-lg py-4 px-2 font-semibold text-sm">🛡️ Gestão de Riscos</div>
          </div>
        </section>

        <section className="mt-20 text-left">
          <h3 className="text-2xl font-bold mb-6 text-center">Perguntas Frequentes</h3>
          <div className="grid gap-4 max-w-2xl mx-auto">
            <details className="bg-zinc-800 rounded p-4">
              <summary className="cursor-pointer font-semibold">Como funciona?</summary>
              <p className="mt-2 text-sm text-zinc-400">Conectamos seu robô à sua exchange para operar de forma automatizada com IA e parâmetros de risco personalizados.</p>
            </details>
            <details className="bg-zinc-800 rounded p-4">
              <summary className="cursor-pointer font-semibold">É seguro?</summary>
              <p className="mt-2 text-sm text-zinc-400">Sim. Não temos acesso ao seu saldo. Utilizamos chaves com permissão apenas de leitura/operação, sem saques.</p>
            </details>
            <details className="bg-zinc-800 rounded p-4">
              <summary className="cursor-pointer font-semibold">Quais são as formas de pagamento?</summary>
              <p className="mt-2 text-sm text-zinc-400">Você pode usar cartão, PIX, ou saldo pré-pago conforme seu plano escolhido.</p>
            </details>
          </div>
        </section>
      </main>

      <footer className="text-center text-zinc-500 text-sm py-8 border-t border-zinc-800 mt-16">
        © 2025 CoinbitClub. Todos os direitos reservados. | <Link to="/termos" className="underline">Termos</Link> • <Link to="/termos" className="underline">Política de Privacidade</Link>
      </footer>
    </div>
  );
}
