# Rediseño Integral de History Combat: El Torneo de los Siglos

Rediseño completo de la web oficial de History Combat hacia una estética sobria y moderna al estilo Steam/editorial de videojuegos, centrada en la campaña del Nexo, las 5 épocas temporales y una auténtica pantalla de selección de personajes arcade interactiva sin artificios ni clichés de IA.

## User Review & Critical Decisions

> [!IMPORTANT]
> Decisiones confirmadas por el usuario en la fase de alineación:
> 1. **Estilo Visual**: Estilo Steam moderno y sobrio, con paleta oscura atmosférica (`#0e141b` / `#171d25` / `#1b2838`), tipografía limpia sin adornos artificiales y foco estricto en capturas y metraje real de Godot 4.
> 2. **Enfoque y Orden**: Centrado en la campaña: la historia del Nexo, los 4 científicos creadores del Reloj del Origen y el viaje inverso a través de las 5 épocas antes del resto de apartados.
> 3. **Presentación de Luchadores**: Pantalla de selección de personajes interactiva como en recreativas arcade clásicas, con marco de selección, sprite individual nítido, escenario de combate, su objetivo personal con el Nexo y comandos de juego.
> 4. **Cero Estética IA**: Prohibición total de píldoras flotantes, badges genéricos, etiquetas robóticas ("Biografía y tono paródico", "Fatality caricaturesca") y emojis decorativos. Todo el texto es natural y humano.

---

## 1. Overview & Core Concept

- **Qué es**: La página oficial de *History Combat: El Torneo de los Siglos*, videojuego de lucha arcade 2D 1v1 en pixel art desarrollado en Godot 4, jugable directamente en el navegador en `historycombat.cl` y con versión descargable de escritorio (.exe para Windows).
- **El Núcleo Narrativo**: El tiempo se ha quebrado en cinco fragmentos por culpa del Reloj del Origen. Una entidad cósmica llamada **El Nexo** sostiene las eras y convoca a los grandes nombres de la historia a un torneo. El vencedor obtiene el poder del Nexo: volver a su era, reescribir la historia o liberarla.
- **Público Objetivo**: Jugadores de juegos de lucha arcade y retro, amantes de la historia y parodias cómicas, y la comunidad de videojuegos independientes.

---

## 2. User Experience & Visual Design

### Estética y Dirección Visual
- **Inspiración**: Steam Storefront contemporáneo combinado con la sobriedad de webs de juegos indie de culto (como *Skullgirls*, *Guilty Gear Strive* o *Rivals of Aether*).
- **Paleta de Colores (60-30-10)**:
  - 60% Lienzo Neutro Oscuro: Fondo carbón azulado profundo (`#0b0f15` y `#101822`).
  - 30% Superficies Estructurales: Paneles oscuros con bordes sutiles en tono acero (`#1c2836` y `#2a3f5a`).
  - 10% Acentos Focalizados: Ámbar cálido de arcade (`#f0c868` / `#e5a93c`) para llamadas a la acción principales y selección activa.
- **Tipografía**:
  - Títulos y navegación: *Outfit* / *Plus Jakarta Sans* con tracking ajustado.
  - Acentos arcade y nombres de comandos: *Press Start 2P* utilizado con moderación únicamente en elementos de interfaz de juego (botones arcade, HUD).
  - Cuerpo de texto: *Outfit* en 14px–16px con excelente legibilidad y contrastes WCAG AA.
- **Jerarquía de Secciones**:
  1. **Cabecera Steam Minimalista**: Wordmark del juego, navegación por anclas limpia sin píldoras, y botón directo a `historycombat.cl`.
  2. **Hero Showcase de Videojuego**: Título y sinopsis del juego, bloque multimedia con pestañas reales (Tráiler en video `.mp4` y Captura in-game en la Plaza de Pyongyang), y botones principales de juego.
  3. **Campaña: El Nexo y la Ruptura del Tiempo**: Sprite transparente del Nexo en alta resolución, explicación de sus 3 fases de jefe, los 4 científicos del Reloj del Origen (Tesla, Einstein, Marie Curie, Da Vinci) y los 3 finales desbloqueables (Reparar, Reescribir, Liberar).
  4. **El Viaje Inverso por las 5 Épocas**: Selector cronológico interactivo (Mundo Actual → Siglo XX → Revoluciones → Imperios → Antigüedad) con sus jefes correspondientes (Trump, Hitler, Napoleón, Hernán Cortés, Julio César).
  5. **Pantalla de Selección de Luchadores (Arcade Select)**: Matriz de 12 luchadores separados con su sprite individual. Al seleccionar uno se revela su ficha con:
     - Sprite a gran escala con fondo del escenario.
     - Su motivación personal con el Nexo (ej. Napoleón ganar en Waterloo, El Papa restaurar el orden temporal).
     - Estilo de juego y comandos claros (`↓ ↘ → + Puño`).
     - Súper ataque cinemático.
  6. **Controles y Reglas Arcade**: Diagrama claro del mapeo de teclado (WASD + UIJKOL) y reglas de torneo (rondas a 99 segundos, parry, counter-hit, guard break).
  7. **Descarga y Acceso**: Enlace a la versión web de `historycombat.cl` y modal de descarga para Windows 64-bit.
  8. **Pie de Página Legal**: Con el aviso obligatorio de parodia de ficción y enlaces institucionales.

---

## 3. Key Product Decisions & Trade-Offs

- **Tráiler y Captura Unificados en el Hero**: En lugar de dispersar el video y la captura en dos secciones separadas y desconectadas, el Hero adopta el módulo multimedia estándar de Steam, permitiendo al usuario alternar entre ver el tráiler oficial en video o la captura de combate in-game (Einstein vs Kim).
- **Eliminación de Cualquier Rastro de IA**: Se eliminan todas las tablas con métricas arbitrarias (como "Poder: 7/10"), citas guionizadas ("Entrada: / Victoria:") y cajas con borde izquierdo grueso. Las descripciones se redactan con naturalidad desde la perspectiva del creador del juego.
- **Sprites Extraídos Transparentes**: Se utilizan exclusivamente los 12 sprites individuales ya generados en `/public/assets/fighters/` y el sprite transparente de El Nexo, erradicando la hoja de sprites original que sobrecargaba la interfaz.

---

## 4. Technical Architecture & Component Hierarchy

```
┌────────────────────────────────────────────────────────┐
│                        App.tsx                         │
└──────────────────────────┬─────────────────────────────┘
                           │
 ┌─────────────────────────┼─────────────────────────┐
 │                         │                         │
 ▼                         ▼                         ▼
Header.tsx            GameHeroSteam.tsx          NexoCampaign.tsx
(Nav limpia           (Video + Screenshot        (Lore de El Nexo,
 + Jugar)              + Badges Steam)            4 Creadores, 3 Finales)
                           │
 ┌─────────────────────────┼─────────────────────────┐
 │                         │                         │
 ▼                         ▼                         ▼
ErasTimeline.tsx      ArcadeRosterSelect.tsx     CombatRules.tsx
(5 épocas inversas    (Matriz de 12 luchadores   (Teclado WASD+UIJKOL
 + jefes de era)       + ficha natural y moves)   + reglas arcade)
                           │
                           ▼
                      FooterSteam.tsx
                      (Aviso legal de parodia)
```

### Component Mapping
- `src/components/Header.tsx`: Barra superior limpia tipo Steam, 1 fila, 3 zonas.
- `src/components/GameHeroSteam.tsx`: Presentación principal con selector multimedia (Tráiler en video `/assets/aistudio/history_combat_promo_c8a3d292.mp4` y Captura in-game `/assets/aistudio/Captura_de_pantalla_2026-11-05_100044_39837a09.png`).
- `src/components/NexoCampaign.tsx`: Exposición central de El Nexo con su sprite `/assets/nexo_transparent.png`, los 4 creadores y los 3 finales.
- `src/components/ErasTimeline.tsx`: Línea temporal interactiva de las 5 eras en orden inverso con sus jefes y escenarios.
- `src/components/ArcadeRosterSelect.tsx`: Pantalla de selección de luchadores con respuesta de audio arcade, sprite ampliado y descripción natural.
- `src/components/CombatRules.tsx`: Guía de controles interactiva y especificaciones de juego en Godot 4.
- `src/components/Footer.tsx`: Pie de página sobrio con aviso legal de parodia.

---

## 5. Verification Plan

1. **Compilación y Linting**: Ejecutar `compile_applet` y `lint_applet` para garantizar 0 errores de TypeScript y dependencias.
2. **Inspección Visual**:
   - Comprobar que la paleta Steam (`#0b0f15`, `#101822`, `#1c2836`) luce sobria y elegante.
   - Verificar la reproducción del tráiler oficial en video y la captura de combate en el Hero.
   - Confirmar que la pantalla de selección arcade permite elegir fluidamente a los 12 luchadores con sus datos naturales.
   - Validar que El Papa esté correctamente identificado con su vestimenta papal, báculo, agua bendita y Papamóvil.
   - Verificar la presencia del aviso legal en el pie de página.
