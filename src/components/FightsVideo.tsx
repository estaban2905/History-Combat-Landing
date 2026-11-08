import React from 'react';

export const FightsVideo: React.FC = () => {
  return (
    <section id="peleas" className="py-14 md:py-20 bg-[#0b0f15] border-b border-[#1c2836]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-8">
          <div className="font-mono text-xs text-amber-400 mb-1 font-bold uppercase tracking-wider">
            Combate Real
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-neutral-100">
            Así se pelea en History Combat
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed">
            Cuatro duelos grabados directamente del juego, con la CPU contra sí misma: combos, bloqueos perfectos, counters, ultimates y K.O. Einstein contra Hitler, Napoleón contra César, Tesla contra Curie y Alejandro contra Cleopatra.
          </p>
        </div>

        <div className="bg-[#121a24] border border-[#233549] rounded-lg overflow-hidden shadow-2xl max-w-4xl">
          <div className="aspect-video bg-black">
            <video
              src="/assets/media/peleas.mp4"
              poster="/assets/media/captura-ingame.png"
              controls
              playsInline
              preload="none"
              className="w-full h-full object-contain"
            >
              Tu navegador no soporta la reproducción de video.
            </video>
          </div>
          <div className="p-3 bg-[#0e1620] border-t border-[#1c2836] text-[11px] font-mono text-neutral-500">
            Metraje real del juego · sin trucos de edición
          </div>
        </div>
      </div>
    </section>
  );
};
