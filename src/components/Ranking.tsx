import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROSTER } from '../data/roster';
import { fetchRanking, fetchSeason, type RankingRow, type Season } from '../utils/api';
import { Card, ErrorBox, LeagueBadge, Loading, PageHeader, Portrait, fighterName, remaining, seasonLabel, winRate } from './ui';

/** Tabla de ranking con filtros, temporada y buscador. Cada jugador abre su perfil en /jugador/:nombre. */
export const Ranking: React.FC = () => {
  const navigate = useNavigate();
  const [period, setPeriod] = useState<'all' | 'week'>('all');
  const [fighter, setFighter] = useState('');
  const [rows, setRows] = useState<RankingRow[] | null>(null);
  const [error, setError] = useState(false);
  const [season, setSeason] = useState<Season | null>(null);
  const [query, setQuery] = useState('');
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    fetchSeason().then(setSeason).catch(() => setSeason(null));
  }, []);

  useEffect(() => {
    let cancelled = false;
    setRows(null);
    setError(false);
    fetchRanking(period, fighter)
      .then((r) => !cancelled && setRows(r))
      .catch(() => !cancelled && setError(true));
    return () => {
      cancelled = true;
    };
  }, [period, fighter, attempt]);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const name = query.trim();
    if (name) navigate(`/jugador/${encodeURIComponent(name)}`);
  };

  const filtered = fighter !== '' || period === 'week';

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <PageHeader tag="Comunidad" title="Ranking online">
        Los mejores duelos clasificatorios, en vivo con las partidas de todos los jugadores.
      </PageHeader>

      {season && (
        <div className="mb-6 p-4 rounded-lg border border-[#2e445d] bg-[#121a24] flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="font-mono text-[10px] text-amber-400 uppercase tracking-wider">Temporada actual</div>
            <div className="font-display font-bold text-lg text-neutral-100">{seasonLabel(season.id)}</div>
          </div>
          <div className="text-right">
            <div className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">Termina en</div>
            <div className="font-mono text-sm text-neutral-100">{remaining(season.ends_at)}</div>
          </div>
          <div className="w-full text-xs text-neutral-400 font-mono leading-relaxed">
            Todos empiezan en 1000 puntos. Plata 1100 · Oro 1300 · Diamante 1500. Al cerrar la temporada los puntos se
            acercan a 1000 y los mejores ganan marcos y títulos.
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:flex sm:flex-wrap sm:items-center gap-3 mb-4">
        <div role="group" aria-label="Periodo" className="grid grid-cols-2 sm:flex rounded overflow-hidden border border-[#2a3f5a] text-sm font-display font-semibold">
          {([
            ['all', 'Histórico'],
            ['week', 'Últimos 7 días'],
          ] as const).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setPeriod(key)}
              aria-pressed={period === key}
              className={`min-h-11 px-4 py-2 cursor-pointer transition-colors ${
                period === key ? 'bg-amber-400 text-neutral-950' : 'bg-[#101722] text-neutral-300 hover:bg-[#1a2636]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <select
          value={fighter}
          onChange={(e) => setFighter(e.target.value)}
          aria-label="Filtrar por luchador"
          className="w-full sm:w-auto min-h-11 bg-[#101722] border border-[#2a3f5a] text-neutral-200 text-sm rounded px-3 py-2 cursor-pointer"
        >
          <option value="">Todos los luchadores</option>
          {[...ROSTER]
            .sort((a, b) => a.name.localeCompare(b.name, 'es'))
            .map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
        </select>

        <form onSubmit={onSearch} role="search" className="flex gap-2 w-full sm:w-auto sm:ml-auto">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar jugador"
            maxLength={16}
            aria-label="Buscar jugador por nombre"
            className="flex-1 min-w-0 sm:w-48 sm:flex-none min-h-11 bg-[#101722] border border-[#2a3f5a] text-neutral-200 text-sm rounded px-3 py-2 placeholder:text-neutral-400"
          />
          <button
            type="submit"
            className="min-h-11 px-5 py-2 bg-amber-400 hover:bg-amber-300 text-neutral-950 text-sm font-display font-bold rounded cursor-pointer"
          >
            Ver
          </button>
        </form>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-[#0c121a] text-neutral-400 font-mono text-[11px] uppercase tracking-wider">
              <tr>
                <th className="text-left px-3 py-2 w-10">#</th>
                <th className="text-left px-3 py-2">Jugador</th>
                <th className="text-left px-3 py-2">Liga</th>
                <th className="text-right px-3 py-2">{filtered ? 'Ganados' : 'Puntos'}</th>
                <th className="text-right px-3 py-2">V–D</th>
                <th className="text-right px-3 py-2 hidden sm:table-cell">% Vic.</th>
                <th className="text-right px-3 py-2 hidden md:table-cell">Racha</th>
                <th className="text-left px-3 py-2 hidden md:table-cell">Favorito</th>
              </tr>
            </thead>
            <tbody>
              {rows?.map((r, i) => (
                <tr
                  key={r.username}
                  onClick={() => navigate(`/jugador/${encodeURIComponent(r.username)}`)}
                  className="border-t border-[#1c2836] hover:bg-[#16212e] cursor-pointer"
                >
                  <td className="px-3 py-2 font-mono text-neutral-400">{i + 1}</td>
                  <td className="px-3 py-2">
                    <Link
                      to={`/jugador/${encodeURIComponent(r.username)}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 hover:text-amber-300"
                    >
                      <Portrait id={r.avatar} />
                      <span className="font-semibold text-neutral-100 truncate max-w-[7rem] sm:max-w-[12rem]">{r.username}</span>
                    </Link>
                  </td>
                  <td className="px-3 py-2">
                    <LeagueBadge points={r.points} />
                  </td>
                  <td className="px-3 py-2 text-right font-mono text-amber-300">
                    {r.gained !== undefined ? (r.gained > 0 ? `+${r.gained}` : r.gained) : r.points}
                  </td>
                  <td className="px-3 py-2 text-right font-mono text-neutral-300">
                    {r.wins}–{r.losses}
                  </td>
                  <td className="px-3 py-2 text-right font-mono text-neutral-300 hidden sm:table-cell">
                    {winRate(r.wins, r.losses)}
                  </td>
                  <td className="px-3 py-2 text-right font-mono hidden md:table-cell text-neutral-300">
                    {r.streak > 0 ? `🔥 ${r.streak}` : '—'}
                  </td>
                  <td className="px-3 py-2 hidden md:table-cell text-neutral-300">{fighterName(r.favorite_fighter)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {rows === null && !error && <Loading text="Cargando ranking…" />}
        {error && (
          <div className="py-10 px-4 text-center space-y-3">
            <p className="text-neutral-300 text-sm">No se pudo cargar el ranking. Puede ser un corte momentáneo.</p>
            <button
              type="button"
              onClick={() => setAttempt((n) => n + 1)}
              className="min-h-11 px-5 py-2 bg-amber-400 hover:bg-amber-300 text-neutral-950 text-sm font-display font-bold rounded cursor-pointer"
            >
              Reintentar
            </button>
          </div>
        )}
        {rows?.length === 0 && <ErrorBox>Todavía no hay duelos registrados con este filtro. ¡Sé el primero!</ErrorBox>}
      </Card>
      <p className="mt-3 text-center text-xs text-neutral-400">
        Solo cuentan los duelos online entre dos cuentas. Toca un jugador para ver su perfil.
      </p>
    </div>
  );
};
