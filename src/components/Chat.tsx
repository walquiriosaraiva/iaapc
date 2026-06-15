'use client';

import { useState, useRef, useEffect } from 'react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const MAX_MESSAGES_IN_HISTORY = 8;
const MAX_INPUT_CHARS = 500;
const MAX_TOKENS_RESPONSE = 250;
const MODEL = 'claude-haiku-4-5-20251001';

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Olá! Sou o assistente virtual do Instituto Abraçar. Posso ajudar com dúvidas sobre doações, voluntariado ou nosso trabalho. Como posso ajudar?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const userMessage: Message = { role: 'user', content: text };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput('');
    setLoading(true);

    const limitedHistory = newMessages.slice(-MAX_MESSAGES_IN_HISTORY);

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY || '',
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: MAX_TOKENS_RESPONSE,
          system:
            'Você é o assistente virtual do Instituto Abraçar de Apoio aos Portadores de Câncer (IAAPC). Responda de forma acolhedora, breve e direta, ajudando com dúvidas sobre doações, voluntariado, parcerias e o trabalho do instituto.',
          messages: limitedHistory.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      const reply = data.content?.map((c: any) => c.text || '').join('') || 'Desculpe, não consegui responder agora.';

      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Ocorreu um erro ao conectar com o assistente. Tente novamente em breve.' },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') sendMessage();
  }

  return (
    <section id="chat" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 text-center">
          Fale com Nosso Assistente
        </h3>
        <p className="text-gray-600 text-center mb-8">
          Tire suas dúvidas sobre o instituto, doações e voluntariado
        </p>

        <div className="border-2 border-rose-200 rounded-lg shadow-md flex flex-col h-[450px] overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-rose-50">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-lg text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-rose-600 text-white rounded-br-none'
                      : 'bg-white text-gray-800 border border-rose-200 rounded-bl-none'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-500 border border-rose-200 px-4 py-2 rounded-lg rounded-bl-none text-sm">
                  Digitando...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="border-t border-rose-200 p-3 flex gap-2 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              maxLength={MAX_INPUT_CHARS}
              placeholder="Digite sua mensagem..."
              disabled={loading}
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 disabled:opacity-50"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              className="bg-rose-600 hover:bg-rose-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold px-5 py-2 rounded-lg transition text-sm"
            >
              Enviar
            </button>
          </div>
          <div className="text-right text-xs text-gray-400 px-3 pb-1 bg-white">
            {input.length}/{MAX_INPUT_CHARS}
          </div>
        </div>
      </div>
    </section>
  );
}