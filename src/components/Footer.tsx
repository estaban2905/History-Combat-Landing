import React from 'react';
import { Link } from 'react-router-dom';
import { playArcadeSound } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playArcadeSound('coin');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080d14] border-t border-[#1c2836] text-neutral-400 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Top footer row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#1c2836]">
          <div className="flex items-center gap-3">
            <span className="font-display font-black text-sm sm:text-base text-amber-400">
              HISTORY COMBAT
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              El Torneo de los Siglos
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs">
            <Link to="/historia" className="hover:text-amber-400 transition-colors">Historia</Link>
            <Link to="/plantel" className="hover:text-amber-400 transition-colors">Plantel</Link>
            <Link to="/como-jugar" className="hover:text-amber-400 transition-colors">Cómo jugar</Link>
            <Link to="/modos" className="hover:text-amber-400 transition-colors">Modos</Link>
            <Link to="/ranking" className="hover:text-amber-400 transition-colors">Ranking</Link>
            <Link to="/descargar" className="hover:text-amber-400 transition-colors">Descargar</Link>
            <Link to="/faq" className="hover:text-amber-400 transition-colors">Preguntas</Link>
            <Link to="/legal#legal-terminos" className="hover:text-amber-400 transition-colors">Términos</Link>
            <Link to="/legal#legal-privacidad" className="hover:text-amber-400 transition-colors">Privacidad</Link>
            <Link to="/legal#legal-licencias" className="hover:text-amber-400 transition-colors">Licencias</Link>
          </div>

          <button
            onClick={scrollToTop}
            className="text-xs font-mono text-neutral-400 hover:text-amber-400 transition-colors cursor-pointer"
          >
            ↑ Volver arriba
          </button>
        </div>

        {/* Mandatory Legal Parody Disclaimer */}
        <div className="p-4 rounded-lg bg-[#0c121a] border border-[#1c2836] text-xs leading-relaxed text-neutral-400 space-y-1">
          <div className="font-mono text-amber-400 font-bold uppercase text-[10px] tracking-wider">
            Aviso Legal
          </div>
          <p className="italic">
            «Parodia de ficción. Los personajes son caricaturas de figuras históricas y públicas; ninguno ha participado ni respaldado este juego.»
          </p>
          <p>
            Para mayores de 14 años. Violencia estilizada de fantasía. <Link to="/legal" className="text-amber-400 underline">Ver avisos legales, privacidad y licencias</Link>.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-neutral-500 font-mono">
          <div>
            © {new Date().getFullYear()} History Combat · Desarrollado con Godot Engine 4
          </div>
          <div>
            historycombat.cl
          </div>
        </div>
      </div>
    </footer>
  );
};
