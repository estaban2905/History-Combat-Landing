import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

/** Cada cambio de página vuelve arriba, salvo que la dirección traiga un #ancla (la maneja la propia página). */
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0 });
  }, [pathname, hash]);
  return null;
};

export const SiteLayout: React.FC = () => (
  <div className="min-h-screen bg-[#0b0f15] text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-black">
    <ScrollToTop />
    <a
      href="#contenido"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:bg-amber-400 focus:text-neutral-950 focus:font-bold"
    >
      Saltar al contenido
    </a>
    <Header />
    <main id="contenido" tabIndex={-1} className="flex-1 outline-none">
      <Outlet />
    </main>
    <Footer />
  </div>
);
