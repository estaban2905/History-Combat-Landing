import React from 'react';
import { Navigate, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import { LeagueBadge, Loading, Portrait } from '../../components/ui';

const TABS = [
  ['/cuenta', 'Resumen', true],
  ['/cuenta/partidas', 'Partidas', false],
  ['/cuenta/logros', 'Logros', false],
  ['/cuenta/historia', 'Historia', false],
  ['/cuenta/temporadas', 'Temporadas', false],
  ['/cuenta/ajustes', 'Ajustes', false],
] as const;

/** Área privada: solo con sesión. Cabecera del jugador, pestañas y la página elegida debajo. */
export const AccountLayout: React.FC = () => {
  const { player, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Loading text="Comprobando sesión…" />;
  if (!player) return <Navigate to="/entrar" replace state={{ from: location.pathname }} />;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14 space-y-6">
      <div className="flex items-center gap-4">
        <Portrait id={player.avatar} size={64} />
        <div className="min-w-0">
          <div className="font-mono text-[10px] text-amber-400 uppercase tracking-wider">Mi cuenta</div>
          <h1 className="font-display font-black text-2xl text-neutral-100 truncate">{player.username}</h1>
          <div className="mt-1">
            <LeagueBadge points={player.points} />
          </div>
        </div>
      </div>

      <nav className="flex gap-1 overflow-x-auto border-b border-[#1c2836]">
        {TABS.map(([to, label, end]) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `px-3 py-2 text-xs sm:text-sm font-display font-semibold whitespace-nowrap border-b-2 -mb-px transition-colors ${
                isActive ? 'border-amber-400 text-amber-400' : 'border-transparent text-neutral-400 hover:text-neutral-200'
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <Outlet />
    </div>
  );
};
