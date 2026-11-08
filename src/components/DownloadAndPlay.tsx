import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DOWNLOAD_URL } from '../config';
import { playArcadeSound } from '../utils/audio';

export const DownloadAndPlay: React.FC = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <section id="descargar" className="py-14 md:py-20 bg-[#0e141d] border-b border-[#1c2836]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="font-mono text-xs text-amber-400 mb-1 font-bold uppercase tracking-wider">
            Descarga gratuita
          </div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-neutral-100">
            Juega gratis en tu PC con Windows
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm mt-2">
            Un solo archivo portable, sin instalación. El juego se actualiza solo al abrirlo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mb-8 max-w-md mx-auto">
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
                Ejecutable portable de un solo archivo, sin instalación.
              </p>
            </div>

            <button
              onClick={() => {
                playArcadeSound('coin');
                setDownloadModalOpen(true);
              }}
              className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-display font-bold text-xs sm:text-sm rounded text-center block transition-all active:scale-[0.99] shadow-md cursor-pointer"
            >
              Descargar .exe (~115 MB)
            </button>
          </div>
        </div>

        {/* Requirements snippet */}
        <div className="p-4 rounded-lg bg-[#0c121a] border border-[#1c2836] text-[11px] text-neutral-400 font-mono space-y-1">
          <div className="text-amber-400 font-bold uppercase tracking-wider">Requisitos</div>
          <div>Windows 10/11 de 64 bits, con teclado o mando.</div>
          <div>No apto para móviles (sin controles táctiles). Por ahora no hay versión para Mac ni Linux.</div>
        </div>
        <p className="mt-3 text-center text-[11px] text-neutral-500">
          Al jugar o crear una cuenta aceptas los <Link to="/legal#legal-terminos" className="text-amber-400 underline">Términos</Link> y la{' '}
          <Link to="/legal#legal-privacidad" className="text-amber-400 underline">Política de privacidad</Link>. Obra de ficción/parodia, para mayores de 14 años.
        </p>

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
                  href={DOWNLOAD_URL}
                  download
                  onClick={() => {
                    playArcadeSound('punch');
                    setDownloadModalOpen(false);
                  }}
                  className="py-3 px-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-display font-bold text-xs text-center rounded transition-all cursor-pointer"
                >
                  Descargar HistoryCombat.exe
                </a>
                <p className="text-[10px] text-neutral-500 leading-relaxed">
                  Si Windows muestra un aviso, pulsa «Más información» y luego «Ejecutar de todas formas».
                </p>
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
