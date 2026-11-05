import React, { useState } from 'react';
import { playArcadeSound } from '../utils/audio';

export const CombatControls: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>('U');

  const keyDetails: Record<string, { label: string; desc: string }> = {
    'W': { label: 'Saltar', desc: 'Salto vertical o diagonal para esquivar barridas y conectar golpes aéreos.' },
    'A': { label: 'Retroceder', desc: 'Retrocede. Un doble toque rápido hacia atrás ejecuta un backdash: unos frames sin poder ser golpeado ni agarrado.' },
    'S': { label: 'Agacharse', desc: 'Permite ataques bajos (barridos). Con Espacio, bloqueas agachado contra patadas bajas.' },
    'D': { label: 'Avanzar / Correr', desc: 'Avanza hacia el rival. Un doble toque rápido hacia delante, manteniendo, te hace correr.' },
    'U': { label: 'Puño Débil', desc: 'El golpe más rápido para iniciar combos. Junto a J (puño débil + patada débil) ejecuta un agarre.' },
    'I': { label: 'Puño Fuerte', desc: 'Mayor impacto y daño. Con abajo (S) es un antiaéreo que lanza al rival por los aires.' },
    'J': { label: 'Patada Débil', desc: 'Ataque veloz para mantener la distancia. Junto a U ejecuta un agarre, que atraviesa el bloqueo.' },
    'K': { label: 'Patada Fuerte', desc: 'Gran alcance. Golpear a un rival que aún prepara su ataque causa Counter-Hit con daño extra.' },
    'O': { label: 'Especial 1', desc: 'Primer ataque especial del luchador (proyectil, lanzador o embestida). Gasta energía.' },
    'L': { label: 'Especial 2', desc: 'Poder propio de cada luchador. Gasta energía. O + L a la vez, con la energía al 100, lanza el Ultimate.' },
    ' ': { label: 'Bloquear', desc: 'Mantén para bloquear (reduce el daño al 15 %). Soltar y volver a pulsar justo antes del golpe es un bloqueo perfecto.' },
  };

  const current = keyDetails[activeKey] || keyDetails['U'];

  return (
    <section id="combate" className="py-14 md:py-20 bg-[#0b0f15] border-b border-[#1c2836]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Keyboard Layout */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="font-mono text-xs text-amber-400 mb-1 font-bold uppercase tracking-wider">
                Mapeo de Teclado
              </div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-neutral-100">
                Controles para Jugador 1
              </h2>
              <p className="text-neutral-400 text-xs sm:text-sm mt-2">
                Haz clic en cualquier tecla para consultar su función en combate.
              </p>
            </div>

            {/* Interactive Keys */}
            <div className="p-6 rounded-lg bg-[#121a24] border border-[#233549] flex flex-col items-center gap-6 shadow-xl">
              <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
                {/* Movement Cluster */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Movimiento</span>
                  <div className="flex flex-col items-center gap-2">
                    <button
                      onClick={() => { playArcadeSound('coin'); setActiveKey('W'); }}
                      className={`w-11 h-11 rounded border font-mono font-bold text-xs flex items-center justify-center transition-all cursor-pointer ${
                        activeKey === 'W'
                          ? 'bg-amber-400 text-neutral-950 border-amber-300 shadow-md scale-105'
                          : 'bg-[#16212e] text-neutral-200 border-[#2a3f5a] hover:border-neutral-400'
                      }`}
                    >
                      W
                    </button>
                    <div className="flex gap-2">
                      {['A', 'S', 'D'].map(k => (
                        <button
                          key={k}
                          onClick={() => { playArcadeSound('coin'); setActiveKey(k); }}
                          className={`w-11 h-11 rounded border font-mono font-bold text-xs flex items-center justify-center transition-all cursor-pointer ${
                            activeKey === k
                              ? 'bg-amber-400 text-neutral-950 border-amber-300 shadow-md scale-105'
                              : 'bg-[#16212e] text-neutral-200 border-[#2a3f5a] hover:border-neutral-400'
                          }`}
                        >
                          {k}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Attack Cluster */}
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Ataques</span>
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      {['U', 'I', 'O'].map(k => (
                        <button
                          key={k}
                          onClick={() => { playArcadeSound('punch'); setActiveKey(k); }}
                          className={`w-11 h-11 rounded border font-mono font-bold text-xs flex items-center justify-center transition-all cursor-pointer ${
                            activeKey === k
                              ? 'bg-sky-400 text-neutral-950 border-sky-300 shadow-md scale-105'
                              : 'bg-[#16212e] text-neutral-200 border-[#2a3f5a] hover:border-neutral-400'
                          }`}
                        >
                          {k}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      {['J', 'K', 'L'].map(k => (
                        <button
                          key={k}
                          onClick={() => { playArcadeSound('kick'); setActiveKey(k); }}
                          className={`w-11 h-11 rounded border font-mono font-bold text-xs flex items-center justify-center transition-all cursor-pointer ${
                            activeKey === k
                              ? 'bg-sky-400 text-neutral-950 border-sky-300 shadow-md scale-105'
                              : 'bg-[#16212e] text-neutral-200 border-[#2a3f5a] hover:border-neutral-400'
                          }`}
                        >
                          {k}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => { playArcadeSound('coin'); setActiveKey(' '); }}
                className={`w-56 h-11 rounded border font-mono font-bold text-xs flex items-center justify-center transition-all cursor-pointer ${
                  activeKey === ' '
                    ? 'bg-emerald-400 text-neutral-950 border-emerald-300 shadow-md scale-105'
                    : 'bg-[#16212e] text-neutral-200 border-[#2a3f5a] hover:border-neutral-400'
                }`}
              >
                ESPACIO · Bloqueo
              </button>

              {/* Key explanation */}
              <div className="w-full bg-[#0c121a] border border-[#1e2d3e] p-4 rounded-lg text-xs space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-amber-400 text-sm font-bold">Tecla [{activeKey === ' ' ? 'Espacio' : activeKey}]</span>
                  <span className="font-display font-bold text-neutral-100">{current.label}</span>
                </div>
                <p className="text-neutral-300 text-xs leading-relaxed">{current.desc}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Arcade Rules & System Mechanics */}
          <div className="lg:col-span-6 space-y-4">
            <div className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">
              Mecánicas y Reglas
            </div>
            
            <div className="p-4 rounded-lg bg-[#121a24] border border-[#233549] space-y-2 text-xs shadow-md">
              <strong className="text-neutral-100 font-display text-sm block">Rondas al Mejor de 3 & Reloj de 99 Segundos</strong>
              <p className="text-neutral-300 leading-relaxed">
                Cada asalto premia la precisión en el espaciado y la ejecución. El juego incluye bloqueo perfecto (parry), counter-hits al interceptar golpes, barra de guardia que se desgasta y remates cinemáticos propios.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#121a24] border border-[#233549] space-y-2 text-xs shadow-md">
              <strong className="text-neutral-100 font-display text-sm block">Modo Historia & Duelo Online</strong>
              <p className="text-neutral-300 leading-relaxed">
                La campaña individual ofrece diálogos narrativos entre épocas y 3 revanchas por partida. En el duelo online puedes jugar partidas clasificatorias con sistema de ligas o amistosos con amigos mediante una sala privada con código.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#121a24] border border-[#233549] space-y-2 text-xs shadow-md">
              <strong className="text-neutral-100 font-display text-sm block">Modo Entrenamiento en el Laboratorio</strong>
              <p className="text-neutral-300 leading-relaxed">
                Modo práctica con maniquí configurable, cajas de impacto (hitboxes/hurtboxes) visibles y medidor de daño acumulado para aprender las ventanas de combo de cada luchador.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
