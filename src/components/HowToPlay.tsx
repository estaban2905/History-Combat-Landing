import React, { useState } from 'react';
import { playArcadeSound } from '../utils/audio';

type Device = 'teclado' | 'mando';

const KEYBOARD_ROWS: { action: string; p1: string; p2: string; p2b: string }[] = [
  { action: 'Izquierda / Derecha', p1: 'A / D', p2: '← / →', p2b: '← / →' },
  { action: 'Saltar', p1: 'W', p2: '↑', p2b: '↑' },
  { action: 'Agacharse', p1: 'S', p2: '↓', p2b: '↓' },
  { action: 'Bloquear', p1: 'Espacio', p2: 'Num 0', p2b: 'Enter' },
  { action: 'Puño débil', p1: 'U', p2: 'Num 1', p2b: 'Supr' },
  { action: 'Puño fuerte', p1: 'I', p2: 'Num 2', p2b: 'Fin' },
  { action: 'Patada débil', p1: 'J', p2: 'Num 4', p2b: 'Insert' },
  { action: 'Patada fuerte', p1: 'K', p2: 'Num 5', p2b: 'Inicio' },
  { action: 'Especial 1', p1: 'O', p2: 'Num 3', p2b: 'Av Pág' },
  { action: 'Especial 2', p1: 'L', p2: 'Num 6', p2b: 'Re Pág' },
  { action: 'Pausa', p1: 'Esc / P', p2: 'Esc / P', p2b: 'Esc / P' },
];

const PAD_ROWS: { action: string; ps: string; xbox: string }[] = [
  { action: 'Moverse · Saltar · Agacharse', ps: 'Stick izq. o cruceta', xbox: 'Stick izq. o cruceta' },
  { action: 'Puño débil', ps: 'Cuadrado', xbox: 'X' },
  { action: 'Puño fuerte', ps: 'Triángulo', xbox: 'Y' },
  { action: 'Patada débil', ps: 'Cruz', xbox: 'A' },
  { action: 'Patada fuerte', ps: 'Círculo', xbox: 'B' },
  { action: 'Bloquear', ps: 'L1 (o L2)', xbox: 'LB (o LT)' },
  { action: 'Especial 1', ps: 'R1', xbox: 'RB' },
  { action: 'Especial 2', ps: 'R2', xbox: 'RT' },
  { action: 'Ultimate', ps: 'R1 + R2', xbox: 'RB + RT' },
  { action: 'Pausa', ps: 'Start', xbox: 'Menu' },
];

const MOVES: { name: string; keys: string; desc: string }[] = [
  { name: 'Correr', keys: '→ → (mantener)', desc: 'Doble toque hacia delante y mantén. Se corta al soltar, saltar, agacharte, bloquear o atacar.' },
  { name: 'Backdash', keys: '← ←', desc: 'Doble toque hacia atrás: te desliza y no pueden golpearte ni agarrarte durante los primeros frames.' },
  { name: 'Barrido', keys: '↓ + Patada', desc: 'Ataque bajo: solo se bloquea agachado y derriba al rival.' },
  { name: 'Ataque aéreo', keys: 'Salto + ataque', desc: 'Golpe alto (solo se bloquea de pie). Uno por salto.' },
  { name: 'Antiaéreo', keys: '↓ + Puño fuerte', desc: 'Lanza al rival por los aires y gana a los saltos.' },
  { name: 'Combo', keys: 'Puño débil › Puño fuerte › Patada fuerte', desc: 'Si un golpe conecta o es bloqueado, cancélalo en otro igual o más fuerte. Cada luchador tiene combos con nombre y daño extra.' },
  { name: 'Agarre', keys: 'Puño débil + Patada débil', desc: 'Atraviesa el bloqueo. Si te agarran, repite la combinación para zafarte.' },
  { name: 'Bloqueo perfecto', keys: 'Soltar y pulsar bloqueo', desc: 'Justo antes del impacto. Bloquear agachado cubre medios y bajos.' },
  { name: 'Evitar derribo', keys: 'Bloqueo al caer', desc: 'Pulsa bloqueo hasta 8 frames antes de tocar el suelo: te levantas al instante.' },
  { name: 'Ultimate', keys: 'Especial 1 + Especial 2', desc: 'Con la energía al 100. Escena de pantalla completa propia de cada luchador.' },
];

const STEPS: { title: string; text: string }[] = [
  { title: 'Elige tu luchador', text: 'Entre los 29 disponibles desde el inicio; los villanos y los creadores del Reloj se desbloquean en el Modo Historia.' },
  { title: 'Gana 2 rondas de 3', text: 'Cada ronda dura 99 segundos. Vence por K.O. o con más vida al acabar el tiempo.' },
  { title: 'Vigila vida, energía y guardia', text: 'Los especiales gastan energía; bloquear gasta guardia y, si se rompe, quedas aturdido.' },
  { title: 'Domina el espaciado', text: 'Golpear al rival mientras prepara su ataque causa Counter-Hit con daño extra.' },
];

export const HowToPlay: React.FC = () => {
  const [device, setDevice] = useState<Device>('teclado');

  const tabClass = (on: boolean) =>
    `px-4 py-2 rounded border font-mono text-xs font-bold uppercase tracking-wider cursor-pointer transition-colors ${
      on ? 'bg-amber-400 text-neutral-950 border-amber-300' : 'bg-[#16212e] text-neutral-300 border-[#2a3f5a] hover:border-neutral-400'
    }`;

  return (
    <section id="como-jugar" className="py-14 md:py-20 bg-[#0e141d] border-b border-[#1c2836]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        <div>
          <div className="font-mono text-xs text-amber-400 mb-1 font-bold uppercase tracking-wider">Guía rápida</div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-neutral-100">Cómo jugar</h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-2 max-w-2xl">
            Se juega con teclado o con mando, solo o contra otra persona en la misma pantalla. El juego detecta el último dispositivo que usas y cambia los botones que muestra.
          </p>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="p-4 rounded-lg bg-[#121a24] border border-[#233549] text-xs space-y-1">
              <span className="font-mono text-amber-400 font-bold">0{i + 1}</span>
              <strong className="block text-neutral-100 font-display text-sm">{s.title}</strong>
              <p className="text-neutral-300 leading-relaxed">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <button className={tabClass(device === 'teclado')} onClick={() => { playArcadeSound('coin'); setDevice('teclado'); }}>
              Teclado (1 o 2 jugadores)
            </button>
            <button className={tabClass(device === 'mando')} onClick={() => { playArcadeSound('coin'); setDevice('mando'); }}>
              Mando / Joystick
            </button>
          </div>

          {device === 'teclado' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 overflow-x-auto rounded-lg border border-[#233549] bg-[#121a24]">
                <table className="w-full text-xs text-left">
                  <thead className="font-mono text-amber-400 uppercase">
                    <tr className="border-b border-[#233549]">
                      <th className="p-3">Acción</th>
                      <th className="p-3">Jugador 1</th>
                      <th className="p-3">Jugador 2</th>
                      <th className="p-3">J2 sin numérico</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-200">
                    {KEYBOARD_ROWS.map(r => (
                      <tr key={r.action} className="border-b border-[#1c2836] last:border-0">
                        <td className="p-3 text-neutral-300">{r.action}</td>
                        <td className="p-3 font-mono font-bold">{r.p1}</td>
                        <td className="p-3 font-mono">{r.p2}</td>
                        <td className="p-3 font-mono">{r.p2b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="lg:col-span-4 space-y-3 text-xs text-neutral-300 leading-relaxed">
                <div className="p-4 rounded-lg bg-[#121a24] border border-[#233549]">
                  <strong className="block text-neutral-100 font-display text-sm mb-1">Menús</strong>
                  Flechas + Enter, o el ratón. Esc vuelve atrás.
                </div>
                <div className="p-4 rounded-lg bg-[#121a24] border border-[#233549]">
                  <strong className="block text-neutral-100 font-display text-sm mb-1">Selección de luchador</strong>
                  J1 se mueve con WASD y confirma con U. J2 se mueve con las flechas y confirma con Num 1.
                </div>
                <div className="p-4 rounded-lg bg-[#121a24] border border-[#233549]">
                  <strong className="block text-neutral-100 font-display text-sm mb-1">Duelo online</strong>
                  Cada jugador usa su propio teclado como J1 (WASD + U/I/J/K/O/L).
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 overflow-x-auto rounded-lg border border-[#233549] bg-[#121a24]">
                <table className="w-full text-xs text-left">
                  <thead className="font-mono text-amber-400 uppercase">
                    <tr className="border-b border-[#233549]">
                      <th className="p-3">Acción</th>
                      <th className="p-3">PlayStation / genérico</th>
                      <th className="p-3">Xbox</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-200">
                    {PAD_ROWS.map(r => (
                      <tr key={r.action} className="border-b border-[#1c2836] last:border-0">
                        <td className="p-3 text-neutral-300">{r.action}</td>
                        <td className="p-3 font-mono font-bold">{r.ps}</td>
                        <td className="p-3 font-mono">{r.xbox}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="lg:col-span-5 space-y-3 text-xs text-neutral-300 leading-relaxed">
                <div className="p-4 rounded-lg bg-[#121a24] border border-[#233549]">
                  <strong className="block text-neutral-100 font-display text-sm mb-1">Mandos compatibles</strong>
                  Cualquier mando que reconozca tu sistema: DualShock/DualSense, Xbox, y los genéricos tipo «USB Joystick». Cuanto más estándar sea, menos ajustes necesita.
                </div>
                <div className="p-4 rounded-lg bg-[#121a24] border border-[#233549]">
                  <strong className="block text-neutral-100 font-display text-sm mb-1">1 o 2 mandos</strong>
                  Con un mando juegas como J1 (el teclado sigue activo). En Versus local, los dos primeros mandos son J1 y J2. Los menús responden a todos los mandos conectados.
                </div>
                <div className="p-4 rounded-lg bg-[#121a24] border border-[#233549]">
                  <strong className="block text-neutral-100 font-display text-sm mb-1">Asistente de calibración</strong>
                  Si algún botón no coincide (frecuente en mandos genéricos), en CONTROLES › MANDOS pulsa CALIBRAR o la tecla F10. Un dibujo del mando ilumina cada botón que debes pulsar. Se guarda por modelo, así que se hace una sola vez.
                </div>
                <div className="p-4 rounded-lg bg-[#121a24] border border-[#233549]">
                  <strong className="block text-neutral-100 font-display text-sm mb-1">Menús con mando</strong>
                  Cruz/A o Start aceptan, Círculo/B vuelve, L1/R1 cambian de pestaña o página. En CONTROLES › MANDOS puedes forzar el tipo de botones (Auto, PlayStation o Xbox) y borrar la calibración.
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <h3 className="font-display font-bold text-lg text-neutral-100 mb-3">Jugadas y técnicas</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {MOVES.map(m => (
              <div key={m.name} className="p-4 rounded-lg bg-[#121a24] border border-[#233549] text-xs space-y-1">
                <div className="flex items-baseline justify-between gap-2">
                  <strong className="text-neutral-100 font-display text-sm">{m.name}</strong>
                  <span className="font-mono text-amber-400 text-[10px] text-right">{m.keys}</span>
                </div>
                <p className="text-neutral-300 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-neutral-500 text-[11px] mt-3">
            La pantalla CONTROLES del juego (menú principal o pausa) permite probar cada botón: se ilumina al pulsarlo.
          </p>
        </div>
      </div>
    </section>
  );
};
