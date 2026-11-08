import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { playArcadeSound } from '../utils/audio';

const SHOTS: { file: string; title: string; alt: string }[] = [
  { file: 'napoleon-vs-cesar', title: 'Napoleón vs Julio César', alt: 'Napoleón y Julio César combatiendo frente a dos ejércitos' },
  { file: 'tesla-vs-curie', title: 'Tesla vs Curie', alt: 'Nikola Tesla y Marie Curie peleando bajo rayos en una torre' },
  { file: 'alejandro-vs-cleopatra', title: 'Alejandro vs Cleopatra', alt: 'Alejandro Magno y Cleopatra frente a Anubis' },
  { file: 'despertar-del-nexo', title: 'El despertar del Nexo', alt: 'Escena de la historia: el Nexo asimila la memoria humana' },
  { file: 'egipto', title: 'Egipto alza sus pirámides', alt: 'Cleopatra frente a pirámides sobre una ciudad moderna' },
  { file: 'heroes', title: 'La resistencia', alt: 'Cinco luchadores de la resistencia frente a una luz del Nexo' },
];

/** Galería de capturas con visor ampliado (teclado: flechas y Esc). */
export const Gallery: React.FC = () => {
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const open = (i: number) => {
    lastTrigger.current = document.activeElement as HTMLElement | null;
    playArcadeSound('coin');
    setIndex(i);
  };
  const close = useCallback(() => {
    setIndex(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback((d: number) => setIndex((i) => (i === null ? i : (i + d + SHOTS.length) % SHOTS.length)), []);

  useEffect(() => {
    if (index === null) return;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [index, close, step]);

  const current = index === null ? null : SHOTS[index];

  return (
    <section className="py-12 md:py-16 bg-[#0e141d] border-b border-[#1c2836]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mb-8">
          <div className="font-mono text-xs text-amber-400 mb-1 font-bold uppercase tracking-wider">Galería</div>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-neutral-100">Capturas del juego</h2>
          <p className="text-neutral-300 text-sm sm:text-base mt-2 leading-relaxed">
            Escenarios, duelos y escenas de la historia, tomados del propio juego. Toca una imagen para verla en grande.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SHOTS.map((s, i) => (
            <li key={s.file}>
              <button
                type="button"
                onClick={() => open(i)}
                aria-label={`Ampliar: ${s.title}`}
                className="group relative block w-full overflow-hidden rounded-lg border border-[#233549] bg-black cursor-pointer hover:border-amber-400/60 transition-colors"
              >
                <img
                  src={`/assets/media/gallery/${s.file}.webp`}
                  alt={s.alt}
                  width={1280}
                  height={720}
                  loading="lazy"
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute inset-x-0 bottom-0 px-3 py-2 bg-gradient-to-t from-black/90 to-transparent text-left font-display font-bold text-sm text-neutral-100">
                  {s.title}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-3 sm:p-6"
          onClick={(e) => e.target === e.currentTarget && close()}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Cerrar galería"
            className="absolute top-3 right-3 inline-flex items-center justify-center w-11 h-11 rounded bg-[#101722] border border-[#2a3f5a] text-neutral-100 hover:bg-[#1a2636] cursor-pointer"
          >
            <X size={22} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Imagen anterior"
            className="absolute left-4 bottom-6 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded bg-[#101722]/90 border border-[#2a3f5a] text-neutral-100 hover:bg-[#1a2636] cursor-pointer"
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Imagen siguiente"
            className="absolute right-4 bottom-6 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 inline-flex items-center justify-center w-11 h-11 rounded bg-[#101722]/90 border border-[#2a3f5a] text-neutral-100 hover:bg-[#1a2636] cursor-pointer"
          >
            <ChevronRight size={24} aria-hidden="true" />
          </button>
          <figure className="max-w-5xl w-full sm:px-16">
            <img
              src={`/assets/media/gallery/${current.file}.webp`}
              alt={current.alt}
              className="w-full max-h-[70vh] object-contain rounded-lg border border-[#233549]"
            />
            <figcaption className="mt-3 text-center font-display font-bold text-neutral-100">
              {current.title} <span className="font-mono text-xs text-neutral-400">· {(index ?? 0) + 1} / {SHOTS.length}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
};
