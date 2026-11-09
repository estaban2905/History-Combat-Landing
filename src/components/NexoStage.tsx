import React from 'react';

/** Rayos del Nexo: caminos irregulares que caen desde arriba hacia el luchador. */
const BOLTS: { d: string; delay: string; dur: string }[] = [
  { d: 'M30 0 L44 38 L28 52 L52 96 L38 108 L64 150', delay: '0s', dur: '4.2s' },
  { d: 'M172 0 L156 34 L170 50 L146 92 L158 104 L132 148', delay: '1.3s', dur: '5s' },
  { d: 'M100 0 L92 30 L108 46 L90 84 L104 96', delay: '2.4s', dur: '3.6s' },
  { d: 'M0 70 L26 82 L18 98 L46 112 L40 124', delay: '3.1s', dur: '4.6s' },
  { d: 'M200 80 L174 94 L182 108 L156 120', delay: '0.7s', dur: '5.4s' },
];

/**
 * Escenario del Nexo: fondo violeta con la grieta del tiempo, un reloj que gira, rayos que parpadean
 * y un suelo de rejilla. Todo decorativo (aria-hidden); la imagen conserva su texto alternativo.
 */
export const NexoStage: React.FC<{ className?: string; imgClassName?: string }> = ({
  className = '',
  imgClassName = 'h-48 sm:h-56',
}) => (
  <div
    className={`hc-nexo-stage relative isolate overflow-hidden rounded-lg border border-fuchsia-500/30 ${className}`}
    style={{
      background:
        'radial-gradient(ellipse 70% 55% at 50% 42%, #5b21b6 0%, #2e1065 38%, #12072b 70%, #07030f 100%)',
    }}
  >
    {/* Reloj del Origen: anillo con marcas, girando despacio */}
    <svg aria-hidden="true" viewBox="0 0 200 200" className="hc-nexo-clock absolute left-1/2 top-[42%] w-[130%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-30">
      <circle cx="100" cy="100" r="92" fill="none" stroke="#c084fc" strokeWidth="0.8" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="#a855f7" strokeWidth="0.5" strokeDasharray="2 5" />
      {Array.from({ length: 12 }).map((_, i) => (
        <line
          key={i}
          x1="100"
          y1="10"
          x2="100"
          y2={i % 3 === 0 ? 24 : 17}
          stroke="#e9d5ff"
          strokeWidth={i % 3 === 0 ? 2 : 1}
          transform={`rotate(${i * 30} 100 100)`}
        />
      ))}
    </svg>

    {/* Suelo de rejilla en perspectiva */}
    <div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 h-1/3 opacity-60"
      style={{
        backgroundImage:
          'linear-gradient(rgba(216,180,254,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(216,180,254,.35) 1px, transparent 1px)',
        backgroundSize: '100% 14px, 28px 100%',
        transform: 'perspective(160px) rotateX(58deg)',
        transformOrigin: 'bottom',
        maskImage: 'linear-gradient(to top, #000 10%, transparent)',
        WebkitMaskImage: 'linear-gradient(to top, #000 10%, transparent)',
      }}
    />

    {/* Rayos */}
    <svg aria-hidden="true" viewBox="0 0 200 260" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="hc-bolt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#d946ef" />
        </linearGradient>
      </defs>
      {BOLTS.map((b, i) => (
        <g key={i} className="hc-bolt" style={{ animationDelay: b.delay, animationDuration: b.dur }}>
          <path d={b.d} fill="none" stroke="#a855f7" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round" opacity="0.35" />
          <path d={b.d} fill="none" stroke="url(#hc-bolt)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
        </g>
      ))}
    </svg>

    {/* Resplandor tras el jefe */}
    <div
      aria-hidden="true"
      className="absolute left-1/2 top-[48%] h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
      style={{ background: 'radial-gradient(circle, rgba(232,121,249,.55), transparent 65%)' }}
    />

    <div className="relative z-10 flex items-end justify-center px-4 pb-4 pt-6">
      <img
        src="/assets/nexo_transparent.png"
        alt="El Nexo, jefe final de History Combat"
        width={192}
        height={224}
        loading="lazy"
        className={`hc-nexo-float w-auto object-contain ${imgClassName}`}
        style={{ imageRendering: 'pixelated', filter: 'drop-shadow(0 0 14px rgba(217,70,239,.75)) drop-shadow(0 6px 0 rgba(0,0,0,.5))' }}
      />
    </div>
  </div>
);
