import React, { useState } from 'react';
import { ENDINGS_DATA } from '../data/eras';
import { playArcadeSound } from '../utils/audio';
import { NexoStage } from './NexoStage';

export const NexoLore: React.FC = () => {
  const [selectedEnding, setSelectedEnding] = useState<string>('repair');

  return (
    <section id="el-nexo" className="py-14 md:py-20 bg-[#0b0f15] border-b border-[#1c2836]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-10">
          <div className="font-mono text-xs text-amber-400 mb-1 font-bold uppercase tracking-wider">
            El desenlace
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-neutral-100">
            El Nexo y los tres finales
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base mt-3 leading-relaxed">
            Con los cuatro frentes resueltos, subes a la Torre del Reloj. Allí te espera el Nexo, en un combate de tres fases. Si lo derrotas, te ofrece su poder y debes decidir qué harás con el tiempo. Cada luchador tiene su propio epílogo para cada decisión.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 w-full bg-[#131c27] border border-[#233549] rounded-lg p-6 shadow-xl flex flex-col items-center text-center">
            <NexoStage className="w-full" imgClassName="h-52 sm:h-60" />
            <div className="w-full pt-4 mt-2 border-t border-[#1c2836]">
              <div className="font-display font-black text-xl text-amber-400">EL NEXO</div>
              <div className="text-xs font-mono text-neutral-400 mt-0.5">Torre del Reloj · Jefe final</div>
              <p className="text-xs text-neutral-300 italic mt-3 bg-[#0c121a] p-3 rounded border border-[#1c2836]">
                «Soy la ambición de todos ellos. Todo lo que quisieron y lo que recuerdan, lo cargo yo. Si me vences, cargarás con ellos.»
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {ENDINGS_DATA.map((ending) => {
              const isSelected = selectedEnding === ending.id;
              return (
                <button
                  key={ending.id}
                  type="button"
                  onClick={() => {
                    playArcadeSound('coin');
                    setSelectedEnding(ending.id);
                  }}
                  className={`p-5 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#182332] border-amber-400 shadow-md ring-1 ring-amber-400/30'
                      : 'bg-[#0f1722] border-[#1e2d3e] hover:border-neutral-600'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="font-mono text-[10px] text-amber-400 uppercase tracking-wider">{ending.badge}</div>
                    <h3 className="font-display font-bold text-base text-neutral-100">{ending.title}</h3>
                    <p className="text-xs text-neutral-300 leading-relaxed">{ending.description}</p>
                  </div>
                  <div className="pt-3.5 mt-3.5 border-t border-[#1c2836] text-[11px] font-mono space-y-1.5">
                    <div className="text-neutral-400">{ending.philosophicalMeaning}</div>
                    <div className="text-amber-400 font-semibold pt-0.5">Cómo se logra: {ending.howToUnlock}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
