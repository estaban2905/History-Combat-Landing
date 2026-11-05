import React, { useState } from 'react';
import { playArcadeSound } from '../utils/audio';

export const DownloadAndPlay: React.FC = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <section id="descargar" className="py-14 md:py-20 bg-[#0e141d] border-b border-[#1c2836]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="font-mono text-xs text-amber-400 mb-1 font-bold uppercase tracking-wider">
            Acceso Inmediato
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-neutral-100">
            Juega Gratis en Navegador o en PC
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-2">
            Disponible para jugar al instante en la web oficial o mediante paquete portable para Windows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {/* Web card */}
          <div className="p-6 rounded-lg border border-[#2e445d] bg-[#121a24] flex flex-col justify-between shadow-xl space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-[10px] text-amber-400 uppercase tracking-wider">Navegador Web</span>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                  En línea
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-neutral-100 mb-1">
                historycombat.cl
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Sin descargas ni esperas. Carga directa a través de WebAssembly en Godot 4. Pensado para Chrome, Firefox y Edge en ordenador con teclado.
              </p>
            </div>

            <a
              href="https://historycombat.cl"
              target="_blank"
              rel="noreferrer"
              onClick={() => playArcadeSound('punch')}
              className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-display font-bold text-xs sm:text-sm rounded text-center block transition-all active:scale-[0.99] shadow-md cursor-pointer"
            >
              Abrir en historycombat.cl →
            </a>
          </div>

          {/* PC Desktop card */}
          <div className="p-6 rounded-lg border border-[#1e2d3e] bg-[#101722] flex flex-col justify-between shadow-xl space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">Windows PC</span>
                <span className="font-mono text-[10px] text-neutral-300 bg-[#16212e] px-2 py-0.5 rounded border border-[#2a3f5a]">
                  Standalone .exe
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-neutral-100 mb-1">
                Descarga para PC
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Versión ejecutable portable para Windows 10 y 11. Ejecutable único, sin instalación.
              </p>
            </div>

            <button
              onClick={() => {
                playArcadeSound('coin');
                setDownloadModalOpen(true);
              }}
              className="w-full py-3.5 bg-[#1a2636] hover:bg-[#233549] text-neutral-200 border border-[#2a3f5a] font-display font-semibold text-xs sm:text-sm rounded text-center block transition-all cursor-pointer"
            >
              Descargar .exe (~115 MB)
            </button>
          </div>
        </div>

        {/* Requirements snippet */}
        <div className="p-4 rounded-lg bg-[#0c121a] border border-[#1c2836] text-[11px] text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono">
          <span>Requisitos: ordenador con teclado y navegador con WebGL 2.0 / PC con Windows 64-bit. No hay controles táctiles: no apto para móviles.</span>
          <span className="text-neutral-400 font-semibold">Motor Godot 4</span>
        </div>

        {/* Modal */}
        {downloadModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
            <div className="bg-[#121a24] border border-[#2a3f5a] max-w-sm w-full rounded-lg p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-[#1c2836] pb-2">
                <span className="font-mono text-xs text-amber-400 font-bold uppercase">Descarga de Escritorio</span>
                <button
                  onClick={() => setDownloadModalOpen(false)}
                  className="font-mono text-sm text-neutral-400 hover:text-white cursor-pointer px-1"
                >
                  ✕
                </button>
              </div>

              <h4 className="font-display font-bold text-lg text-neutral-100">
                History Combat v0.1 (Early Access)
              </h4>

              <p className="text-xs text-neutral-300 leading-relaxed">
                Versión portable para Windows: un único archivo .exe que se ejecuta directamente, sin instalar nada.
              </p>

              <div className="p-3 bg-[#0c121a] rounded border border-[#1c2836] text-xs font-mono text-neutral-400 space-y-1">
                <div>Archivo: <strong className="text-neutral-200">HistoryCombat.exe</strong></div>
                <div>Tamaño: <strong className="text-neutral-200">~115 MB</strong></div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href="https://historycombat.cl"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => {
                    playArcadeSound('punch');
                    setDownloadModalOpen(false);
                  }}
                  className="py-3 px-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-display font-bold text-xs text-center rounded transition-all cursor-pointer"
                >
                  Descargar desde historycombat.cl
                </a>
                <button
                  onClick={() => setDownloadModalOpen(false)}
                  className="text-xs text-neutral-400 hover:text-neutral-200 py-1 cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
