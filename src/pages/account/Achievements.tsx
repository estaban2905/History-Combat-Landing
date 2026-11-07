import React from 'react';
import { fetchMyAchievements } from '../../auth/session';
import { useAsync } from '../../utils/useAsync';
import { ErrorBox, Loading } from '../../components/ui';

// Los nombres y las descripciones son los del juego (scripts/achievements.gd); el servidor solo manda el progreso.
const TEXTS: Record<string, [string, string]> = {
  first_win: ['Primera sangre', 'Gana tu primer duelo'],
  wins_10: ['Veterano', 'Gana 10 duelos'],
  wins_50: ['Leyenda', 'Gana 50 duelos'],
  played_25: ['Habitual', 'Juega 25 duelos'],
  streak_5: ['Imparable', '5 victorias seguidas'],
  flawless: ['Victoria perfecta', 'Gana sin perder ronda'],
  story_done: ['Venciste al Nexo', 'Termina la historia'],
  all_endings: ['Todos los finales', 'Ve los tres finales'],
  hidden_ending: ['El tiempo libre', 'Ve el final oculto'],
  collector: ['Coleccionista', 'Gana 20 luchadores'],
  full_roster: ['Plantel completo', 'Gana 38 luchadores'],
};
const ORDER = Object.keys(TEXTS);
// El logro oculto no dice cómo se llama hasta cumplirlo.
const HIDDEN = 'hidden_ending';

export const Achievements: React.FC = () => {
  const { data, error, loading } = useAsync(fetchMyAchievements, []);

  if (loading) return <Loading />;
  if (error || !data) return <ErrorBox>No se pudieron cargar tus logros.</ErrorBox>;

  const list = ORDER.map((key) => data.find((a) => a.key === key)).filter((a): a is NonNullable<typeof a> => !!a);
  const done = list.filter((a) => a.done).length;

  return (
    <div className="space-y-4">
      <p className="text-sm text-neutral-300">
        <strong className="font-mono text-amber-300">
          {done} / {list.length}
        </strong>{' '}
        logros conseguidos
      </p>
      <div className="grid sm:grid-cols-2 gap-3">
        {list.map((a) => {
          const hidden = a.key === HIDDEN && !a.done;
          const [name, desc] = hidden ? ['???', 'Logro oculto'] : TEXTS[a.key]!;
          const pct = Math.round((a.progress / a.goal) * 100);
          return (
            <div
              key={a.key}
              className={`p-3 rounded-lg border space-y-2 ${
                a.done ? 'border-amber-700 bg-amber-950/20' : 'border-[#1e2d3e] bg-[#101722]'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div>
                  <div className={`font-display font-bold text-sm ${a.done ? 'text-amber-300' : 'text-neutral-200'}`}>
                    {a.done ? '★ ' : ''}
                    {name}
                  </div>
                  <div className="text-[11px] text-neutral-400">{desc}</div>
                </div>
                {!hidden && (
                  <span className="font-mono text-[11px] text-neutral-400 shrink-0">
                    {a.progress}/{a.goal}
                  </span>
                )}
              </div>
              {!hidden && (
                <div className="h-1.5 rounded bg-[#0c121a] overflow-hidden">
                  <div className={`h-full ${a.done ? 'bg-amber-400' : 'bg-[#2e445d]'}`} style={{ width: `${pct}%` }} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
