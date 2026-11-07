import React from 'react';
import { Link } from 'react-router-dom';
import { DownloadAndPlay } from '../components/DownloadAndPlay';
import { Faq } from '../components/Faq';
import { GameModes } from '../components/GameModes';
import { HowToPlay } from '../components/HowToPlay';
import { LegalSection } from '../components/LegalSection';
import { NexoLore } from '../components/NexoLore';
import { Ranking } from '../components/Ranking';
import { RosterShowcase } from '../components/RosterShowcase';
import { StoryAndEras } from '../components/StoryAndEras';

// Cada página reutiliza las secciones que ya existían; el título del navegador cambia con la página.
function usePageTitle(title: string) {
  React.useEffect(() => {
    document.title = `${title} · History Combat`;
  }, [title]);
}

export const StoryPage: React.FC = () => {
  usePageTitle('Historia');
  return (
    <>
      <StoryAndEras />
      <NexoLore />
    </>
  );
};

export const RosterPage: React.FC = () => {
  usePageTitle('Plantel');
  return <RosterShowcase />;
};

export const HowToPlayPage: React.FC = () => {
  usePageTitle('Cómo jugar');
  return <HowToPlay />;
};

export const ModesPage: React.FC = () => {
  usePageTitle('Modos de juego');
  return <GameModes />;
};

export const RankingPage: React.FC = () => {
  usePageTitle('Ranking online');
  return <Ranking />;
};

export const DownloadPage: React.FC = () => {
  usePageTitle('Jugar y descargar');
  return <DownloadAndPlay />;
};

export const FaqPage: React.FC = () => {
  usePageTitle('Preguntas frecuentes');
  return <Faq />;
};

export const LegalPage: React.FC = () => {
  usePageTitle('Información legal');
  return <LegalSection />;
};

export const NotFoundPage: React.FC = () => {
  usePageTitle('No encontrada');
  return (
    <div className="max-w-md mx-auto px-4 py-24 text-center space-y-4">
      <div className="font-display font-black text-5xl text-amber-400">404</div>
      <p className="text-neutral-300 text-sm">Esta página no existe o se movió de lugar.</p>
      <Link to="/" className="inline-block px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-display font-bold text-sm rounded">
        Volver al inicio
      </Link>
    </div>
  );
};
