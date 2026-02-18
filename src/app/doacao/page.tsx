"use client";

import Image from 'next/image';
import { useState } from 'react';
import LinkButton from '@/components/LinkButton';

export default function DoacaoPage() {
  const pixKey = '64.484.690/0001-84';
  const [toast, setToast] = useState<{ show: boolean; message: string; isError: boolean }>({
    show: false,
    message: '',
    isError: false,
  });

  const exibirToast = (message: string, isError = false) => {
    setToast({ show: true, message, isError });
    setTimeout(() => {
      setToast((current) => ({ ...current, show: false }));
    }, 2200);
  };

  const copiarChavePix = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      exibirToast('Chave Pix copiada com sucesso!');
    } catch {
      exibirToast('Não foi possível copiar. Tente novamente.', true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 px-4 sm:px-6 lg:px-8 py-16">
      {toast.show && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-4">
          <div
            className={`rounded-lg px-4 py-3 text-sm font-semibold shadow-lg ${
              toast.isError ? 'bg-red-600 text-white' : 'bg-rose-600 text-white'
            }`}
            role="status"
            aria-live="polite"
          >
            {toast.message}
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 text-3xl mb-4">
            ❤️
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Doação via Pix</h1>
          <p className="text-gray-600 mt-2">
            Sua contribuição ajuda a manter nossos programas e o suporte aos pacientes.
          </p>
        </div>

        <div className="space-y-6">
          <div className="border border-rose-200 rounded-xl p-6 bg-rose-50">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-semibold text-gray-900">Chave Pix</h2>
              <span className="inline-flex items-center gap-1 text-sm text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                Clique no botão para copiar o CNPJ para a área de transferência
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <p className="text-gray-700 break-all">{pixKey}</p>
              <button
                type="button"
                onClick={copiarChavePix}
                aria-label="Copiar chave Pix"
                title="Copiar chave Pix"
                className="w-fit inline-flex items-center justify-center bg-rose-600 hover:bg-rose-700 text-white p-2 rounded-lg transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2">Tipo: CNPJ</p>
          </div>

          <div className="border border-rose-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">QR Code Pix</h2>
            <div className="flex justify-center">
              <Image
                src="/qr-code-pix.jpg"
                alt="QR Code Pix do IAAPC"
                width={260}
                height={260}
                className="rounded-lg border border-rose-100"
              />
            </div>
          </div>

          <div className="border border-rose-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Nome do favorecido</h2>
            <p className="text-gray-700">Instituto Abracar de Apoio aos Portadores de Câncer - IAAPC</p>
          </div>

          <div className="border border-rose-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Passo a passo</h2>
            <ol className="list-decimal list-inside text-gray-700 space-y-1">
              <li>Abra o app do seu banco e escolha a opção Pix.</li>
              <li>Copie e cole a chave acima ou use o QR Code.</li>
              <li>Confirme os dados do favorecido e finalize.</li>
            </ol>
          </div>

          <div className="border border-rose-200 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Precisa de comprovante?</h2>
            <p className="text-gray-700">
              Envie o comprovante para secretaria@iaapc.com.br para receber seu recibo.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <LinkButton
            href="/"
            className="inline-flex items-center justify-center bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Voltar para o início
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
