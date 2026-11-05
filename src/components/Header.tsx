import React from 'react';
import { playArcadeSound } from '../utils/audio';

interface HeaderProps {
  onPlayClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onPlayClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-[#0e141d]/95 backdrop-blur-md border-b border-[#1c2836]">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Wordmark */}
        <a 
          href="#inicio" 
          onClick={() => playArcadeSound('coin')}
          className="font-display font-black text-base sm:text-lg tracking-tight text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
        >
          <span>HISTORY COMBAT</span>
        </a>

        {/* Zone 2: Navigation Links (Campaign first) */}
        <nav className="hidden md:flex items-center gap-7 text-xs sm:text-sm font-medium text-neutral-300">
          <a 
            href="#el-nexo" 
            className="hover:text-amber-400 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            El Nexo
          </a>
          <a 
            href="#epocas" 
            className="hover:text-amber-400 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Épocas
          </a>
          <a 
            href="#plantel" 
            className="hover:text-amber-400 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Plantel
          </a>
          <a 
            href="#combate" 
            className="hover:text-amber-400 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Combate
          </a>
          <a 
            href="#descargar" 
            className="hover:text-amber-400 hover:underline underline-offset-8 transition-colors whitespace-nowrap shrink-0"
          >
            Jugar
          </a>
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://historycombat.cl"
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              playArcadeSound('punch');
              onPlayClick();
            }}
            className="py-2 px-4 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-display font-bold text-xs rounded transition-all active:scale-[0.98] shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            Jugar gratis
          </a>
        </div>
      </div>
    </header>
  );
};
