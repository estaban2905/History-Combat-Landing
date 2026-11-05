export interface Fighter {
  id: string;
  name: string;
  title: string;
  era: string;
  spriteUrl: string;
  stageName: string;
  playstyle: string;
  nexoGoal: string;
  bio: string;
  special1: { name: string; input: string; desc: string };
  special2: { name: string; input: string; desc: string };
  superMove: { name: string; desc: string };
}

export const FIGHTERS: Fighter[] = [
  {
    id: 'papa_francisco',
    name: 'Papa Francisco',
    title: 'Vaticano · 1936 – 2025',
    era: 'El Mundo Actual',
    spriteUrl: '/assets/fighters/el_papa.png',
    stageName: 'Plaza de San Pedro · El Vaticano',
    playstyle: 'Control de distancia con proyectiles y antiaéreos',
    nexoGoal: 'Sellar la grieta y restaurar el orden temporal en el mundo.',
    bio: 'El papa argentino, humilde y cercano. Su Papamóvil acelera más de lo que parece.',
    special1: { name: 'Bendición Explosiva', input: 'O', desc: 'Primer ataque especial. Gasta energía.' },
    special2: { name: 'Campanas del Vaticano', input: 'L', desc: 'Poder propio del luchador. Gasta energía.' },
    superMove: { name: 'Misa Multitudinaria', desc: 'Ultimate: O + L a la vez con la energía al 100.' }
  },
  {
    id: 'albert_einstein',
    name: 'Albert Einstein',
    title: 'Alemania · 1879 – 1955',
    era: 'El Siglo XX',
    spriteUrl: '/assets/fighters/einstein.png',
    stageName: 'El Cosmos · Teoría de la Relatividad',
    playstyle: 'Trampas en el escenario y alteración de velocidad',
    nexoGoal: 'Corregir el fallo en la fórmula con la que crearon el Reloj del Origen.',
    bio: 'El genio de la relatividad. Pelo imposible y la mente más rápida del torneo.',
    special1: { name: 'Rayo E=mc²', input: 'O', desc: 'Primer ataque especial. Gasta energía.' },
    special2: { name: 'Relatividad', input: 'L', desc: 'Poder propio del luchador. Gasta energía.' },
    superMove: { name: 'E = mc²', desc: 'Ultimate: O + L a la vez con la energía al 100.' }
  },
  {
    id: 'rasputin',
    name: 'Grigori Rasputín',
    title: 'Imperio ruso · 1869 – 1916',
    era: 'El Siglo XX',
    spriteUrl: '/assets/fighters/rasputin.png',
    stageName: 'San Petersburgo · Noche de Invierno',
    playstyle: 'Tanque pesado con regeneración pasiva de salud',
    nexoGoal: 'Asegurar su inmortalidad a través de todas las épocas de la historia.',
    bio: 'Místico de la corte rusa. Según la leyenda, fue casi imposible de matar.',
    special1: { name: 'Bastón Místico', input: 'O', desc: 'Primer ataque especial. Gasta energía.' },
    special2: { name: 'Hipnosis Oscura', input: 'L', desc: 'Poder propio del luchador. Gasta energía.' },
    superMove: { name: 'Maldición Inmortal', desc: 'Ultimate: O + L a la vez con la energía al 100.' }
  },
  {
    id: 'kim_jong_un',
    name: 'Kim Jong-un',
    title: 'Corea del Norte · 1984 –',
    era: 'El Mundo Actual',
    spriteUrl: '/assets/fighters/oficial.png',
    stageName: 'Plaza de Pyongyang · Gran Desfile',
    playstyle: 'Zoner táctico convocando batallones y barreras',
    nexoGoal: 'Hacer que su desfile militar marche sin fin por todas las épocas.',
    bio: 'Líder supremo con pasión por los misiles y los peinados atrevidos.',
    special1: { name: 'Desfile Militar', input: 'O', desc: 'Primer ataque especial. Gasta energía.' },
    special2: { name: 'Lluvia de Cohetes', input: 'L', desc: 'Poder propio del luchador. Gasta energía.' },
    superMove: { name: 'Misil Intercontinental', desc: 'Ultimate: O + L a la vez con la energía al 100.' }
  },
  {
    id: 'abraham_lincoln',
    name: 'Abraham Lincoln',
    title: 'Estados Unidos · 1809 – 1865',
    era: 'Revoluciones y Progreso',
    spriteUrl: '/assets/fighters/lincoln.png',
    stageName: 'Gettysburg · 1863',
    playstyle: 'Grappler agresivo con agarres y hachazos de alto impacto',
    nexoGoal: 'Garantizar que la unión y la libertad prevalezcan en toda la línea temporal.',
    bio: 'Presidente altísimo con sombrero de copa. Era leñador antes que estadista.',
    special1: { name: 'Discurso de Gettysburg', input: 'O', desc: 'Primer ataque especial. Gasta energía.' },
    special2: { name: 'Hacha Presidencial', input: 'L', desc: 'Poder propio del luchador. Gasta energía.' },
    superMove: { name: 'Emancipación Fulminante', desc: 'Ultimate: O + L a la vez con la energía al 100.' }
  },
  {
    id: 'napoleon',
    name: 'Napoleón Bonaparte',
    title: 'Francia · 1769 – 1821',
    era: 'Revoluciones y Progreso',
    spriteUrl: '/assets/fighters/napoleon.png',
    stageName: 'Austerlitz · Campo de Batalla',
    playstyle: 'Presión rápida con sable y salvas de artillería pesada',
    nexoGoal: 'Volver al 18 de junio de 1815 y cambiar la derrota por una victoria eterna.',
    bio: 'Emperador de los franceses y estratega legendario. Bajito de estatura, gigante de ego y de sombrero.',
    special1: { name: 'Cañonazo de Artillería', input: 'O', desc: 'Primer ataque especial. Gasta energía.' },
    special2: { name: 'Artillería Imperial', input: 'L', desc: 'Poder propio del luchador. Gasta energía.' },
    superMove: { name: 'La Grande Armée', desc: 'Ultimate: O + L a la vez con la energía al 100.' }
  },
  {
    id: 'lautaro',
    name: 'Lautaro',
    title: 'Pueblo mapuche · 1534 – 1557',
    era: 'Imperios y Descubrimientos',
    spriteUrl: '/assets/fighters/lautaro.png',
    stageName: 'Tucapel · Fuerte Español, 1553',
    playstyle: 'Rushdown de máxima velocidad con boleadoras y maza toki',
    nexoGoal: 'Expulsar para siempre a cualquier invasor de su tierra ancestral.',
    bio: 'Toqui mapuche que aprendió las artes del invasor y las usó para liberar a su pueblo.',
    special1: { name: 'Embestida Mapuche', input: 'O', desc: 'Primer ataque especial. Gasta energía.' },
    special2: { name: 'Carga del Toqui', input: 'L', desc: 'Poder propio del luchador. Gasta energía.' },
    superMove: { name: 'Malón del Toqui', desc: 'Ultimate: O + L a la vez con la energía al 100.' }
  },
  {
    id: 'juana_de_arco',
    name: 'Juana De Arco',
    title: 'Francia · 1412 – 1431',
    era: 'Imperios y Descubrimientos',
    spriteUrl: '/assets/fighters/juana_de_arco.png',
    stageName: 'Orleans · 1429',
    playstyle: 'Peleadora de avance con estandarte y control aéreo',
    nexoGoal: 'Cumplir la voz que la guía y consagrar la paz eterna.',
    bio: 'Joven campesina que lideró ejércitos guiada por sus visiones. Santa y estratega.',
    special1: { name: 'Estandarte de Luz', input: 'O', desc: 'Primer ataque especial. Gasta energía.' },
    special2: { name: 'Espada de Orleans', input: 'L', desc: 'Poder propio del luchador. Gasta energía.' },
    superMove: { name: 'La Hoguera de Ruan', desc: 'Ultimate: O + L a la vez con la energía al 100.' }
  },
  {
    id: 'cleopatra',
    name: 'Cleopatra',
    title: 'Egipto · 69 – 30 a.C.',
    era: 'La Antigüedad',
    spriteUrl: '/assets/fighters/cleopatra.png',
    stageName: 'Giza · El Reino del Nilo',
    playstyle: 'Tácticas de engaño con abanicos cortantes y veneno',
    nexoGoal: 'Forjar un reino faraónico eterno que jamás caiga en el olvido.',
    bio: 'Última reina de Egipto. Inteligente, seductora y letal con una sandalia.',
    special1: { name: 'Áspid Venenoso', input: 'O', desc: 'Primer ataque especial. Gasta energía.' },
    special2: { name: 'Maldición de Anubis', input: 'L', desc: 'Poder propio del luchador. Gasta energía.' },
    superMove: { name: 'Plagas de Egipto', desc: 'Ultimate: O + L a la vez con la energía al 100.' }
  },
  {
    id: 'julio_cesar',
    name: 'Julio César',
    title: 'Roma · 100 – 44 a.C.',
    era: 'La Antigüedad',
    spriteUrl: '/assets/fighters/julio_cesar.png',
    stageName: 'El Coliseo Romano',
    playstyle: 'Contragolpes con escudo testudo y tajos de gladius',
    nexoGoal: 'Instaurar la Pax Romana definitiva sobre todas las épocas del tiempo.',
    bio: 'General y dictador romano. Conquistó la Galia y casi todo lo demás.',
    special1: { name: 'Pilum Romano', input: 'O', desc: 'Primer ataque especial. Gasta energía.' },
    special2: { name: 'Legión Romana', input: 'L', desc: 'Poder propio del luchador. Gasta energía.' },
    superMove: { name: 'Idus de Marzo', desc: 'Ultimate: O + L a la vez con la energía al 100.' }
  },
  {
    id: 'el_nexo',
    name: 'El Nexo',
    title: 'Más allá · Todas las eras',
    era: 'Jefe Final',
    spriteUrl: '/assets/nexo_transparent.png',
    stageName: 'La Grieta del Nexo',
    playstyle: 'Jefe de tres fases con teletransporte y colapso dimensional',
    nexoGoal: 'Encontrar a un campeón digno capaz de decidir el destino del tiempo.',
    bio: 'El poder que sostiene todas las épocas. Nació de una grieta y decide quién merece el tiempo.',
    special1: { name: 'Esfera del Nexo', input: 'O', desc: 'Primer ataque especial. Gasta energía.' },
    special2: { name: 'Grieta Temporal', input: 'L', desc: 'Poder propio del luchador. Gasta energía.' },
    superMove: { name: 'Todas las Épocas', desc: 'Ultimate: O + L a la vez con la energía al 100.' }
  }
];
