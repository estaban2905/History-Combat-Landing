import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GAME_URL } from '../config';
import { playArcadeSound } from '../utils/audio';


export const Hero: React.FC = () => {
  const [activeMediaTab, setActiveMediaTab] = useState<'video' | 'screenshot'>('video');

  return (
    <section id="inicio" className="pt-8 pb-14 md:pt-12 md:pb-20 bg-[#0b0f15] border-b border-[#1c2836]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Steam-style breadcrumb / status bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-[#1c2836] text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold uppercase tracking-wider">Acceso Anticipado</span>
            <span className="text-neutral-600">·</span>
            <span className="text-neutral-300">v0.1 Beta Pública</span>
            <span className="text-neutral-600">·</span>
            <span>Godot Engine 4</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <span>Servidores: </span>
            <span className="text-emerald-400 font-bold">En línea</span>
          </div>
        </div>

        {/* Two-Column Steam Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Media Player (Video trailer / Real screenshot) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="bg-[#121a24] border border-[#233549] rounded-lg overflow-hidden shadow-2xl">
              {/* Media viewport */}
              <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
                {activeMediaTab === 'video' ? (
                  <video
                    key="trailer-video"
                    src="/assets/media/trailer.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-contain"
                  >
                    <source src="/assets/media/trailer.mp4" type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                  </video>
                ) : (
                  <img
                    src="/assets/media/captura-ingame.png"
                    alt="Combate in-game en Godot 4: Albert Einstein contra Adolf Hitler"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Media selector switcher (Steam style thumbnails) */}
              <div className="p-3 bg-[#0e1620] border-t border-[#1c2836] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      playArcadeSound('coin');
                      setActiveMediaTab('video');
                    }}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                      activeMediaTab === 'video'
                        ? 'bg-[#2a3f5a] text-amber-300 border border-amber-400/50 shadow-sm'
                        : 'bg-[#15202c] text-neutral-400 border border-[#223345] hover:text-neutral-200'
                    }`}
                  >
                    <span>▶ Ver Tráiler</span>
                  </button>

                  <button
                    onClick={() => {
                      playArcadeSound('coin');
                      setActiveMediaTab('screenshot');
                    }}
                    className={`px-3 py-1.5 rounded text-xs font-medium transition-all flex items-center gap-2 cursor-pointer ${
                      activeMediaTab === 'screenshot'
                        ? 'bg-[#2a3f5a] text-amber-300 border border-amber-400/50 shadow-sm'
                        : 'bg-[#15202c] text-neutral-400 border border-[#223345] hover:text-neutral-200'
                    }`}
                  >
                    <span>Captura In-Game (Einstein vs Hitler)</span>
                  </button>
                </div>

                <span className="text-[11px] font-mono text-neutral-500 hidden sm:inline">
                  Cinemática real del juego
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Game Pitch & Call to Actions */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <h1 className="font-display font-black text-3xl sm:text-4xl text-neutral-100 tracking-tight leading-tight">
                History Combat: <br />
                <span className="text-amber-400">El Torneo de los Siglos</span>
              </h1>
              <div className="text-xs text-neutral-400 font-mono mt-1">
                Lucha 2D Arcade · 1 contra 1 · Pixel Art · Parodia Histórica
              </div>
            </div>

            {/* Natural game pitch */}
            <p className="text-neutral-300 text-sm leading-relaxed">
              Una IA llamada <strong>el Nexo</strong> abre una grieta en el tiempo y los ejércitos de todas las épocas invaden la Tierra. Eres la resistencia: pelea con figuras históricas, combos, bloqueos perfectos y ultimates, solo, a dos o en línea.
            </p>

            {/* Steam-style buy / play module */}
            <div className="bg-[#121a24] border border-[#233549] p-4 rounded-lg space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-400">Acceso al juego:</span>
                <span className="text-emerald-400 font-bold">100% Gratuito</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                <a
                  href={GAME_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playArcadeSound('punch')}
                  className="flex-1 py-3 px-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-display font-bold text-xs sm:text-sm text-center rounded transition-all active:scale-[0.99] shadow-md cursor-pointer"
                >
                  Jugar Gratis en Navegador
                </a>

                <Link
                  to="/descargar"
                  onClick={() => playArcadeSound('coin')}
                  className="py-3 px-4 bg-[#1a2636] hover:bg-[#233549] text-neutral-200 border border-[#2e445d] font-display font-semibold text-xs sm:text-sm rounded transition-all cursor-pointer whitespace-nowrap text-center"
                >
                  Descargar para PC (.exe)
                </Link>
              </div>

            </div>

            {/* Specs row */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono text-neutral-400">
              <div className="bg-[#0e1620] border border-[#1c2836] p-2 rounded">
                <div className="text-neutral-200 font-bold">57</div>
                <div className="text-[10px] text-neutral-500">Luchadores + El Nexo</div>
              </div>
              <div className="bg-[#0e1620] border border-[#1c2836] p-2 rounded">
                <div className="text-neutral-200 font-bold">4</div>
                <div className="text-[10px] text-neutral-500">Frentes · 3 finales</div>
              </div>
              <div className="bg-[#0e1620] border border-[#1c2836] p-2 rounded">
                <div className="text-neutral-200 font-bold">Online</div>
                <div className="text-[10px] text-neutral-500">Duelo 1v1 · Ranking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
