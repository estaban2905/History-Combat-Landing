import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { playArcadeSound } from '../utils/audio';
import { Portrait } from './ui';

const NAV: [string, string][] = [
  ['/historia', 'Historia'],
  ['/plantel', 'Plantel'],
  ['/como-jugar', 'Cómo jugar'],
  ['/modos', 'Modos'],
  ['/ranking', 'Ranking'],
  ['/descargar', 'Descargar'],
  ['/faq', 'Preguntas'],
];

export const Header: React.FC = () => {
  const { player, loading } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-[#0e141d]/95 backdrop-blur-md border-b border-[#1c2836]">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-2 px-4 sm:px-6 py-3">
        <Link
          to="/"
          onClick={() => playArcadeSound('coin')}
          className="font-display font-black text-base sm:text-lg tracking-tight text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
        >
          HISTORY COMBAT
        </Link>

        {/* Navegación (en móvil se desliza horizontalmente) */}
        <nav className="order-3 w-full md:order-none md:w-auto flex items-center gap-5 md:gap-6 overflow-x-auto text-xs sm:text-sm font-medium pb-0.5">
          {NAV.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `whitespace-nowrap shrink-0 transition-colors underline-offset-8 hover:underline hover:text-amber-400 ${
                  isActive ? 'text-amber-400 underline' : 'text-neutral-300'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          {player ? (
            <Link
              to="/cuenta"
              className="flex items-center gap-2 py-1 pl-1 pr-3 rounded border border-[#2a3f5a] bg-[#101722] hover:bg-[#1a2636] text-xs text-neutral-200"
            >
              <Portrait id={player.avatar} size={24} />
              <span className="max-w-[7rem] truncate font-semibold">{player.username}</span>
            </Link>
          ) : (
            !loading && (
              <Link
                to="/entrar"
                className="py-2 px-3 rounded border border-[#2a3f5a] bg-[#101722] hover:bg-[#1a2636] text-xs font-display font-semibold text-neutral-200"
              >
                Entrar
              </Link>
            )
          )}
          <Link
            to="/descargar"
            onClick={() => playArcadeSound('punch')}
            className="py-2 px-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-display font-bold text-xs rounded transition-all active:scale-[0.98] shadow-sm whitespace-nowrap"
          >
            Descargar gratis
          </Link>
        </div>
      </div>
    </header>
  );
};
