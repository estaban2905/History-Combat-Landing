import React from 'react';
import { fetchMyStories, fetchMyUnlocks } from '../../auth/session';
import { ROSTER } from '../../data/roster';
import { useAsync } from '../../utils/useAsync';
import { Card, ErrorBox, Loading, Portrait, StatBox, fighterName } from '../../components/ui';

const DIFFICULTY = ['Fácil', 'Normal', 'Difícil'];

// El juego guarda la fecha en segundos o en milisegundos según la versión: se acepta cualquiera.
const savedDate = (t: number) =>
  new Date(t < 1e11 ? t * 1000 : t).toLocaleDateString('es-CL', { day: '2-digit', month: 'short', year: 'numeric' });

/** Progreso del modo Historia: partidas guardadas, luchadores desbloqueados y finales. */
export const Story: React.FC = () => {
  const stories = useAsync(fetchMyStories, []);
  const unlocks = useAsync(fetchMyUnlocks, []);

  if (stories.loading || unlocks.loading) return <Loading />;
  if (stories.error || unlocks.error || !stories.data || !unlocks.data) return <ErrorBox>No se pudo cargar tu progreso.</ErrorBox>;

  const fighters = unlocks.data.filter((u) => u.kind === 'fighter').map((u) => u.key);
  const endings = new Set(unlocks.data.filter((u) => u.kind === 'ending').map((u) => u.key));
  const saves = [...stories.data].sort((a, b) => b.saved_at - a.saved_at);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-2">
        <StatBox label="Partidas guardadas" value={saves.length} />
        <StatBox label="Finales vistos" value={`${endings.size} / 3`} />
        <StatBox label="Luchadores ganados" value={`${fighters.length} / 38`} />
      </div>

      <section>
        <h2 className="font-mono text-[10px] text-amber-400 uppercase tracking-wider mb-2">Partidas de Historia</h2>
        {saves.length === 0 ? (
          <p className="text-xs text-neutral-500">
            Aún no tienes partidas guardadas en la nube. Inicia sesión en el juego y juega el modo Historia.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-3">
            {saves.map((s) => (
              <Card key={s.fighter} className="p-3 flex items-center gap-3">
                <Portrait id={s.fighter} size={48} />
                <div className="min-w-0 flex-1">
                  <div className="font-display font-bold text-sm text-neutral-100 truncate">{fighterName(s.fighter)}</div>
                  <div className="text-[11px] text-neutral-400 font-mono">
                    Etapa {s.stage} · {DIFFICULTY[s.difficulty] ?? '—'}
                  </div>
                  <div className="text-[11px] text-neutral-500 font-mono">
                    Continues: {Math.max(0, s.continues - s.continues_used)} · {savedDate(s.saved_at)}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>

      <section>
        <h2 className="font-mono text-[10px] text-amber-400 uppercase tracking-wider mb-2">Luchadores desbloqueados</h2>
        {fighters.length === 0 ? (
          <p className="text-xs text-neutral-500">Vence a villanos y creadores en la historia para desbloquear luchadores.</p>
        ) : (
          <div className="flex flex-wrap gap-2">
            {fighters.map((id) => (
              <div key={id} title={fighterName(id)} className="text-center w-14">
                <Portrait id={ROSTER.some((r) => r.id === id) ? id : null} size={48} />
                <div className="text-[9px] text-neutral-400 truncate mt-0.5">{fighterName(id)}</div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
