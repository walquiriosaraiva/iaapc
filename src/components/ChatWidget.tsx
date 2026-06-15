'use client';

import { useEffect, useRef, useState } from 'react';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const CHAT_API_URL = process.env.NEXT_PUBLIC_CHAT_API_URL?.replace(/\/$/, '');

const INITIAL_MESSAGE: ChatMessage = {
  role: 'assistant',
  content:
    'Olá! Sou o assistente virtual do Instituto Abraçar. Posso ajudar com informações sobre o instituto, atendimento e formas de apoio.',
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage || isLoading) {
      return;
    }

    if (!CHAT_API_URL) {
      setMessages((current) => [
        ...current,
        { role: 'user', content: trimmedMessage },
        {
          role: 'assistant',
          content:
            'O chat está indisponível no momento porque a URL da API ainda não foi configurada no deploy.',
        },
      ]);
      setMessage('');
      return;
    }

    const nextUserMessage: ChatMessage = { role: 'user', content: trimmedMessage };
    const nextHistory = [...messages, nextUserMessage];

    setMessages(nextHistory);
    setMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(`${CHAT_API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: trimmedMessage,
          history: nextHistory,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao consultar o chat.');
      }

      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content: data.answer || 'Não consegui gerar uma resposta agora.',
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: 'assistant',
          content:
            'Não consegui responder agora. Tente novamente em instantes ou fale com a equipe do instituto.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
      {isOpen ? (
        <div className="flex h-[32rem] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[1.5rem] border border-rose-200 bg-white shadow-2xl shadow-rose-200/50">
          <div className="flex items-center justify-between bg-gradient-to-r from-rose-600 to-rose-700 px-5 py-4 text-white">
            <div>
              <p className="text-sm font-semibold">Atendimento IAAPC</p>
              <p className="text-xs text-rose-100">Informações institucionais e acolhimento inicial</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-white/15 px-3 py-1 text-sm font-medium hover:bg-white/25"
            >
              Fechar
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-gradient-to-b from-rose-50 via-white to-rose-50 px-4 py-4">
            {messages.map((item, index) => (
              <div
                key={`${item.role}-${index}`}
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                  item.role === 'user'
                    ? 'ml-auto bg-rose-600 text-white'
                    : 'bg-white text-gray-700 border border-rose-100'
                }`}
              >
                {item.content}
              </div>
            ))}

            {isLoading && (
              <div className="max-w-[85%] rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm text-gray-500 shadow-sm">
                Digitando...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="border-t border-rose-100 bg-white p-3">
            <div className="flex items-end gap-2 rounded-2xl border border-rose-200 bg-rose-50 p-2">
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Digite sua mensagem"
                rows={2}
                disabled={isLoading}
                className="max-h-28 min-h-[2.75rem] flex-1 resize-none bg-transparent px-2 py-1 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />
              <button
                type="submit"
                disabled={isLoading || !message.trim()}
                className="rounded-xl bg-rose-600 px-4 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-rose-300"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="rounded-full bg-rose-600 px-5 py-4 text-sm font-semibold text-white shadow-lg shadow-rose-300 transition hover:bg-rose-700"
        >
          Falar com o assistente
        </button>
      )}
    </div>
  );
}