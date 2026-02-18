import LinkButton from '@/components/LinkButton';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-rose-100 text-3xl mb-4">
          ?
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Pagina nao encontrada</h1>
        <p className="text-gray-600 mt-2">A pagina que voce tentou acessar nao existe.</p>
        <div className="mt-8">
          <LinkButton
            href="/"
            className="inline-flex items-center justify-center bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 px-8 rounded-lg transition"
          >
            Voltar para o inicio
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
