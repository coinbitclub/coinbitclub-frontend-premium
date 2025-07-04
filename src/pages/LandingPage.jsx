import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#050C23] to-[#0A1123] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-[#0F141D] rounded-2xl p-8 shadow-2xl">
        {/* Header */}
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-bold text-yellow-400">MarketBot</h1>
          <nav className="space-x-6">
            <Link to="/como-funciona" className="text-gray-300 hover:text-white">
              Como Funciona
            </Link>
            <Link to="/login" className="text-gray-300 hover:text-white">
              Login
            </Link>
            <Link to="/register" className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500">
              Cadastrar-se
            </Link>
          </nav>
        </header>

        {/* Hero */}
        <section className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            O robô de <span className="text-yellow-400">IA</span> que só <span className="text-yellow-400">lucra</span> junto com você
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            Teste grátis 7 dias: seu <strong>saldo sempre seguro</strong> na sua exchange.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500"
            >
              Quero Testar Grátis
            </Link>
            <Link to="/como-funciona" className="text-gray-300 hover:text-white flex items-center gap-1">
              🔧 Como Funciona o MarketBot
            </Link>
          </div>
        </section>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'Saldo Sempre Seguro', desc: 'Seu dinheiro nunca sai da exchange. Total controle e transparência.' },
            { title: 'IA 24/7 em Ação', desc: 'Análise em tempo real com inteligência artificial de leitura de mercado.' },
            { title: 'Visualize Lucros em Tempo Real', desc: 'Dashboard com operações, performance e estratégias da IA.' }
          ].map((f, i) => (
            <div key={i} className="bg-[#1E293B] p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-white mb-2">🔒 {f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </section>

        {/* Steps */}
        <section className="text-center mb-16">
          <h4 className="text-2xl font-bold text-white mb-6">🚀 4 Etapas Expressas para Lucro Dólar</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="bg-yellow-400 text-black py-4 rounded-lg font-medium">📊 Leitura de Mercado</button>
            <button className="bg-red-500 text-white py-4 rounded-lg font-medium">💎 Seleção de Ativos</button>
            <button className="bg-purple-600 text-white py-4 rounded-lg font-medium">🤖 Escolha do Robô</button>
            <button className="bg-blue-600 text-white py-4 rounded-lg font-medium">🛡️ Gestão de Riscos</button>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h5 className="text-xl font-semibold text-white mb-4 text-center">Perguntas Frequentes</h5>
          <div className="space-y-2">
            {/* Aqui você pode integrar Accordion de FAQ */}
            <details className="bg-[#1E293B] p-4 rounded-lg">
              <summary className="text-white cursor-pointer">Como funciona?</summary>
              <p className="mt-2 text-gray-400 text-sm">Explicação breve de como funciona.</p>
            </details>
            <details className="bg-[#1E293B] p-4 rounded-lg">
              <summary className="text-white cursor-pointer">É seguro?</summary>
              <p className="mt-2 text-gray-400 text-sm">Detalhes sobre segurança da plataforma.</p>
            </details>
            {/* Adicione mais FAQs conforme necessário */}
          </div>
        </section>
      </div>
    </div>
  );
}
