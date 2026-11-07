import React from 'react';

// ⚠️ Confirma estos datos antes de publicar (se usan en todos los textos de abajo).
const CONTACT_EMAIL = 'contacto@historycombat.cl';
const SITE = 'historycombat.cl';
const LAST_UPDATE = '6 de noviembre de 2026';

interface Block {
  id: string;
  title: string;
  body: React.ReactNode;
}

const P: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed">{children}</p>
);
const UL: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-[13px] text-neutral-300 leading-relaxed">{children}</ul>
);
const H: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h4 className="font-mono text-[11px] uppercase tracking-wider text-amber-400 pt-2">{children}</h4>
);

const BLOCKS: Block[] = [
  {
    id: 'ficcion',
    title: 'Aviso de ficción y parodia',
    body: (
      <>
        <P>
          History Combat es una <strong>obra de ficción y parodia</strong>. Los luchadores son caricaturas
          pixel-art inspiradas en figuras históricas y públicas, enfrentadas en un torneo imposible entre épocas.
        </P>
        <UL>
          <li>Ninguna de las personas representadas, vivas o fallecidas, ni sus familias, instituciones o
            representantes, ha participado, autorizado, patrocinado o respaldado este juego.</li>
          <li>Los diálogos, frases, voces y situaciones son <strong>inventados</strong> para el juego. No son
            citas textuales ni declaraciones reales de nadie, y las voces son sintéticas (no son las voces de las
            personas reales).</li>
          <li>El juego <strong>no glorifica ni hace apología</strong> de dictaduras, genocidio, terrorismo,
            narcotráfico, odio ni violencia contra personas reales. Figuras como Hitler, Stalin, Bin Laden o Escobar
            aparecen como antagonistas de una historia que las enfrenta a la humanidad, nunca como modelos a seguir.</li>
          <li>Se emplean figuras religiosas y espirituales (por ejemplo Buda, el Dalai Lama o Jesús de Nazaret) con
            respeto y sin ánimo de ofender creencias. Si algún representado o su titular de derechos considera que
            hay un uso indebido, puede pedir su revisión o retiro (ver «Reclamos»).</li>
          <li>Los datos históricos son una versión simplificada con fines de entretenimiento y pueden contener
            errores. No sustituyen una fuente académica.</li>
          <li>El juego contiene violencia estilizada de fantasía (combate arcade sin sangre ni realismo gráfico).</li>
        </UL>
      </>
    ),
  },
  {
    id: 'terminos',
    title: 'Términos de uso',
    body: (
      <>
        <P>Última actualización: {LAST_UPDATE}. Al jugar o crear una cuenta en {SITE} aceptas estos términos.</P>
        <H>Quién puede jugar</H>
        <UL>
          <li>El sitio y el juego están dirigidos a personas de <strong>14 años o más</strong>. Si tienes entre 14 y
            17 años, usa el juego con conocimiento de tu madre, padre o tutor.</li>
          <li>No creamos cuentas a sabiendas a menores de 14 años. Si descubrimos una, la eliminaremos.</li>
          <li>Al crear una cuenta debes marcar la casilla «Acepto términos y tengo +14 años»; guardamos la fecha en que
            la aceptaste.</li>
          <li>Se puede jugar sin cuenta (modos locales); la cuenta solo es necesaria para el modo online, ranking
            y guardado en la nube.</li>
        </UL>
        <H>Tu cuenta</H>
        <UL>
          <li>Eres responsable de tu contraseña y de lo que ocurra con tu cuenta. Una persona, una cuenta.</li>
          <li>El nombre de usuario no puede suplantar a otra persona, ser ofensivo, discriminatorio ni infringir
            derechos de terceros. Podemos cambiarlo o suspender la cuenta si ocurre.</li>
        </UL>
        <H>Conducta</H>
        <UL>
          <li>Prohibido hacer trampa (modificar el cliente, explotar errores, manipular el ranking, forzar
            desconexiones o desincronizaciones), usar bots, atacar el servidor o intentar acceder a datos ajenos.</li>
          <li>Prohibido el acoso, el odio y el contenido ilegal en nombres de usuario o cualquier campo público.</li>
          <li>Podemos suspender o eliminar cuentas, reiniciar puntuaciones y anular partidas que incumplan estas
            reglas, con o sin aviso previo según la gravedad.</li>
        </UL>
        <H>Propiedad intelectual</H>
        <UL>
          <li>El código, arte pixel-art, música, efectos, textos y marca «History Combat» son de sus autores. Se
            concede una licencia personal, no exclusiva, intransferible y revocable para jugar. No puedes
            redistribuir, vender, descompilar para uso comercial ni explotar el juego, salvo lo permitido por ley.</li>
          <li>Se permite grabar y compartir gameplay (streams, videos) citando el juego.</li>
          <li>Los componentes de terceros mantienen sus propias licencias (ver «Licencias de terceros»).</li>
        </UL>
        <H>Disponibilidad y responsabilidad</H>
        <UL>
          <li>El juego está en <strong>acceso anticipado (v0.1)</strong> y se ofrece «tal cual». Puede tener errores,
            cortes del servidor online, reinicios de ranking o pérdida de progreso.</li>
          <li>El juego es gratuito. No hay compras. Si esto cambiara, se avisará con antelación y se respetarán los
            derechos del consumidor (Ley 19.496).</li>
          <li>Salvo lo que la ley no permita excluir, no respondemos por daños indirectos derivados del uso del
            juego. La descarga para Windows no está firmada digitalmente: Windows SmartScreen puede mostrar una
            advertencia; descárgalo solo desde {SITE}.</li>
        </UL>
        <H>Cambios y ley aplicable</H>
        <P>
          Podemos actualizar estos términos; la fecha de arriba indica la última versión. Se rigen por la ley de la
          República de Chile y los tribunales competentes de Chile, sin perjuicio de los derechos que la ley te
          reconozca como consumidor en tu país.
        </P>
      </>
    ),
  },
  {
    id: 'privacidad',
    title: 'Política de privacidad',
    body: (
      <>
        <P>
          Última actualización: {LAST_UPDATE}. Responsable del tratamiento: el equipo de History Combat
          ({CONTACT_EMAIL}). Aplicamos la Ley 19.628 de Chile (y la Ley 21.719 cuando entre en vigencia) y, para
          usuarios de la Unión Europea, los principios del RGPD.
        </P>
        <H>Qué datos tratamos</H>
        <UL>
          <li><strong>Sin cuenta:</strong> no pedimos datos. Tus ajustes se guardan en tu propio dispositivo.</li>
          <li><strong>Con cuenta:</strong> correo electrónico, nombre de jugador, contraseña (solo se guarda un
            <em> hash</em> irreversible, nunca la contraseña), avatar/marco/título elegidos, y si usas Google, el
            identificador de tu cuenta de Google.</li>
          <li><strong>Actividad de juego:</strong> puntos, victorias, derrotas, historial de partidas online,
            temporadas y logros, personajes desbloqueados, partidas guardadas del Modo Historia y lista de amigos.</li>
          <li><strong>Técnicos:</strong> tokens de sesión (guardados solo como hash), y la dirección IP y registros
            del servidor, usados de forma transitoria para seguridad, limitar abusos y detectar desincronizaciones.</li>
          <li>No usamos publicidad, no vendemos datos y no creamos perfiles comerciales.</li>
        </UL>
        <H>Para qué y con qué base</H>
        <UL>
          <li>Prestar el servicio (cuenta, online, ranking, guardado): ejecución del servicio que pides.</li>
          <li>Seguridad y prevención de trampas/abuso: interés legítimo.</li>
          <li>Responder tus consultas: tu solicitud.</li>
        </UL>
        <H>Con quién se comparte</H>
        <UL>
          <li><strong>Proveedores técnicos:</strong> alojamiento de la web, del servidor y de la base de datos
            (Railway), que procesan datos por encargo nuestro y pueden estar fuera de Chile.</li>
          <li><strong>Google:</strong> si eliges «Continuar con Google», Google nos entrega tu identificador y correo
            y trata tus datos según su propia política. La web también carga tipografías desde Google Fonts, lo que
            implica que Google recibe tu IP.</li>
          <li>Otros jugadores ven tu nombre de usuario, avatar, título, estadísticas y ranking públicos. Nunca tu
            correo.</li>
          <li>Autoridades, solo si una ley u orden judicial lo exige.</li>
        </UL>
        <H>Conservación</H>
        <P>
          Mientras tu cuenta exista. Si pides eliminarla, borramos tus datos personales y tu historial asociado; las
          copias de seguridad se sobrescriben en un plazo máximo de 30 días. Los registros técnicos se conservan por
          poco tiempo.
        </P>
        <H>Tus derechos</H>
        <P>
          Puedes pedir acceso, rectificación, supresión (borrado de cuenta), oposición y portabilidad de tus datos, y
          retirar tu consentimiento, escribiendo a <a className="text-amber-400 underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> desde
          el correo de tu cuenta. Respondemos en un máximo de 30 días. También puedes reclamar ante la autoridad de
          protección de datos de tu país.
        </P>
        <H>Menores y seguridad</H>
        <P>
          No está dirigido a menores de 14 años. Protegemos tus datos con contraseñas cifradas (hash), tokens
          hasheados y conexiones cifradas (HTTPS/WSS), pero ningún sistema es 100 % seguro. Si hubiera una brecha que
          te afecte, te lo informaremos.
        </P>
      </>
    ),
  },
  {
    id: 'cuenta',
    title: 'Borrar mi cuenta y mis datos',
    body: (
      <>
        <P>Puedes eliminar tu cuenta y todos los datos asociados en cualquier momento:</P>
        <UL>
          <li><strong>Desde el juego (inmediato):</strong> entra a tu <em>Perfil → Editar perfil → Borrar mi cuenta</em>,
            escribe tu nombre de jugador y tu contraseña (si tu cuenta la tiene) y confirma.</li>
          <li><strong>Por correo:</strong> si no puedes entrar, escribe a <a className="text-amber-400 underline" href={`mailto:${CONTACT_EMAIL}?subject=Eliminar%20mi%20cuenta`}>{CONTACT_EMAIL}</a> con
            el asunto «Eliminar mi cuenta», desde el correo con el que te registraste. Respondemos en un máximo de 30 días.</li>
          <li>Se borran tu cuenta, estadísticas, desbloqueos, partidas guardadas, amistades y sesiones. Los duelos que
            jugaste siguen en el historial de tu rival, pero tu nombre aparece como «Jugador eliminado».</li>
          <li>La eliminación es definitiva: no se puede recuperar el progreso.</li>
          <li>Si juegas sin cuenta, basta con borrar los datos del sitio en tu navegador o eliminar el .exe.</li>
        </UL>
      </>
    ),
  },
  {
    id: 'licencias',
    title: 'Licencias de terceros y créditos',
    body: (
      <>
        <UL>
          <li><strong>Godot Engine 4</strong> — © Juan Linietsky, Ariel Manzur y colaboradores de Godot Engine,
            licencia MIT. godotengine.org. El motor incluye además componentes de terceros (FreeType, HarfBuzz, zlib,
            libogg/libvorbis, mbedTLS, entre otros) con sus respectivas licencias, listadas en el archivo
            <code className="font-mono"> THIRD_PARTY_LICENSES.md</code> incluido con el juego.</li>
          <li><strong>Press Start 2P</strong> — © CodeMan38, SIL Open Font License 1.1.</li>
          <li><strong>Silkscreen</strong> — © The Silkscreen Project Authors (Jason Kottke), SIL Open Font License 1.1.</li>
          <li><strong>Cinzel y Outfit</strong> (tipografías de esta web, vía Google Fonts) — SIL Open Font License 1.1.</li>
          <li><strong>Arte, música, efectos y textos del juego</strong> — creación original del equipo, generados
            mediante código propio.</li>
          <li><strong>Voces</strong> — sintetizadas mediante voces de texto a voz de Windows (Microsoft), procesadas
            con filtros de audio. No son voces de personas reales.</li>
          <li><strong>Servidor y web</strong> — software de código abierto (Node.js, Fastify, PostgreSQL, React,
            Vite, Tailwind CSS, entre otros) bajo licencias MIT/BSD/Apache/ISC/PostgreSQL.</li>
        </UL>
        <P>
          Los nombres de personajes históricos se usan de forma referencial. «History Combat» no está afiliado a
          Sony, Nintendo, Capcom, Valve ni a ninguna empresa o persona mencionada.
        </P>
      </>
    ),
  },
  {
    id: 'reclamos',
    title: 'Reclamos y contacto',
    body: (
      <>
        <UL>
          <li><strong>Derechos de autor, imagen o contenido:</strong> si eres titular de derechos o representas a una
            persona retratada y quieres pedir una revisión, corrección o retiro, escribe a
            <a className="text-amber-400 underline" href={`mailto:${CONTACT_EMAIL}?subject=Reclamo%20de%20contenido`}> {CONTACT_EMAIL}</a> indicando
            qué personaje o contenido, qué derecho invocas y cómo contactarte. Respondemos en un máximo de 10 días
            hábiles.</li>
          <li><strong>Privacidad y cuentas:</strong> mismo correo, asunto «Privacidad».</li>
          <li><strong>Errores y soporte:</strong> mismo correo, asunto «Soporte».</li>
        </UL>
      </>
    ),
  },
];

export const LegalSection: React.FC = () => {
  // Los enlaces #legal-xxx abren el bloque correspondiente (están dentro de <details>).
  React.useEffect(() => {
    const openFromHash = () => {
      const el = document.getElementById(window.location.hash.slice(1));
      if (el instanceof HTMLDetailsElement) {
        el.open = true;
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    openFromHash();
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);

  return (
  <section id="legal" className="py-14 md:py-20 bg-[#0b0f15] border-b border-[#1c2836]">
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-8">
        <div className="font-mono text-xs text-amber-400 mb-1 font-bold uppercase tracking-wider">Información legal</div>
        <h2 className="font-display font-black text-2xl sm:text-3xl text-neutral-100">Avisos, privacidad y licencias</h2>
        <p className="text-neutral-400 text-xs sm:text-sm mt-2">
          Todo lo que debes saber antes de jugar: qué es ficción, qué datos guardamos, tus derechos y las licencias que usamos.
        </p>
      </div>

      <div className="space-y-3">
        {BLOCKS.map((b, i) => (
          <details
            key={b.id}
            id={`legal-${b.id}`}
            open={i === 0}
            className="group rounded-lg border border-[#1c2836] bg-[#0c121a] open:border-[#2a3f5a]"
          >
            <summary className="cursor-pointer select-none list-none flex items-center justify-between px-4 py-3 font-display font-bold text-sm text-neutral-100 hover:text-amber-400">
              <span>{b.title}</span>
              <span className="font-mono text-amber-400 transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="px-4 pb-4 space-y-2 border-t border-[#1c2836] pt-3">{b.body}</div>
          </details>
        ))}
      </div>
    </div>
  </section>
  );
};
