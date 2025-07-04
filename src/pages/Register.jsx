import React from "react";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-white">
      <div className="bg-zinc-800 p-8 rounded-xl shadow max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-yellow-400">Criar Conta</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Nome completo" className="w-full p-2 rounded bg-zinc-700" />
          <input type="email" placeholder="E-mail" className="w-full p-2 rounded bg-zinc-700" />
          <input type="password" placeholder="Senha" className="w-full p-2 rounded bg-zinc-700" />
          <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded font-semibold">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
