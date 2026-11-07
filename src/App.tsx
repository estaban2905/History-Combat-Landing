/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { NexoLore } from './components/NexoLore';
import { StoryAndEras } from './components/StoryAndEras';
import { RosterShowcase } from './components/RosterShowcase';
import { FightsVideo } from './components/FightsVideo';
import { HowToPlay } from './components/HowToPlay';
import { GameModes } from './components/GameModes';
import { Faq } from './components/Faq';
import { DownloadAndPlay } from './components/DownloadAndPlay';
import { LegalSection } from './components/LegalSection';
import { Footer } from './components/Footer';

export default function App() {
  const scrollToDownload = () => {
    const el = document.getElementById('descargar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open('https://historycombat.cl', '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f15] text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-black">
      {/* 1. Header con estilo Steam y navegación limpia */}
      <Header onPlayClick={scrollToDownload} />

      <main className="flex-1">
        {/* 2. Hero: Showcase estilo Steam con reproductor de video / captura real in-game */}
        <Hero
          onPlayClick={scrollToDownload}
          onDownloadClick={scrollToDownload}
        />

        {/* 3. Historia: la premisa, los 4 frentes con su jefe y su creador */}
        <StoryAndEras />

        {/* 4. El Nexo y los 3 finales */}
        <NexoLore />

        {/* 5. Plantel: carrusel infinito y fichas */}
        <RosterShowcase />

        {/* 6. Video de peleas reales */}
        <FightsVideo />

        {/* 7. Cómo jugar: teclado, mando y técnicas */}
        <HowToPlay />

        {/* 8. Modos de juego: historia, versus local y online */}
        <GameModes />

        {/* 9. Jugar en historycombat.cl, descarga PC y requisitos */}
        <DownloadAndPlay />

        {/* 10. Preguntas frecuentes */}
        <Faq />

        {/* 8. Avisos legales: ficción, términos, privacidad, borrado de cuenta, licencias */}
        <LegalSection />
      </main>

      {/* 8. Footer sobrio con aviso legal de parodia */}
      <Footer />
    </div>
  );
}
