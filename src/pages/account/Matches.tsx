import React, { useMemo, useState } from 'react';
import { fetchMyMatches } from '../../auth/session';
import { useAsync } from '../../utils/useAsync';
import { ErrorBox, Loading, MatchList, StatBox, winRate } from '../../components/ui';

/** Historial de duelos clasificatorios (los últimos 50). */
export const Matches: React.FC = () => {
  const { data, error, loading } = useAsync(() => fetchMyMatches(50), []);
  const [filter, setFilter] = useState<'all' | 'win' | 'loss'>('all');

  const shown = useMemo(() => (data ?? []).filter((m) => filter === 'all' || m.result === filter), [data, filter]);

  if (loading) return <Loading />;
  if (error || !data) return <ErrorBox>No se pudo cargar tu historial.</ErrorBox>;
  if (data.length === 0) return <ErrorBox>Aún no has jugado duelos clasificatorios. ¡Entra a Duelo online en el juego!</ErrorBox>;

  const wins = data.filter((m) => m.result === 'win').length;
  const losses = data.filter((m) => m.result === 'loss').length;
  const net = data.reduce((sum, m) => sum + m.delta, 0);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <StatBox label="Duelos" value={data.length} />
        <StatBox label="V–D" value={`${wins}–${losses}`} />
        <StatBox label="% Vic." value={winRate(wins, losses)} />
        <StatBox label="Puntos netos" value={net > 0 ? `+${net}` : net} />
      </div>

      <div className="flex rounded overflow-hidden border border-[#2a3f5a] text-xs font-display font-semibold w-fit">
        {([
          ['all', 'Todas'],
          ['win', 'Victorias'],
          ['loss', 'Derrotas'],
        ] as const).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-3 py-2 cursor-pointer transition-colors ${
              filter === key ? 'bg-amber-400 text-neutral-950' : 'bg-[#101722] text-neutral-300 hover:bg-[#1a2636]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <MatchList matches={shown} showDate />
      <p className="text-[11px] text-neutral-500">Se muestran tus últimos {data.length} duelos clasificatorios.</p>
    </div>
  );
};
