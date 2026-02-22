import type { Metadata } from 'next';
import DoacaoPageClient from '@/components/DoacaoPageClient';

export const metadata: Metadata = {
  title: 'Doação via Pix | IAAPC',
  description:
    'Faça sua doação via Pix para o IAAPC e ajude no acolhimento de pacientes com câncer e suas famílias. Chave Pix CNPJ com cópia rápida e QR Code.',
  alternates: {
    canonical: '/doacao',
  },
  openGraph: {
    title: 'Doação via Pix | IAAPC',
    description:
      'Contribua com o IAAPC por Pix e fortaleça o suporte a pacientes com câncer em Planaltina-DF.',
    url: 'https://iaapc.org.br/doacao',
    type: 'website',
  },
};

export default function DoacaoPage() {
  return <DoacaoPageClient />;
}
