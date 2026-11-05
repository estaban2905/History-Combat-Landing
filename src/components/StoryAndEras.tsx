import React, { useState } from 'react';
import { ERAS_DATA, Era } from '../data/eras';
import { playArcadeSound } from '../utils/audio';

export const StoryAndEras: React.FC = () => {
  const [activeEra, setActiveEra] = useState<Era>(ERAS_DATA[0]);

  return (
    <section id="epocas" className="py-14 md:py-20 bg-[#0b0f15] border-b border-[#1c2836]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="font-mono text-xs text-amber-400 mb-1 font-bold uppercase tracking-wider">
            Línea Temporal Inversa
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-neutral-100">
            El Viaje Hacia Atrás en el Tiempo
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base mt-3 leading-relaxed">
            Para alcanzar la grieta del Nexo, el jugador debe emprender un viaje hacia atrás en el tiempo, desde el presente hasta la antigüedad, derrotando al jefe que custodia el fragmento de cada época.
          </p>
        </div>

        {/* 5 Eras Segmented Timeline Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-6">
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
                <div className="font-mono text-[10px] text-amber-400 mb-1">
                  Época 0{era.order}
                </div>
                <div className="font-display font-bold text-xs sm:text-sm truncate text-neutral-100">
                  {era.name}
                </div>
                <div className="text-[11px] text-neutral-400 truncate font-mono mt-1">
                  Jefe: <span className="text-neutral-200 font-semibold">{era.bossName}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Era Presentation Card */}
        <div className="bg-[#121a24] border border-[#233549] rounded-lg p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Era Details */}
            <div className="md:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-400">
                <span className="text-amber-400 font-bold">Época {activeEra.order} de 5</span>
                <span>·</span>
                <span>{activeEra.period}</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl text-neutral-100">
                {activeEra.name}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {activeEra.description}
              </p>

              <div className="pt-4 border-t border-[#1c2836] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <span className="text-neutral-500 block">Jefe de la Era:</span>
                  <span className="text-amber-300 font-bold text-base">{activeEra.bossName}</span>
                  <span className="text-neutral-400 block text-[11px] mt-0.5">{activeEra.bossRole}</span>
                </div>
                <div>
                  <span className="text-neutral-500 block">Escenario Oficial:</span>
                  <span className="text-neutral-200 font-semibold text-sm">{activeEra.stageName}</span>
                </div>
              </div>
            </div>

            {/* Boss Challenge Box */}
            <div className="md:col-span-4 bg-[#0e1620] border border-[#1e2d3e] p-6 rounded-lg text-center space-y-3">
              <div className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                Custodio del Fragmento
              </div>
              <div className="font-display font-black text-xl text-neutral-100">
                {activeEra.bossName}
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Vence al jefe de esta época para reclamar su fragmento temporal y desbloquear nuevos luchadores en tu cuenta.
              </p>
              <div className="pt-2 text-[11px] font-mono text-neutral-300 italic border-t border-[#1c2836]">
                {activeEra.clues}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
