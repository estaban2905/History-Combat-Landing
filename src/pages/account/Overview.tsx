import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import { fetchMyAchievements } from '../../auth/session';
import { LEAGUES, fetchPlayer, fetchSeason, leagueOf } from '../../utils/api';
import { useAsync } from '../../utils/useAsync';
import { Card, ErrorBox, Loading, MatchList, StatBox, fighterName, remaining, seasonLabel, winRate } from '../../components/ui';

/** Resumen: puntos, liga y progreso, racha, temporada, últimas partidas y logros. */
export const Overview: React.FC = () => {
  const { player } = useAuth();
  const me = useAsync(() => fetchPlayer(player!.username), [player?.username]);
  const season = useAsync(fetchSeason, []);
  const achievements = useAsync(fetchMyAchievements, []);

  if (!player) return null;
  if (me.loading) return <Loading />;
  if (me.error || !me.data) return <ErrorBox>No se pudieron cargar tus datos. Inténtalo de nuevo en unos minutos.</ErrorBox>;

  const p = me.data;
  const league = leagueOf(p.points);
  // Siguiente liga: la primera con más puntos que los tuyos (la lista va de mayor a menor).
  const next = [...LEAGUES].reverse().find((l) => l.from > p.points);
  const current = league.from;
  const progress = next ? Math.min(100, Math.round(((p.points - current) / (next.from - current)) * 100)) : 100;
  const done = achievements.data?.filter((a) => a.done).length;

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <StatBox label="Puntos" value={p.points} />
        <StatBox label="Puesto" value={`#${p.rank}`} />
        <StatBox label="V–D" value={`${p.wins}–${p.losses}`} />
        <StatBox label="% Victorias" value={winRate(p.wins, p.losses)} />
      </div>

      <Card className="p-4 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-neutral-300">
            Liga <strong className="text-neutral-100">{league.label}</strong>
          </span>
          <span className="font-mono text-neutral-400">
            {next ? `${next.from - p.points} puntos para ${next.label}` : 'Liga máxima'}
          </span>
        </div>
        <div className="h-2 rounded bg-[#0c121a] border border-[#1c2836] overflow-hidden">
          <div className="h-full bg-amber-400" style={{ width: `${progress}%` }} />
        </div>
      </Card>

      <div className="grid sm:grid-cols-3 gap-2">
        <StatBox label="Racha actual" value={p.streak > 0 ? `🔥 ${p.streak}` : '—'} />
        <StatBox label="Luchador favorito" value={fighterName(p.favorite_fighter)} />
        <StatBox
          label="Temporada"
          value={season.data ? `${seasonLabel(season.data.id)} · ${remaining(season.data.ends_at)}` : '—'}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-mono text-[10px] text-amber-400 uppercase tracking-wider">Últimas partidas</h2>
            <Link to="/cuenta/partidas" className="text-[11px] text-neutral-400 hover:text-amber-400">
              Ver todas →
            </Link>
          </div>
          {p.recent.length === 0 ? (
            <p className="text-xs text-neutral-500">Aún no has jugado duelos clasificatorios.</p>
          ) : (
            <MatchList matches={p.recent.slice(0, 5)} />
          )}
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-mono text-[10px] text-amber-400 uppercase tracking-wider">Logros</h2>
            <Link to="/cuenta/logros" className="text-[11px] text-neutral-400 hover:text-amber-400">
              Ver todos →
            </Link>
          </div>
          <Card className="p-4 text-sm text-neutral-200">
            {achievements.data ? (
              <>
                <strong className="font-mono text-amber-300">
                  {done} / {achievements.data.length}
                </strong>{' '}
                logros conseguidos
              </>
            ) : (
              <span className="text-neutral-500 text-xs">Cargando…</span>
            )}
          </Card>
          <Link
            to={`/jugador/${encodeURIComponent(p.username)}`}
            className="block mt-3 text-[11px] text-neutral-400 hover:text-amber-400"
          >
            Ver mi perfil público →
          </Link>
        </div>
      </div>
    </div>
  );
};
