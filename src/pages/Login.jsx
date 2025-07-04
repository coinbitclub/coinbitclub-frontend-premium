import React from "react";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900 text-white">
      <div className="w-full max-w-md p-8 bg-zinc-800 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-6">Entrar</h1>
        <form className="space-y-4">
          <input className="w-full p-2 rounded bg-zinc-700" type="email" placeholder="E-mail" />
          <input className="w-full p-2 rounded bg-zinc-700" type="password" placeholder="Senha" />
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black p-2 rounded">Acessar</button>
        </form>
      </div>
    </div>
  );
}
