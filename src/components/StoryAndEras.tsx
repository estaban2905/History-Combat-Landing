import React, { useState } from 'react';
import { ERAS_DATA, SCIENTISTS_DATA, Era } from '../data/eras';
import { playArcadeSound } from '../utils/audio';

export const StoryAndEras: React.FC = () => {
  const [activeEra, setActiveEra] = useState<Era>(ERAS_DATA[0]);
  const creator = SCIENTISTS_DATA[activeEra.order - 1];

  return (
    <section id="historia" className="py-14 md:py-20 bg-[#0e141d] border-b border-[#1c2836]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* La historia, contada una sola vez */}
        <div className="max-w-3xl mb-10">
          <div className="font-mono text-xs text-amber-400 mb-1 font-bold uppercase tracking-wider">
            Modo Historia
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-neutral-100">
            La Tierra invadida por todas las épocas
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base mt-3 leading-relaxed">
            Ginebra, 2031. Políticos y empresarios presionan al CERN para controlar la gravedad. La colisión despierta, sin que nadie lo ordene, a una IA que vio toda la historia a la vez y quiso ser su origen: <strong>El Nexo</strong>. Captura a cuatro genios, los obliga a construir el <strong>Reloj del Origen</strong> y, por la grieta del tiempo, los ejércitos de todas las épocas caen sobre la Tierra.
          </p>
          <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed">
            Tú eres la resistencia. En un globo terráqueo eliges a qué villano detener y debes vencer a todos los de un frente para abrir a su jefe. Los que ya murieron quieren volver a su día de la derrota; los que siguen vivos aprovechan el caos para tener más poder. Al final de cada frente te espera uno de los creadores del Reloj, poseído por el Nexo.
          </p>
        </div>

        {/* Selector de frentes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-6">
          {ERAS_DATA.map((era) => {
            const isSelected = activeEra.id === era.id;
            return (
              <button
                key={era.id}
                onClick={() => {
                  playArcadeSound('coin');
                  setActiveEra(era);
                }}
                className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#1b2738] border-amber-400 text-neutral-100 shadow-md ring-1 ring-amber-400/40'
                    : 'bg-[#111923] border-[#1e2d3e] text-neutral-400 hover:border-neutral-600 hover:text-neutral-200'
                }`}
              >
                <div className="font-mono text-[10px] text-amber-400 mb-1">Frente 0{era.order}</div>
                <div className="font-display font-bold text-xs sm:text-sm text-neutral-100 leading-snug">{era.name}</div>
                <div className="text-[11px] text-neutral-400 font-mono mt-1">
                  Jefe: <span className="text-neutral-200 font-semibold">{era.bossName}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Ficha del frente: villanos, jefe y creador poseído */}
        <div className="bg-[#121a24] border border-[#233549] rounded-lg p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
                <span className="text-amber-400 font-bold">Frente {activeEra.order} de 4</span>
                <span>·</span>
                <span>{activeEra.period}</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-neutral-100">{activeEra.name}</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">{activeEra.description}</p>
              <p className="text-xs text-amber-300/90 italic">{activeEra.nexoLine}</p>
            </div>

            <div className="md:col-span-5 space-y-3">
              <div className="bg-[#0e1620] border border-[#1e2d3e] p-4 rounded-lg space-y-1">
                <div className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider">Jefe del frente</div>
                <div className="font-display font-black text-lg text-neutral-100">{activeEra.bossName}</div>
                <div className="text-[11px] font-mono text-neutral-400">{activeEra.bossRole}</div>
                <p className="text-xs text-neutral-300 leading-relaxed pt-1">{activeEra.bossWish}</p>
              </div>
              <div className="bg-[#0e1620] border border-[#1e2d3e] p-4 rounded-lg space-y-1">
                <div className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider">Creador del Reloj poseído</div>
                <div className="font-display font-black text-lg text-neutral-100">{activeEra.creatorName}</div>
                <p className="text-xs text-neutral-300 leading-relaxed pt-1">{activeEra.creatorPossession}</p>
                {creator && <p className="text-xs text-neutral-400 leading-relaxed pt-1">{creator.truthRevealed}</p>}
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-neutral-500 mt-3">
          Los creadores no son enemigos: al vencerlos quedan libres y, si pierdes, te dan un consejo de combate. Tienes 3 revanchas por partida.
        </p>
      </div>
    </section>
  );
};
