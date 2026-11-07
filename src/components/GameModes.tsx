import React from 'react';

const MODES: { tag: string; title: string; who: string; points: string[] }[] = [
  {
    tag: 'Solo',
    title: 'Modo Historia',
    who: 'La campaña contra la CPU, con el luchador que elijas.',
    points: [
      'Escenas con voz antes de los jefes y de los creadores del Reloj.',
      'Globo terráqueo para elegir qué villano detener, y 3 revanchas por partida.',
      'Se guarda sola, una partida por luchador. Con cuenta, la retomas desde otro PC.',
      'Los villanos y los creadores se desbloquean al vencerlos.',
    ],
  },
  {
    tag: '2 jugadores',
    title: 'Versus local',
    who: 'Dos personas en la misma pantalla.',
    points: [
      'Dos jugadores en un mismo teclado (J1 con WASD, J2 con flechas), o dos mandos (el primero es J1 y el segundo J2).',
      'Cualquier luchador del plantel disponible, con revancha al terminar.',
      'No necesita cuenta ni conexión.',
    ],
  },
  {
    tag: 'En línea',
    title: 'Duelo online',
    who: 'Contra otra persona, desde cada casa.',
    points: [
      'Clasificatorio con puntos, ligas y temporadas, si los dos tienen cuenta. Contra un invitado es amistoso.',
      'Amistosos con amigos mediante una sala privada con código, y lista de amigos con retos.',
      'Ranking y perfil con avatar, puntos, victorias y últimos duelos.',
      'Si alguien abandona, el otro gana. Todavía no hay revancha ni pausa en línea.',
    ],
  },
];

export const GameModes: React.FC = () => (
  <section id="modos" className="py-14 md:py-20 bg-[#0b0f15] border-b border-[#1c2836]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mb-10">
        <div className="font-mono text-xs text-amber-400 mb-1 font-bold uppercase tracking-wider">Modos de juego</div>
        <h2 className="font-display font-black text-2xl sm:text-3xl text-neutral-100">Solo, a dos o en línea</h2>
        <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed">
          Puedes jugar sin cuenta los modos locales. La cuenta solo hace falta para el ranking, los amigos y para guardar la historia en la nube.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {MODES.map(m => (
          <article key={m.title} className="p-5 rounded-lg bg-[#121a24] border border-[#233549] flex flex-col gap-3 shadow-md">
            <div className="font-mono text-[10px] text-amber-400 uppercase tracking-wider">{m.tag}</div>
            <h3 className="font-display font-bold text-lg text-neutral-100">{m.title}</h3>
            <p className="text-xs text-neutral-300 leading-relaxed">{m.who}</p>
            <ul className="text-xs text-neutral-400 leading-relaxed space-y-1.5 list-disc pl-4 marker:text-amber-400">
              {m.points.map(p => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);
