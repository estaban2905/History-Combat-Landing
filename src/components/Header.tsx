import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Volume2, VolumeX, X } from 'lucide-react';
import { useAuth } from '../auth/AuthContext';
import { playArcadeSound, setMuted, useMuted } from '../utils/audio';
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
  const muted = useMuted();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // El menú móvil se cierra al cambiar de página o al pulsar Esc.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `whitespace-nowrap transition-colors underline-offset-8 hover:underline hover:text-amber-400 ${
      isActive ? 'text-amber-400 underline' : 'text-neutral-300'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[#0e141d]/95 backdrop-blur-md border-b border-[#1c2836]">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-3">
        <Link
          to="/"
          onClick={() => playArcadeSound('coin')}
          className="flex items-center gap-2 min-w-0 font-display font-black text-sm min-[380px]:text-base sm:text-lg tracking-tight text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0"
        >
          <img src="/favicon.svg" alt="" width={28} height={28} className="rounded-sm shrink-0 w-6 h-6 sm:w-7 sm:h-7" style={{ imageRendering: 'pixelated' }} />
          <span className="max-[359px]:hidden truncate">HISTORY COMBAT</span>
        </Link>

        {/* Navegación de escritorio */}
        <nav aria-label="Principal" className="hidden xl:flex items-center gap-6 text-sm font-medium">
          {NAV.map(([to, label]) => (
            <NavLink key={to} to={to} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setMuted(!muted)}
            aria-pressed={!muted}
            aria-label={muted ? 'Activar sonidos de la página' : 'Silenciar sonidos de la página'}
            title={muted ? 'Activar sonidos' : 'Silenciar sonidos'}
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded border border-[#2a3f5a] bg-[#101722] text-neutral-300 hover:bg-[#1a2636] hover:text-amber-400 cursor-pointer"
          >
            {muted ? <VolumeX size={18} aria-hidden="true" /> : <Volume2 size={18} aria-hidden="true" />}
          </button>

          {player ? (
            <Link
              to="/cuenta"
              className="hidden sm:flex items-center gap-2 py-1 pl-1 pr-3 rounded border border-[#2a3f5a] bg-[#101722] hover:bg-[#1a2636] text-xs text-neutral-200"
            >
              <Portrait id={player.avatar} size={24} />
              <span className="max-w-[7rem] truncate font-semibold">{player.username}</span>
            </Link>
          ) : (
            !loading && (
              <Link
                to="/entrar"
                className="hidden sm:inline-flex items-center h-10 px-3 rounded border border-[#2a3f5a] bg-[#101722] hover:bg-[#1a2636] text-xs font-display font-semibold text-neutral-200"
              >
                Entrar
              </Link>
            )
          )}

          <Link
            to="/descargar"
            onClick={() => playArcadeSound('punch')}
            className="inline-flex items-center h-10 px-3 sm:px-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-display font-bold text-xs rounded transition-all active:scale-[0.98] shadow-sm whitespace-nowrap"
          >
            Descargar<span className="hidden min-[400px]:inline">&nbsp;gratis</span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded border border-[#2a3f5a] bg-[#101722] text-neutral-200 hover:bg-[#1a2636] cursor-pointer"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav id="menu-movil" aria-label="Principal" className="xl:hidden border-t border-[#1c2836] bg-[#0e141d] px-4 sm:px-6 py-3">
          <ul className="flex flex-col">
            {NAV.map(([to, label]) => (
              <li key={to}>
                <NavLink to={to} className={(s) => `block py-3 text-base border-b border-[#1c2836] ${linkClass(s)}`}>
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="sm:hidden">
              <button
                type="button"
                onClick={() => setMuted(!muted)}
                aria-pressed={!muted}
                className="flex items-center gap-2 w-full py-3 text-base text-neutral-300 hover:text-amber-400 border-b border-[#1c2836] cursor-pointer"
              >
                {muted ? <VolumeX size={18} aria-hidden="true" /> : <Volume2 size={18} aria-hidden="true" />}
                {muted ? 'Activar sonidos' : 'Silenciar sonidos'}
              </button>
            </li>
            <li>
              {player ? (
                <Link to="/cuenta" className="block py-3 text-base text-neutral-300 hover:text-amber-400">
                  Mi cuenta ({player.username})
                </Link>
              ) : (
                !loading && (
                  <Link to="/entrar" className="block py-3 text-base text-neutral-300 hover:text-amber-400">
                    Entrar
                  </Link>
                )
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
