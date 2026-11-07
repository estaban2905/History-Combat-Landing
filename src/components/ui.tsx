import React from 'react';
import { ROSTER } from '../data/roster';
import { leagueOf } from '../utils/api';

export const fighterName = (id: string | null | undefined) =>
  id ? (ROSTER.find((r) => r.id === id)?.name ?? id) : '—';

export const winRate = (w: number, l: number) => (w + l === 0 ? '—' : `${Math.round((w / (w + l)) * 100)}%`);

export const Portrait: React.FC<{ id: string | null | undefined; size?: number }> = ({ id, size = 32 }) =>
  id ? (
    <img
      src={`/assets/roster/${id}.png`}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      className="rounded border border-[#2a3f5a] bg-[#0c121a] object-cover shrink-0"
      style={{ width: size, height: size, imageRendering: 'pixelated' }}
    />
  ) : (
    <div className="rounded border border-[#2a3f5a] bg-[#0c121a] shrink-0" style={{ width: size, height: size }} />
  );

export const LeagueBadge: React.FC<{ points: number }> = ({ points }) => {
  const l = leagueOf(points);
  return <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded border ${l.color}`}>{l.label}</span>;
};

/** Cabecera de página: etiqueta, título y bajada. */
export const PageHeader: React.FC<{ tag: string; title: string; children?: React.ReactNode }> = ({ tag, title, children }) => (
  <div className="text-center mb-8">
    <div className="font-mono text-xs text-amber-400 mb-1 font-bold uppercase tracking-wider">{tag}</div>
    <h1 className="font-display font-black text-2xl sm:text-3xl text-neutral-100">{title}</h1>
    {children && <p className="text-neutral-400 text-xs sm:text-sm mt-2">{children}</p>}
  </div>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`rounded-lg border border-[#1e2d3e] bg-[#101722] ${className}`}>{children}</div>
);

export const StatBox: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div className="p-2 rounded bg-[#0c121a] border border-[#1c2836] text-center">
    <div className="font-mono text-[10px] text-neutral-500 uppercase">{label}</div>
    <div className="font-mono text-sm text-neutral-100">{value}</div>
  </div>
);

export const resultColor = (r: 'win' | 'loss' | 'draw') =>
  r === 'win' ? 'text-emerald-400' : r === 'loss' ? 'text-red-400' : 'text-neutral-400';

export const resultLetter = (r: 'win' | 'loss' | 'draw') => (r === 'win' ? 'V' : r === 'loss' ? 'D' : 'E');

/** Lista de duelos (compartida por el perfil público y las partidas privadas). */
export const MatchList: React.FC<{
  matches: {
    id: string;
    played_at?: string;
    opponent: string;
    my_fighter: string;
    opponent_fighter: string;
    result: 'win' | 'loss' | 'draw';
    delta: number;
    my_rounds: number;
    opponent_rounds: number;
  }[];
  showDate?: boolean;
}> = ({ matches, showDate }) => (
  <ul className="space-y-1.5">
    {matches.map((m) => (
      <li key={m.id} className="flex items-center gap-2 p-2 rounded bg-[#0c121a] border border-[#1c2836] text-xs">
        <span className={`font-mono font-bold w-5 text-center ${resultColor(m.result)}`}>{resultLetter(m.result)}</span>
        <span className="text-neutral-300 truncate flex-1">
          {fighterName(m.my_fighter)} vs {m.opponent} ({fighterName(m.opponent_fighter)})
        </span>
        {showDate && m.played_at && (
          <span className="font-mono text-neutral-500 hidden sm:inline">
            {new Date(m.played_at).toLocaleDateString('es-CL', { day: '2-digit', month: 'short' })}
          </span>
        )}
        <span className="font-mono text-neutral-400">
          {m.my_rounds}–{m.opponent_rounds}
        </span>
        <span className={`font-mono w-10 text-right ${m.delta >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
          {m.delta > 0 ? `+${m.delta}` : m.delta}
        </span>
      </li>
    ))}
  </ul>
);

export const Loading: React.FC<{ text?: string }> = ({ text = 'Cargando…' }) => (
  <p className="py-10 text-center text-neutral-500 font-mono text-xs">{text}</p>
);

export const ErrorBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="py-10 text-center text-neutral-400 text-xs">{children}</p>
);

/** "12 d 4 h" / "5 h 20 min" hasta una fecha. */
export function remaining(endsAt: string): string {
  const ms = new Date(endsAt).getTime() - Date.now();
  if (ms <= 0) return 'terminando';
  const d = Math.floor(ms / 86_400_000);
  const h = Math.floor((ms % 86_400_000) / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  return d > 0 ? `${d} d ${h} h` : `${h} h ${m} min`;
}

export const seasonLabel = (id: string) => {
  const [y, m] = id.split('-').map(Number);
  const name = new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('es-CL', { month: 'long', timeZone: 'UTC' });
  return `${name.charAt(0).toUpperCase()}${name.slice(1)} ${y}`;
};
