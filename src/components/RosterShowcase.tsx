import React, { useState } from 'react';
import { FIGHTERS, Fighter } from '../data/fighters';
import { playArcadeSound } from '../utils/audio';

export const RosterShowcase: React.FC = () => {
  const [selectedFighter, setSelectedFighter] = useState<Fighter>(FIGHTERS[0]);

  return (
    <section id="plantel" className="py-14 md:py-20 bg-[#0e141d] border-b border-[#1c2836]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="max-w-3xl mb-8">
          <div className="font-mono text-xs text-amber-400 mb-1 font-bold uppercase tracking-wider">
            Pantalla de Selección Arcade
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-neutral-100">
            El Plantel de Luchadores
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed">
            Comienzas con 12 personajes iniciales en el Modo Historia y vas ganando rivales al superar cada época. En los duelos online todos los personajes están disponibles desde el inicio.
          </p>
        </div>

        {/* Arcade Character Select Grid */}
        <div className="bg-[#121a24] border border-[#233549] p-4 rounded-lg shadow-xl mb-6">
          <div className="flex items-center justify-between font-mono text-xs text-neutral-400 mb-3 pb-2 border-b border-[#1c2836]">
            <span className="text-neutral-300">Selecciona un luchador:</span>
            <span className="text-amber-400 font-bold">Luchadores destacados</span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2.5">
            {FIGHTERS.slice(0, 12).map((fighter) => {
              const isSelected = selectedFighter.id === fighter.id;
              return (
                <button
                  key={fighter.id}
                  onClick={() => {
                    playArcadeSound('punch');
                    setSelectedFighter(fighter);
                  }}
                  className={`p-2 rounded-lg border transition-all flex flex-col items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#1e2d3e] border-amber-400 shadow-md ring-2 ring-amber-400/50 scale-[1.02]'
                      : 'bg-[#0f1722] border-[#1e2d3e] hover:border-neutral-500 hover:bg-[#15202d]'
                  }`}
                >
                  <div className="h-20 sm:h-24 w-full flex items-center justify-center p-1">
                    <img
                      src={fighter.spriteUrl}
                      alt={fighter.name}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>
                  <div className="w-full text-center mt-1 border-t border-[#1c2836] pt-1">
                    <div className="font-display font-bold text-xs text-neutral-200 truncate">
                      {fighter.name}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Fighter Details View */}
        <div className="bg-[#121a24] border border-[#233549] p-6 sm:p-8 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Fighter Sprite + Stage info */}
            <div className="md:col-span-4 flex flex-col items-center">
              <div className="w-full h-64 sm:h-72 flex items-center justify-center bg-[#0c121a] border border-[#1e2d3e] rounded-lg p-4">
                <img
                  src={selectedFighter.spriteUrl}
                  alt={selectedFighter.name}
                  className="max-h-full w-auto object-contain"
                />
              </div>

              <div className="w-full mt-3 font-mono text-xs text-neutral-400 space-y-1 text-center bg-[#0e1620] border border-[#1e2d3e] p-3 rounded-lg">
                <div>
                  <span className="text-neutral-500">Escenario: </span>
                  <span className="text-amber-400 font-semibold">{selectedFighter.stageName}</span>
                </div>
                <div className="text-neutral-500 text-[11px]">
                  Época: <span className="text-neutral-300">{selectedFighter.era}</span>
                </div>
              </div>
            </div>

            {/* Fighter Bio, Nexo Motivation, Moves */}
            <div className="md:col-span-8 space-y-5">
              <div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-neutral-100">
                  {selectedFighter.name}
                </h3>
                <div className="text-xs font-mono text-amber-400 mt-0.5">
                  {selectedFighter.title}
                </div>
              </div>

              {/* Natural Bio */}
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {selectedFighter.bio}
              </p>

              {/* Motivation in the tournament */}
              <div className="bg-[#0e1620] border-l-2 border-amber-400 p-3.5 rounded text-xs space-y-1">
                <span className="font-mono text-amber-400 font-bold text-[11px] block uppercase tracking-wider">
                  Objetivo con el Poder del Nexo
                </span>
                <p className="text-neutral-300 leading-relaxed text-[13px]">
                  {selectedFighter.nexoGoal}
                </p>
              </div>

              {/* Playstyle tip */}
              <div className="text-xs text-neutral-400">
                <span className="font-mono text-neutral-500">Estilo de pelea: </span>
                <span className="text-neutral-200">{selectedFighter.playstyle}</span>
              </div>

              {/* Special Moves */}
              <div className="space-y-2 pt-2 border-t border-[#1c2836]">
                <div className="font-mono text-xs text-neutral-400 font-bold uppercase tracking-wider">
                  Movimientos Especiales
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#0e1620] border border-[#1e2d3e] p-3 rounded-lg space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-neutral-200">{selectedFighter.special1.name}</span>
                      <span className="font-mono text-[10px] text-amber-400 bg-[#16212e] px-1.5 py-0.5 rounded border border-[#233549]">
                        {selectedFighter.special1.input}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-normal">{selectedFighter.special1.desc}</p>
                  </div>

                  <div className="bg-[#0e1620] border border-[#1e2d3e] p-3 rounded-lg space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-neutral-200">{selectedFighter.special2.name}</span>
                      <span className="font-mono text-[10px] text-amber-400 bg-[#16212e] px-1.5 py-0.5 rounded border border-[#233549]">
                        {selectedFighter.special2.input}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-normal">{selectedFighter.special2.desc}</p>
                  </div>
                </div>
              </div>

              {/* Super Move */}
              <div className="bg-[#0e1620] border border-[#1e2d3e] p-3.5 rounded-lg text-xs space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-amber-400">Súper Ataque: {selectedFighter.superMove.name}</span>
                  <span className="font-mono text-[10px] text-neutral-500">Cinemática</span>
                </div>
                <p className="text-neutral-300 text-[11px] leading-relaxed">
                  {selectedFighter.superMove.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
