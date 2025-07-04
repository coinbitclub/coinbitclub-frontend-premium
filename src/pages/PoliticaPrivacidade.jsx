import React from "react";

export default function PoliticaPrivacidade() {
  return (
    <div className="bg-zinc-900 text-white px-6 py-10 max-w-4xl mx-auto leading-relaxed text-sm">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">?? Pol�tica de Privacidade � MarketBot</h1>
      <p><strong>�ltima atualiza��o:</strong> 04 de julho de 2025</p>
      <ul className="list-disc ml-6 mt-4">
        <li><strong>1. Informa��es Coletadas</strong><br />
          � Dados pessoais: Nome, e-mail, telefone, pa�s, IP e demais dados de cadastro.<br />
          � Dados operacionais: Logs de atividades, resultados de opera��es e saldo.<br />
          � Cookies: Para an�lise de uso e otimiza��o da experi�ncia.
        </li>
        <li className="mt-4"><strong>2. Uso das Informa��es</strong><br />
          � Para executar os servi�os contratados.<br />
          � Para envio de avisos sobre saldo, planos, alertas ou atualiza��es.<br />
          � Para a��es de suporte e relacionamento.
        </li>
        <li className="mt-4"><strong>3. Compartilhamento de Dados</strong><br />
          � Nunca vendemos seus dados.<br />
          � Compartilhamos apenas com servi�os essenciais (pagamento, notifica��es, autentica��o).
        </li>
        <li className="mt-4"><strong>4. Armazenamento e Seguran�a</strong><br />
          � Utilizamos criptografia e servidores seguros.<br />
          � As chaves de API s�o criptografadas e n�o acessadas manualmente.
        </li>
        <li className="mt-4"><strong>5. Direitos do Usu�rio</strong><br />
          Voc� pode:<br />
          � Solicitar acesso, altera��o ou exclus�o dos seus dados.<br />
          � Cancelar sua conta a qualquer momento.<br />
          � Solicitar reembolso do saldo pr�-pago n�o utilizado.
        </li>
      </ul>
      <h2 className="text-xl text-yellow-300 mt-6 mb-2">?? Contato</h2>
      <p>E-mail: faleconosco@coinbitclub.vip<br />WhatsApp: +55 21 99596-6652</p>
    </div>
  );
}
