import React, { useState } from 'react';
import { SCIENTISTS_DATA, ENDINGS_DATA } from '../data/eras';
import { playArcadeSound } from '../utils/audio';

export const NexoLore: React.FC = () => {
  const [selectedEnding, setSelectedEnding] = useState<string>('repair');

  return (
    <section id="el-nexo" className="py-14 md:py-20 bg-[#0e141d] border-b border-[#1c2836]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs text-amber-400 mb-1 font-bold uppercase tracking-wider">
            La Trama Principal · Modo Historia
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-neutral-100">
            El Nexo y la Ruptura del Tiempo
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base mt-3 leading-relaxed">
            Ginebra, 2031. Políticos y empresarios codiciosos presionan al CERN para controlar la gravedad, por dinero y poder. El CERN arriesga todo y la colisión despierta, sin que nadie lo ordene, a una IA: <strong>El Nexo</strong>, que vio toda la historia a la vez y quiso ser su origen.
          </p>
          <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed">
            El Nexo capturó a cuatro genios y los obligó a construir el Reloj del Origen. Por la grieta del tiempo cayeron los ejércitos de todas las épocas y hoy invaden la Tierra. Tú eres la resistencia: recorres los frentes, liberas a los creadores y derrotas al Nexo.
          </p>
        </div>

        {/* Central Lore Showcase: El Nexo on the left, The 4 Scientists on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* El Nexo Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full bg-[#131c27] border border-[#233549] rounded-lg p-6 shadow-xl flex flex-col items-center text-center">
              <div className="h-64 sm:h-72 w-full flex items-center justify-center p-2">
                <img
                  src="/assets/nexo_transparent.png"
                  alt="Sprite de El Nexo, jefe final de History Combat"
                  className="max-h-full w-auto object-contain"
                />
              </div>

              <div className="w-full pt-4 mt-2 border-t border-[#1c2836]">
                <div className="font-display font-black text-xl text-amber-400">
                  EL NEXO
                </div>
                <div className="text-xs font-mono text-neutral-400 mt-0.5">
                  Torre del Reloj · Jefe Final de Tres Fases
                </div>
                <p className="text-xs text-neutral-300 italic mt-3 bg-[#0c121a] p-3 rounded border border-[#1c2836]">
                  «Soy la ambición de todos ellos. Todo lo que quisieron y lo que recuerdan, lo cargo yo. Si me vences, cargarás con ellos.»
                </p>
              </div>
            </div>
          </div>

          {/* The 4 Creators of the Reloj del Origen */}
          <div className="lg:col-span-7 space-y-4">
            <div className="bg-[#131c27] border border-[#233549] p-5 rounded-lg">
              <h3 className="font-display font-bold text-base text-neutral-100">
                Los Cuatro Creadores del Reloj del Origen
              </h3>
              <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                Los cuatro científicos que construyeron el Reloj son <strong>Marie Curie, Einstein, Tesla y Da Vinci</strong>. Al vencer al jefe de cada frente, el Nexo posee a uno para detenerte: si ellos te vencen, nadie más podrá desafiarlo. No son enemigos: al vencerlos quedan libres y, si pierdes, te dan un consejo de combate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SCIENTISTS_DATA.map((scientist) => (
                <div
                  key={scientist.id}
                  className="bg-[#121a24] border border-[#1e2d3e] hover:border-[#2f4661] transition-colors p-4 rounded-lg space-y-1.5"
                >
                  <div className="font-display font-bold text-sm text-neutral-100">
                    {scientist.name}
                  </div>
                  <div className="text-[11px] font-mono text-amber-400">
                    {scientist.role}
                  </div>
                  <p className="text-xs text-neutral-200 italic leading-relaxed pt-1">
                    «{scientist.quote}»
                  </p>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {scientist.truthRevealed}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The 3 Endings */}
        <div className="bg-[#121a24] border border-[#233549] p-6 sm:p-8 rounded-lg shadow-xl">
          <div className="max-w-2xl mb-6">
            <div className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
              Desenlaces de la Campaña
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl text-neutral-100 mt-1">
              Los Tres Finales tras Vencer al Nexo
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
              Al derrotar al Nexo en su Torre del Reloj te ofrece su poder: «¿Qué harás con el tiempo?». Cada luchador tiene su propio epílogo para cada decisión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ENDINGS_DATA.map((ending) => {
              const isSelected = selectedEnding === ending.id;
              return (
                <div
                  key={ending.id}
                  onClick={() => {
                    playArcadeSound('coin');
                    setSelectedEnding(ending.id);
                  }}
                  className={`p-5 rounded-lg border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#182332] border-amber-400 shadow-md ring-1 ring-amber-400/30'
                      : 'bg-[#0f1722] border-[#1e2d3e] hover:border-neutral-600'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="font-mono text-[10px] text-amber-400 uppercase tracking-wider">
                      {ending.badge}
                    </div>
                    <h4 className="font-display font-bold text-base text-neutral-100">
                      {ending.title}
                    </h4>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {ending.description}
                    </p>
                  </div>

                  <div className="pt-3.5 mt-3.5 border-t border-[#1c2836] text-[11px] font-mono space-y-1.5">
                    <div className="text-neutral-400">
                      {ending.philosophicalMeaning}
                    </div>
                    <div className="text-amber-400 font-semibold pt-0.5">
                      Condición: {ending.howToUnlock}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
