import React from 'react';
import { fetchMySeasons } from '../../auth/session';
import { LEAGUES } from '../../utils/api';
import { useAsync } from '../../utils/useAsync';
import { Card, ErrorBox, Loading, seasonLabel, winRate } from '../../components/ui';

/** Cómo terminaste cada temporada cerrada. */
export const Seasons: React.FC = () => {
  const { data, error, loading } = useAsync(fetchMySeasons, []);

  if (loading) return <Loading />;
  if (error || !data) return <ErrorBox>No se pudo cargar tu historial de temporadas.</ErrorBox>;
  if (data.length === 0) {
    return <ErrorBox>Todavía no has cerrado ninguna temporada. Tu resultado aparecerá aquí cuando termine el mes.</ErrorBox>;
  }

  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-xs sm:text-sm">
          <thead className="bg-[#0c121a] text-neutral-400 font-mono text-[10px] uppercase tracking-wider">
            <tr>
              <th className="text-left px-3 py-2">Temporada</th>
              <th className="text-left px-3 py-2">Liga</th>
              <th className="text-right px-3 py-2">Puesto</th>
              <th className="text-right px-3 py-2">Puntos</th>
              <th className="text-right px-3 py-2">Máximo</th>
              <th className="text-right px-3 py-2">V–D</th>
              <th className="text-right px-3 py-2 hidden sm:table-cell">% Vic.</th>
            </tr>
          </thead>
          <tbody>
            {data.map((s) => {
              const league = LEAGUES.find((l) => l.key === s.league)!;
              return (
                <tr key={s.season} className="border-t border-[#1c2836]">
                  <td className="px-3 py-2 text-neutral-100">{seasonLabel(s.season)}</td>
                  <td className="px-3 py-2">
                    <span className={`font-mono text-[10px] px-1.5 py-0.5 rounded border ${league.color}`}>{league.label}</span>
                  </td>
                  <td className="px-3 py-2 text-right font-mono text-neutral-200">#{s.rank}</td>
                  <td className="px-3 py-2 text-right font-mono text-amber-300">{s.points}</td>
                  <td className="px-3 py-2 text-right font-mono text-neutral-300">{s.peak_points}</td>
                  <td className="px-3 py-2 text-right font-mono text-neutral-300">
                    {s.wins}–{s.losses}
                  </td>
                  <td className="px-3 py-2 text-right font-mono text-neutral-300 hidden sm:table-cell">
                    {winRate(s.wins, s.losses)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
