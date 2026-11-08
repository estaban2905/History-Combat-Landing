import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Globe2, Swords, Users } from 'lucide-react';
import { DOWNLOAD_URL } from '../config';
import { ROSTER } from '../data/roster';
import { playArcadeSound } from '../utils/audio';

const SectionHead: React.FC<{ tag: string; title: string; children?: React.ReactNode }> = ({ tag, title, children }) => (
  <div className="max-w-3xl mb-8">
    <div className="font-mono text-xs text-amber-400 mb-1 font-bold uppercase tracking-wider">{tag}</div>
    <h2 className="font-display font-black text-2xl sm:text-3xl text-neutral-100">{title}</h2>
    {children && <p className="text-neutral-300 text-sm sm:text-base mt-2 leading-relaxed">{children}</p>}
  </div>
);

const PREVIEW_IDS = [
  'albert_einstein',
  'cleopatra',
  'napoleon',
  'juana_de_arco',
  'nikola_tesla',
  'leonardo_da_vinci',
  'julio_cesar',
  'marie_curie',
  'lautaro',
  'sun_tzu',
  'boudica',
  'isaac_newton',
];

/** Una muestra del plantel, con enlace a la página completa. */
export const RosterPreview: React.FC = () => {
  const items = PREVIEW_IDS.map((id) => ROSTER.find((r) => r.id === id)).filter((r): r is NonNullable<typeof r> => !!r);
  return (
    <section className="py-12 md:py-16 bg-[#0e141d] border-b border-[#1c2836]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHead tag="El plantel" title={`${ROSTER.length - 1} luchadores de todas las épocas`}>
          Sabios, héroes y villanos de la historia convertidos en luchadores de pixel art, cada uno con sus especiales y su ultimate.
        </SectionHead>
        <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {items.map((f) => (
            <li key={f.id}>
              <Link
                to="/plantel"
                className="group flex flex-col items-center p-2 rounded-lg border border-[#1e2d3e] bg-[#0f1722] hover:border-amber-400/60 hover:bg-[#15202d] transition-colors"
              >
                <div className="h-28 sm:h-32 w-full flex items-end justify-center">
                  <img
                    src={`/assets/roster/${f.id}.png`}
                    alt={f.name}
                    width={96}
                    height={128}
                    loading="lazy"
                    className="max-h-full w-auto object-contain transition-transform group-hover:-translate-y-1"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
                <span className="mt-1 w-full border-t border-[#1c2836] pt-1 text-center font-display font-bold text-xs leading-tight text-neutral-200 min-h-8 flex items-center justify-center">
                  {f.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <Link to="/plantel" className="inline-flex items-center min-h-11 px-5 rounded border border-amber-400/60 text-amber-300 hover:bg-amber-400 hover:text-neutral-950 font-display font-bold text-sm transition-colors">
            Ver todo el plantel →
          </Link>
        </div>
      </div>
    </section>
  );
};

const MODES = [
  { icon: Globe2, title: 'Modo Historia', text: 'Detén la invasión del Nexo en 4 frentes, con escenas con voz y 3 finales distintos.' },
  { icon: Users, title: 'Versus local', text: 'Dos jugadores en el mismo teclado o con dos mandos. Sin cuenta ni conexión.' },
  { icon: Swords, title: 'Duelo online', text: 'Ranking, ligas y temporadas. También salas privadas con amigos.' },
];

/** Los tres modos, en corto. */
export const ModesStrip: React.FC = () => (
  <section className="py-12 md:py-16 bg-[#0b0f15] border-b border-[#1c2836]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHead tag="Modos de juego" title="Solo, a dos o en línea" />
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {MODES.map(({ icon: Icon, title, text }) => (
          <li key={title} className="p-5 rounded-lg bg-[#121a24] border border-[#233549]">
            <Icon size={28} className="text-amber-400 mb-3" aria-hidden="true" />
            <h3 className="font-display font-bold text-lg text-neutral-100 mb-1">{title}</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">{text}</p>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link to="/modos" className="text-amber-400 underline underline-offset-4 text-sm font-semibold">
          Ver todos los detalles de los modos
        </Link>
      </div>
    </div>
  </section>
);

/** Teaser del jefe final. */
export const NexoTeaser: React.FC = () => (
  <section className="py-12 md:py-16 bg-[#0e141d] border-b border-[#1c2836]">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-12 gap-8 items-center">
      <div className="md:col-span-4 flex justify-center rounded-lg border border-[#233549] bg-[#131c27] p-6">
        <img
          src="/assets/nexo_transparent.png"
          alt="El Nexo, jefe final de History Combat"
          width={192}
          height={224}
          loading="lazy"
          className="h-44 sm:h-56 w-auto object-contain"
        />
      </div>
      <div className="md:col-span-8">
        <SectionHead tag="El jefe final" title="El Nexo y los tres finales">
          Una IA nacida de la colisión del CERN vio toda la historia a la vez y quiso ser su origen. Si la derrotas, te ofrece su poder y tú decides qué harás con el tiempo.
        </SectionHead>
        <p className="italic text-amber-300/90 text-sm sm:text-base border-l-2 border-amber-400 pl-4 mb-6">
          «Soy la ambición de todos ellos. Si me vences, cargarás con ellos.»
        </p>
        <Link to="/historia" className="inline-flex items-center min-h-11 px-5 rounded border border-amber-400/60 text-amber-300 hover:bg-amber-400 hover:text-neutral-950 font-display font-bold text-sm transition-colors">
          Conoce la historia →
        </Link>
      </div>
    </div>
  </section>
);

/** Cierre de la página con la descarga. */
export const FinalCta: React.FC = () => (
  <section className="py-14 md:py-20 bg-[#0b0f15] border-b border-[#1c2836] text-center">
    <div className="max-w-2xl mx-auto px-4 sm:px-6">
      <h2 className="font-display font-black text-2xl sm:text-4xl text-neutral-100">
        ¿Listo para <span className="text-amber-400">el Torneo de los Siglos</span>?
      </h2>
      <p className="text-neutral-300 text-sm sm:text-base mt-3">Gratis, para Windows, sin instalación.</p>
      <a
        href={DOWNLOAD_URL}
        download
        onClick={() => playArcadeSound('punch')}
        className="mt-6 inline-flex items-center justify-center gap-2 min-h-12 px-8 py-3 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-display font-bold text-base rounded shadow-md transition-all active:scale-[0.99]"
      >
        <Download size={20} aria-hidden="true" />
        Descargar gratis
      </a>
      <p className="mt-3 text-xs font-mono text-neutral-400">Windows 10/11 · ~115 MB · para mayores de 14 años</p>
    </div>
  </section>
);
