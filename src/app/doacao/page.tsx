import Image from 'next/image';
import LinkButton from '@/components/LinkButton';

export default function DoacaoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 px-4 sm:px-6 lg:px-8 py-16">
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
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Chave Pix</h2>
            <p className="text-gray-700 break-all">64.484.690/0001-84</p>
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
