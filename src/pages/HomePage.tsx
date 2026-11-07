import React from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { FightsVideo } from '../components/FightsVideo';
import { Hero } from '../components/Hero';

// Enlaces antiguos de una sola página (historycombat.cl/#legal lo usa el juego): se llevan a su página nueva.
const LEGACY: Record<string, string> = {
  '#historia': '/historia',
  '#el-nexo': '/historia',
  '#plantel': '/plantel',
  '#como-jugar': '/como-jugar',
  '#modos': '/modos',
  '#descargar': '/descargar',
  '#faq': '/faq',
  '#peleas': '/',
};

const LINKS: [string, string, string][] = [
  ['/ranking', 'Ranking online', 'Mira quién lidera la temporada y busca a cualquier jugador.'],
  ['/historia', 'La historia', 'El Nexo abrió una grieta en el tiempo. Conoce a sus cuatro frentes.'],
  ['/plantel', 'El plantel', 'Más de 50 luchadores históricos, con su época y su rol.'],
  ['/entrar', 'Tu cuenta', 'Entra para ver tus partidas, logros y progreso desde la web.'],
];

export const HomePage: React.FC = () => {
  const { hash } = useLocation();
  if (hash.startsWith('#legal')) return <Navigate to={`/legal${hash}`} replace />;
  if (LEGACY[hash]) return <Navigate to={LEGACY[hash]} replace />;

  return (
    <>
      <Hero />
      <FightsVideo />
      <section className="py-12 md:py-16 bg-[#0e141d] border-b border-[#1c2836]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LINKS.map(([to, title, text]) => (
            <Link
              key={to}
              to={to}
              className="p-5 rounded-lg border border-[#1e2d3e] bg-[#101722] hover:border-amber-500/60 hover:bg-[#16212e] transition-colors"
            >
              <div className="font-display font-bold text-neutral-100 mb-1">{title} →</div>
              <p className="text-xs text-neutral-400 leading-relaxed">{text}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
