import type { Metadata } from 'next';
import HomePageClient from '@/components/HomePageClient';

export const metadata: Metadata = {
  title: 'IAAPC | Apoio a Pacientes com Câncer em Planaltina-DF',
  description:
    'Instituto Abraçar (IAAPC): acolhimento e suporte integral a pacientes com câncer e famílias em Planaltina-DF. Saiba como doar, voluntariar e ajudar.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'IAAPC | Apoio a Pacientes com Câncer em Planaltina-DF',
    description:
      'Conheça o IAAPC e veja como apoiar pacientes com câncer em Planaltina-DF por doação, voluntariado e parcerias.',
    url: 'https://iaapc.org.br/',
    type: 'website',
  },
};

export default function Home() {
  return <HomePageClient />;
}
