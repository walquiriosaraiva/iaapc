'use client';

import { FaInstagram } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import InstallPWA from '@/components/InstallPWA';
import LinkButton from '@/components/LinkButton';

export default function HomePageClient() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-rose-600 to-rose-700 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center font-bold text-rose-700">
              ♥
            </div>
            <div>
              <h1 className="font-bold text-xl">IAAPC</h1>
              <p className="text-xs text-rose-100">Instituto Abraçar</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#missao" className="hover:text-rose-100 transition">Sobre</a>
            <a href="#ajudar" className="hover:text-rose-100 transition">Como Ajudar</a>
            <a href="#contato" className="hover:text-rose-100 transition">Contato</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold">
            ✨ Transformando vidas com amor e cuidado
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Acolhimento e Esperança para <span className="text-rose-600">Quem Enfrenta o Câncer</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            O Instituto Abraçar oferece suporte integral, acompanhamento e esperança para pacientes com câncer e suas famílias. Juntos, somos mais fortes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkButton
              href="/doacao"
              className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 text-lg"
            >
              ❤️ Fazer Doação
            </LinkButton>
            <button className="bg-white border-2 border-rose-600 text-rose-600 hover:bg-rose-50 font-bold py-4 px-8 rounded-lg transition text-lg">
              📋 Ser Voluntário
            </button>
          </div>
        </div>
      </section>

      <section id="missao" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Quem Somos
              </h3>
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                O Instituto Abraçar de Apoio aos Portadores de Câncer é uma organização dedicada ao acolhimento integral de pacientes com câncer e suas famílias.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Acreditamos que ninguém deve enfrentar essa jornada sozinho. Somos um espaço de esperança, cuidado humanizado e suporte emocional.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">🤝</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Acolhimento Humanizado</h4>
                    <p className="text-gray-600">Tratamento com dignidade e respeito</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">💪</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Suporte Integral</h4>
                    <p className="text-gray-600">Apoio psicológico, social e espiritual</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl">✨</span>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Esperança e Fé</h4>
                    <p className="text-gray-600">Acreditamos na força da vida e no poder transformador da esperança</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-rose-200 to-pink-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <p className="text-6xl mb-4">❤️</p>
                <p className="text-gray-700 font-semibold">Abraçando vidas, salvando esperanças</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Nosso Impacto
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-4xl font-bold text-rose-600 mb-2">500+</p>
              <p className="text-gray-700 font-semibold">Pacientes Acolhidos</p>
              <p className="text-gray-600 text-sm mt-2">Anualmente recebemos e acompanhamos centenas de pessoas</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-4xl font-bold text-rose-600 mb-2">150+</p>
              <p className="text-gray-700 font-semibold">Voluntários Ativos</p>
              <p className="text-gray-600 text-sm mt-2">Dedicados a fazer a diferença todos os dias</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <p className="text-4xl font-bold text-rose-600 mb-2">24/7</p>
              <p className="text-gray-700 font-semibold">Suporte Disponível</p>
              <p className="text-gray-600 text-sm mt-2">Sempre aqui quando você mais precisa</p>
            </div>
          </div>
        </div>
      </section>

      <section id="ajudar" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">
            Como Você Pode Ajudar
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-rose-200 rounded-lg p-8 hover:shadow-lg hover:border-rose-400 transition">
              <div className="text-5xl mb-4">💝</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Fazer Doação</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Sua contribuição ajuda a manter nossos programas, atender pacientes e fornecer suporte integral.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                <li>✓ Toda doação é dedutível</li>
                <li>✓ Receba comprovante oficialmente</li>
                <li>✓ 100% destinado ao instituto</li>
              </ul>
              <LinkButton
                href="/doacao"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-lg transition"
              >
                Doar Agora
              </LinkButton>
            </div>

            <div className="border-2 border-rose-200 rounded-lg p-8 hover:shadow-lg hover:border-rose-400 transition">
              <div className="text-5xl mb-4">🤲</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Ser Voluntário</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Compartilhe seu tempo e amor com quem mais precisa. Sua presença faz toda diferença.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                <li>✓ Sem exigência de experiência</li>
                <li>✓ Treinamento oferecido</li>
                <li>✓ Escolha seus horários</li>
              </ul>
              <button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-lg transition">
                Quero Voluntariar
              </button>
            </div>

            <div className="border-2 border-rose-200 rounded-lg p-8 hover:shadow-lg hover:border-rose-400 transition">
              <div className="text-5xl mb-4">🤝</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Parcerias</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Empresas e instituições podem se unir a nós em projetos e iniciativas especiais. Seja nosso parceiro!
              </p>
              <ul className="space-y-2 mb-6 text-sm text-gray-600">
                <li>✓ Visibilidade de marca</li>
                <li>✓ Projetos customizados</li>
                <li>✓ Impacto social comprovado</li>
              </ul>
              <button className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-3 rounded-lg transition">
                Conversar Conosco
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Fale Conosco
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            Tem dúvidas ou quer conhecer melhor nosso trabalho? Entre em contato!
          </p>
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-semibold text-gray-900">(61) 99402-2238</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="font-semibold text-gray-900">secretaria@iaapc.org.br</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold text-gray-900">Planaltina-DF</p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex justify-center gap-6">
            <a href="#" className="text-rose-600 hover:text-rose-700 text-2xl transition">👍</a>
            <a href="https://www.instagram.com/institutoiaapc" target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
              <FaInstagram size={28} color="#E1306C" />
            </a>
            <a href="#" className="transition hover:scale-110">
              <FaX size={28} color="#070000b3" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">© 2025 Instituto Abraçar de Apoio aos Portadores de Câncer - IAAPC</p>
          <p className="text-gray-400 text-sm">Acolhimento, Esperança e Amor para Quem Mais Precisa</p>
        </div>
      </footer>

      <InstallPWA />
    </div>
  );
}
