import React from 'react';
import { Link } from 'react-router-dom';

const FAQ: { q: string; a: React.ReactNode }[] = [
  { q: '¿Es gratis?', a: 'Sí. Se juega gratis en el navegador y la versión de Windows también se descarga sin costo.' },
  { q: '¿Necesito una cuenta?', a: 'No para jugar. La historia y el versus local funcionan sin cuenta. La cuenta se usa para el ranking, los amigos, el perfil y para guardar la historia en la nube.' },
  { q: '¿Puedo jugar con mando?', a: 'Sí, con mandos tipo PlayStation, Xbox o genéricos. Si algún botón no coincide, usa el asistente de calibración (F10). Mira la guía en «Cómo jugar».' },
  { q: '¿Funciona en el celular?', a: 'Todavía no: no hay controles táctiles. Usa un ordenador con teclado o con mando.' },
  { q: '¿Qué navegadores sirven?', a: 'Chrome, Firefox y Edge de escritorio, con WebGL 2.0.' },
  { q: '¿Hay versión para Mac o Linux?', a: 'Por ahora solo hay descarga para Windows de 64 bits. En Mac y Linux, juega en el navegador.' },
  { q: '¿Se guarda mi partida?', a: 'Sí. El Modo Historia se guarda sola, una partida por luchador, en tu navegador o equipo. Con cuenta también se guarda en la nube.' },
  { q: '¿Cuántos luchadores hay y cómo se desbloquean?', a: 'Hay 57 luchadores más El Nexo. 29 están disponibles desde el inicio; los villanos y los cuatro creadores del Reloj se desbloquean en el Modo Historia.' },
  { q: '¿Es un juego terminado?', a: 'No: está en acceso anticipado (v0.1). El equilibrio de los luchadores y varias funciones aún se están ajustando.' },
  {
    q: '¿Cómo borro mi cuenta o contacto al equipo?',
    a: (
      <>
        Escribe a <a className="text-amber-400 underline" href="mailto:contacto@historycombat.cl">contacto@historycombat.cl</a>. Los detalles están en la{' '}
        <Link to="/legal#legal-privacidad" className="text-amber-400 underline">política de privacidad</Link>.
      </>
    ),
  },
];

export const Faq: React.FC = () => (
  <section id="faq" className="py-14 md:py-20 bg-[#0e141d] border-b border-[#1c2836]">
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <div className="mb-8">
        <div className="font-mono text-xs text-amber-400 mb-1 font-bold uppercase tracking-wider">Preguntas frecuentes</div>
        <h2 className="font-display font-black text-2xl sm:text-3xl text-neutral-100">Antes de jugar</h2>
      </div>
      <div className="space-y-2">
        {FAQ.map(item => (
          <details key={item.q} className="group rounded-lg bg-[#121a24] border border-[#233549] open:border-amber-400/40">
            <summary className="cursor-pointer list-none p-4 flex items-center justify-between gap-3 font-display font-semibold text-sm text-neutral-100">
              {item.q}
              <span className="font-mono text-amber-400 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <div className="px-4 pb-4 text-xs text-neutral-300 leading-relaxed">{item.a}</div>
          </details>
        ))}
      </div>
    </div>
  </section>
);
