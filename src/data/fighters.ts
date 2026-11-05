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
    id: 'el_papa',
    name: 'El Papa',
    title: 'Vaticano · El Mundo Actual',
    era: 'El Mundo Actual',
    spriteUrl: '/assets/fighters/el_papa.png',
    stageName: 'Plaza de San Pedro',
    playstyle: 'Control de distancia con proyectiles y antiaéreos',
    nexoGoal: 'Sellar la grieta y restaurar el orden temporal en el mundo.',
    bio: 'Llega desde el Vaticano decidido a poner orden en la línea del tiempo antes de que todo colapse. Pelea a media distancia arrojando agua bendita, frena saltos enemigos con su báculo pastoral y remata con un Papamóvil blindado que cruza el escenario a toda velocidad.',
    special1: {
      name: 'Agua bendita',
      input: '↓ ↘ → + Puño',
      desc: 'Lanza un frasco bendecido que castiga al rival a media distancia.'
    },
    special2: {
      name: 'Báculo de San Pedro',
      input: '→ ↓ ↘ + Puño',
      desc: 'Golpe ascendente con el báculo para derribar oponentes en el aire.'
    },
    superMove: {
      name: 'Papamóvil Blindado',
      desc: 'Un Papamóvil blindado entra por sorpresa y arrolla la pantalla de punta a punta.'
    }
  },
  {
    id: 'einstein',
    name: 'Albert Einstein',
    title: 'Berna · El Siglo XX',
    era: 'El Siglo XX',
    spriteUrl: '/assets/fighters/einstein.png',
    stageName: 'Observatorio de Berna (y Plaza de Pyongyang)',
    playstyle: 'Trampas en el escenario y alteración de velocidad',
    nexoGoal: 'Corregir el fallo en la fórmula con la que crearon el Reloj del Origen.',
    bio: 'Uno de los cuatro científicos que construyeron el Reloj del Origen. Sabía exactamente las consecuencias de encenderlo, pero la curiosidad científica pudo más y el tiempo se rompió. Ahora busca el Nexo para intentar arreglar la ecuación de su vida.',
    special1: {
      name: 'Dilatación temporal',
      input: '↓ ↙ ← + Puño',
      desc: 'Genera una burbuja que reduce la velocidad del rival a la mitad.'
    },
    special2: {
      name: 'Tiza cuántica',
      input: '↓ ↘ → + Puño',
      desc: 'Escribe fórmulas en el aire que explotan al contacto físico.'
    },
    superMove: {
      name: 'Singularidad Relativista',
      desc: 'Abre un microagujero negro que absorbe al oponente y lo estampa contra el ring.'
    }
  },
  {
    id: 'rasputin',
    name: 'Grigori Rasputín',
    title: 'San Petersburgo · El Siglo XX',
    era: 'El Siglo XX',
    spriteUrl: '/assets/fighters/rasputin.png',
    stageName: 'Palacio de Invierno',
    playstyle: 'Tanque pesado con regeneración pasiva de salud',
    nexoGoal: 'Asegurar su inmortalidad a través de todas las épocas de la historia.',
    bio: 'Sobrevivió a venenos, disparos y a las aguas heladas del río Nevá. El místico ruso entra al torneo como un tanque implacable: tiene regeneración pasiva, ataques con cianuro y una mirada hipnótica capaz de congelar al rival.',
    special1: {
      name: 'Mirada hipnótica',
      input: '← → + Puño',
      desc: 'Paraliza al adversario por un instante si no está cubierto.'
    },
    special2: {
      name: 'Vaho de cianuro',
      input: '↓ ↘ → + Patada',
      desc: 'Deja una nube tóxica en el piso que frena los avances enemigos.'
    },
    superMove: {
      name: 'Ventisca del Nevá',
      desc: 'Desata una tormenta siberiana que congela al oponente en un bloque de hielo.'
    }
  },
  {
    id: 'oficial_siglo_xx',
    name: 'El Comandante (Kim)',
    title: 'Pyongyang · El Mundo Actual',
    era: 'El Mundo Actual',
    spriteUrl: '/assets/fighters/oficial.png',
    stageName: 'Plaza de Pyongyang',
    playstyle: 'Zoner táctico convocando batallones y barreras',
    nexoGoal: 'Hacer que su desfile militar marche sin fin por todas las épocas.',
    bio: 'Custodia el escenario del Gran Desfile en Pyongyang. No pelea solo: su estilo se basa en convocar formaciones sincronizadas de soldados, escudos de infantería y convoyes balísticos que cubren el suelo.',
    special1: {
      name: 'Desfile balístico',
      input: '↓ ↘ → + Patada',
      desc: 'Un convoy de mini tanques cruza el piso arrollando al oponente.'
    },
    special2: {
      name: 'Guardia de bayoneta',
      input: '← ↓ ↙ + Puño',
      desc: 'Dos centinelas forman una barrera que bloquea proyectiles rivales.'
    },
    superMove: {
      name: 'El Gran Desfile',
      desc: 'Una marea humana de infantería eleva al rival entre fuegos artificiales militares.'
    }
  },
  {
    id: 'lincoln',
    name: 'Abraham Lincoln',
    title: 'Illinois · Revoluciones y Progreso',
    era: 'Revoluciones y Progreso',
    spriteUrl: '/assets/fighters/lincoln.png',
    stageName: 'Cabaña de Illinois',
    playstyle: 'Grappler agresivo con agarres y hachazos de alto impacto',
    nexoGoal: 'Garantizar que la unión y la libertad prevalezcan en toda la línea temporal.',
    bio: 'Antes de llegar a la presidencia fue campeón de catch wrestling en Illinois. Con sus brazos largos, su hacha de leñador y su sombrero de copa, castiga sin piedad a cualquiera que descuide la guardia baja.',
    special1: {
      name: 'Hachazo de leñador',
      input: '↓ ↘ → + Puño',
      desc: 'Tajo descendente con hacha que revienta la defensa del oponente.'
    },
    special2: {
      name: 'Chistera voladora',
      input: '← → + Puño',
      desc: 'Lanza su sombrero en arco cortante de ida y vuelta.'
    },
    superMove: {
      name: 'Suplex de la Unión',
      desc: 'Agarre implacable que levanta en peso al adversario y lo estrella de cabeza contra la lona.'
    }
  },
  {
    id: 'napoleon',
    name: 'Napoleón Bonaparte',
    title: 'Waterloo · Revoluciones y Progreso',
    era: 'Revoluciones y Progreso',
    spriteUrl: '/assets/fighters/napoleon.png',
    stageName: 'Plaza de Waterloo',
    playstyle: 'Presión rápida con sable y salvas de artillería pesada',
    nexoGoal: 'Volver al 18 de junio de 1815 y cambiar la derrota por una victoria eterna.',
    bio: 'Jefe de la era de Revoluciones. Su obsesión es una sola: borrar la derrota de Waterloo y reescribir su historia. Compensa su estatura con estocadas de sable rapidísimas y disparos de artillería que caen desde lo alto.',
    special1: {
      name: 'Carga de la Vieja Guardia',
      input: '↓ ↘ → + Puño',
      desc: 'Estocada rápida de sable que rompe guardias agachadas.'
    },
    special2: {
      name: 'Salva de artillería',
      input: '↓ ↙ ← + Patada',
      desc: 'Dispara una bala de cañón pesada a ras de suelo.'
    },
    superMove: {
      name: 'Waterloo 1815',
      desc: 'Una batería de cañones imperiales dispara al unísono cubriendo de humo toda la pantalla.'
    }
  },
  {
    id: 'guillermo_tell',
    name: 'Guillermo Tell',
    title: 'Altdorf · Imperios y Descubrimientos',
    era: 'Imperios y Descubrimientos',
    spriteUrl: '/assets/fighters/guerrero_nordico.png',
    stageName: 'Plaza de Altdorf',
    playstyle: 'Tirador de largo alcance y control con trampas de caza',
    nexoGoal: 'Proteger la libertad de los pueblos frente a cualquier tirano temporal.',
    bio: 'El mítico arquero y ballestero de los Alpes suizos. Lleva una flecha clavada en su propio gorro y pelea manteniendo siempre la distancia con virotazos precisos y cepos en el suelo.',
    special1: {
      name: 'Tiro a la manzana',
      input: '← → + Puño',
      desc: 'Disparo veloz de ballesta que clava al adversario al piso.'
    },
    special2: {
      name: 'Cepo alpino',
      input: '↓ ↓ + Patada',
      desc: 'Coloca una trampa de caza en el suelo que inmoviliza al que la pise.'
    },
    superMove: {
      name: 'Diana Legendaria',
      desc: 'Apunta con pulso perfecto y parte una manzana sobre la cabeza del rival noqueándolo.'
    }
  },
  {
    id: 'cortes',
    name: 'Hernán Cortés',
    title: 'Tenochtitlan · Imperios y Descubrimientos',
    era: 'Imperios y Descubrimientos',
    spriteUrl: '/assets/fighters/rey_medieval.png',
    stageName: 'Calzadas de Tenochtitlan',
    playstyle: 'Ofensiva pesada con espada toledana y fuego continuo',
    nexoGoal: 'Conquistar todas las riquezas y territorios de la historia rota.',
    bio: 'Jefe de la era de Imperios y Descubrimientos. Viste armadura de acero y corona imperial. Si las cosas se complican, prende fuego a sus propios galeones para que nadie tenga opción de retirarse.',
    special1: {
      name: 'Disparo de arcabuz',
      input: '↓ ↘ → + Puño',
      desc: 'Disparo con humo denso y metralla en abanico.'
    },
    special2: {
      name: 'Quema de naves',
      input: '↓ ↙ ← + Patada',
      desc: 'Arroja una antorcha que incendia el suelo impidiendo que el rival se acerque.'
    },
    superMove: {
      name: 'Andanada del Galeón',
      desc: 'Un galeón de guerra encalla y descarga todos sus cañones de costado sobre el enemigo.'
    }
  },
  {
    id: 'lautaro',
    name: 'Lautaro (Leftraru)',
    title: 'Arauco · Imperios y Descubrimientos',
    era: 'Imperios y Descubrimientos',
    spriteUrl: '/assets/fighters/lautaro.png',
    stageName: 'Bosques de Arauco',
    playstyle: 'Rushdown de máxima velocidad con boleadoras y maza toki',
    nexoGoal: 'Expulsar para siempre a cualquier invasor de su tierra ancestral.',
    bio: 'El gran estratega mapuche que aprendió a montar y combatir a caballo para expulsar a los conquistadores. Es el luchador más ágil del juego: traba las piernas del rival con boleadoras y remata con saltos de maza de piedra.',
    special1: {
      name: 'Boleadoras del sur',
      input: '↓ ↘ → + Patada',
      desc: 'Enreda las piernas del oponente anulando sus saltos.'
    },
    special2: {
      name: 'Salto toki',
      input: '→ ↓ ↘ + Puño',
      desc: 'Salto acrobático que descarga la maza de piedra sobre la cabeza rival.'
    },
    superMove: {
      name: 'Emboscada de Arauco',
      desc: 'Jinetes mapuches cargan a toda velocidad en una maniobra envolvente que barre el escenario.'
    }
  },
  {
    id: 'juana_de_arco',
    name: 'Juana de Arco',
    title: 'Orleans · Imperios y Descubrimientos',
    era: 'Imperios y Descubrimientos',
    spriteUrl: '/assets/fighters/juana_de_arco.png',
    stageName: 'Murallas de Orleans',
    playstyle: 'Peleadora de avance con estandarte y control aéreo',
    nexoGoal: 'Cumplir la voz que la guía y consagrar la paz eterna.',
    bio: 'La Doncella de Orleans combate con armadura de placas completa y el estandarte sagrado. Domina los avances directos, arrinconando a los oponentes contra la esquina de la arena con embestidas imparables.',
    special1: {
      name: 'Embestida de estandarte',
      input: '→ → + Puño',
      desc: 'Carga frontal con la bandera que arrastra al oponente hasta la esquina.'
    },
    special2: {
      name: 'Luz de Orleans',
      input: '↓ ↘ → + Patada',
      desc: 'Destello de luz vertical que castiga a los rivales que saltan.'
    },
    superMove: {
      name: 'Milagro de Orleans',
      desc: 'Caballeros con armadura cargan en formación sagrada pasando por encima de la arena.'
    }
  },
  {
    id: 'cleopatra',
    name: 'Cleopatra VII',
    title: 'Alejandría · La Antigüedad',
    era: 'La Antigüedad',
    spriteUrl: '/assets/fighters/cleopatra.png',
    stageName: 'Terraza de Alejandría',
    playstyle: 'Tácticas de engaño con abanicos cortantes y veneno',
    nexoGoal: 'Forjar un reino faraónico eterno que jamás caiga en el olvido.',
    bio: 'La reina del Nilo lucha con elegancia sin perder la calma. Controla el ritmo del combate lanzando abanicos de oro con efecto búmeran y cobras áspid venenosas que reptan por la arena.',
    special1: {
      name: 'Mordida del áspid',
      input: '↓ ↘ → + Patada',
      desc: 'Una cobra venenosa se desliza por el suelo y muerde por sorpresa.'
    },
    special2: {
      name: 'Abanicos de Isis',
      input: '← → + Puño',
      desc: 'Lanza dos abanicos dorados cortantes que vuelven a sus manos.'
    },
    superMove: {
      name: 'El Sarcófago Real',
      desc: 'El agua del Nilo inunda la arena y encierra al rival dentro de un sarcófago faraónico.'
    }
  },
  {
    id: 'julio_cesar',
    name: 'Julio César',
    title: 'Roma · La Antigüedad',
    era: 'La Antigüedad',
    spriteUrl: '/assets/fighters/julio_cesar.png',
    stageName: 'Senado de Roma',
    playstyle: 'Contragolpes con escudo testudo y tajos de gladius',
    nexoGoal: 'Instaurar la Pax Romana definitiva sobre todas las épocas del tiempo.',
    bio: 'Jefe de la Antigüedad. Con armadura dorada y penacho rojo, impone la disciplina de las legiones romanas: bloquea cualquier ataque con su formación de escudo y responde con tajos fulminantes de gladius.',
    special1: {
      name: 'Tajo de gladius',
      input: '→ ↓ ↘ + Puño',
      desc: 'Estocada rápida de espada corta con gran prioridad de impacto.'
    },
    special2: {
      name: 'Muro testudo',
      input: '← ↓ ↙ + Bloqueo',
      desc: 'Adopta postura de escudo impenetrable y devuelve el golpe recibido.'
    },
    superMove: {
      name: 'La Legión Invicta',
      desc: 'Una cuadriga romana y una lluvia de lanzas pilum aplastan la arena.'
    }
  },
  {
    id: 'el_nexo',
    name: 'El Nexo',
    title: 'La Grieta del Tiempo · Jefe Final',
    era: 'El Vórtice del Origen',
    spriteUrl: '/assets/nexo_transparent.png',
    stageName: 'La Grieta del Reloj Roto',
    playstyle: 'Jefe de tres fases con teletransporte y colapso dimensional',
    nexoGoal: 'Encontrar a un campeón digno capaz de decidir el destino del tiempo.',
    bio: 'La entidad que sostiene los cinco fragmentos del tiempo roto tras el colapso del Reloj del Origen. En su cabeza porta los relojes de arena que marcan los siglos. No pertenece a ninguna era: es lo que la humanidad quiso construir y lo que recuerda.',
    special1: {
      name: 'Rebobinado',
      input: '← ↓ ↙ + Especial',
      desc: 'Deshace el daño reciente y reaparece a la espalda del rival.'
    },
    special2: {
      name: 'Manecillas cortantes',
      input: '↓ ↘ → + Puño',
      desc: 'Lanza dos manecillas gigantes de reloj que giran como sierras en el aire.'
    },
    superMove: {
      name: 'Colapso de los Cinco Siglos',
      desc: 'Monumentos de todas las eras colisionan a la vez sobre el adversario.'
    }
  }
];
