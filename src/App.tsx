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
import { CombatControls } from './components/CombatControls';
import { DownloadAndPlay } from './components/DownloadAndPlay';
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

        {/* 3. Campaña Primero: El Nexo, los 4 científicos creadores y los 3 finales */}
        <NexoLore />

        {/* 4. Las 4 épocas en orden inverso hacia la grieta */}
        <StoryAndEras />

        {/* 5. Pantalla de Selección Arcade: 12 luchadores interactivos y datos reales */}
        <RosterShowcase />

        {/* 6. Controles y Mecánicas Arcade (WASD + UIJKOL) */}
        <CombatControls />

        {/* 7. Jugar en historycombat.cl y descarga PC */}
        <DownloadAndPlay />
      </main>

      {/* 8. Footer sobrio con aviso legal de parodia */}
      <Footer />
    </div>
  );
}
