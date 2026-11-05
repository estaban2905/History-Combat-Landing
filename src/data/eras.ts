export interface Era {
  id: string;
  order: number;
  name: string;
  period: string;
  bossName: string;
  bossRole: string;
  stageName: string;
  description: string;
  clues: string;
}

export const ERAS_DATA: Era[] = [
  {
    id: 'era_1',
    order: 1,
    name: 'El Mundo Actual',
    period: 'Siglo XXI',
    bossName: 'Donald Trump',
    bossRole: 'Magnate de la Torre',
    stageName: 'Azotea del Trump World Center',
    description: 'Rascacielos iluminados, torres doradas y medios de comunicación. El punto de inicio del viaje hacia atrás en el tiempo.',
    clues: 'El Nexo emite ondas de frecuencia temporal a través de las antenas satelitales.'
  },
  {
    id: 'era_2',
    order: 2,
    name: 'El Siglo XX',
    period: '1900 - 1999',
    bossName: 'El Dictador del Búnker',
    bossRole: 'Tirano en Retirada',
    stageName: 'Búnker de Berlín 1945',
    description: 'Trincheras, sirenas y búnkeres de hormigón. El jefe es caricaturizado en su mesa de mapas en plena rabieta.',
    clues: 'Einstein advierte que aquí fue donde la energía atómica aceleró la fractura.'
  },
  {
    id: 'era_3',
    order: 3,
    name: 'Revoluciones y Progreso',
    period: 'Siglos XVIII - XIX',
    bossName: 'Napoleón Bonaparte',
    bossRole: 'El Emperador en Waterloo',
    stageName: 'Colina de Waterloo',
    description: 'Humo de pólvora, fábricas de vapor e ideales revolucionarios. Napoleón custodia el tercer fragmento.',
    clues: 'Tesla revela que el vapor y los engranajes industriales prepararon el chasis del Reloj.'
  },
  {
    id: 'era_4',
    order: 4,
    name: 'Imperios y Descubrimientos',
    period: 'Siglos XV - XVII',
    bossName: 'Hernán Cortés',
    bossRole: 'El Conquistador de los Galeones',
    stageName: 'Calzadas de Tenochtitlan',
    description: 'Galeones de madera en altamar y fortalezas coloniales. Aquí chocan conquistadores y defensores originarios.',
    clues: 'Da Vinci dejó los planos ocultos en la bodega de un navío encallado.'
  },
  {
    id: 'era_5',
    order: 5,
    name: 'La Antigüedad',
    period: 'Siglo VIII a.C. - Siglo V d.C.',
    bossName: 'Julio César',
    bossRole: 'Dictador del Senado Romano',
    stageName: 'Senado de Roma',
    description: 'Columnas de mármol, legiones y filósofos. César defiende la última puerta antes de la grieta pura del Nexo.',
    clues: 'Sócrates pregunta: ¿Qué es el tiempo sino la memoria de quienes lo sufren?'
  }
];

export interface OriginScientist {
  id: string;
  name: string;
  role: string;
  quote: string;
  truthRevealed: string;
}

export const SCIENTISTS_DATA: OriginScientist[] = [
  {
    id: 'tesla',
    name: 'Nikola Tesla',
    role: 'Canalizador del Voltaje Temporal',
    quote: 'La energía no se crea ni se destruye... pero el tiempo, amigos míos, sí puede astillarse.',
    truthRevealed: 'Descubrió que el Reloj no usaba engranajes ordinarios sino la oscilación del éter. Advirtió que una sobrecarga partiría la realidad en cinco trozos.'
  },
  {
    id: 'einstein',
    name: 'Albert Einstein',
    role: 'Teórico del Espacio Relativo',
    quote: 'Yo calculé el precio exacto del reloj. Les advertí que costaría la historia misma... y lo encendieron igual.',
    truthRevealed: 'Supo con meses de anticipación que el Nexo cobraría conciencia propia y se alimentaría de los anhelos frustrados de los grandes líderes mundiales.'
  },
  {
    id: 'marie_curie',
    name: 'Marie Curie',
    role: 'Alquimista de los Isótopos Primordiales',
    quote: 'El brillo del radio fue la linterna con la que abrimos la puerta al vacío.',
    truthRevealed: 'Aportó la batería luminiscente perpetua que aún hace palpitar el corazón del Nexo en su tercera fase.'
  },
  {
    id: 'da_vinci',
    name: 'Leonardo Da Vinci',
    role: 'Arquitecto del Chasis',
    quote: 'Dibujé la proporción perfecta del universo; olvidé que el hombre jamás respeta las proporciones.',
    truthRevealed: 'Diseñó los cilindros concéntricos que sostienen las cinco épocas. Dejó un engranaje secreto que permite el Final Secreto.'
  }
];

export interface GameEnding {
  id: string;
  title: string;
  badge: string;
  description: string;
  philosophicalMeaning: string;
  howToUnlock: string;
}

export const ENDINGS_DATA: GameEnding[] = [
  {
    id: 'repair',
    title: 'Reparar el Tiempo',
    badge: 'Final 1',
    description: 'Cada combatiente es devuelto a su siglo y lugar exacto. La fractura se sella, los recuerdos del torneo quedan como mitos dispersos y la historia continúa su curso natural.',
    philosophicalMeaning: 'La historia no se borra ni se maquilla: se recuerda, se comprende y se aprende para no repetir los mismos errores.',
    howToUnlock: 'Vence al Nexo en su tercera fase y elige Restaurar la Línea Primordial.'
  },
  {
    id: 'rewrite',
    title: 'Reescribir la Historia',
    badge: 'Final 2',
    description: 'El vencedor toma la corona del Nexo y altera el pasado a su capricho: Napoleón gana Waterloo, César vive cien años o Trump funda un imperio intergaláctico.',
    philosophicalMeaning: 'Quien reescribe la historia para borrar sus derrotas termina convirtiéndose en el arquitecto de su propia y más ridícula caída.',
    howToUnlock: 'Vence al Nexo y elige Reclamar el Poder del Reloj.'
  },
  {
    id: 'liberate',
    title: 'Liberar el Tiempo',
    badge: 'Final 3 (Secreto)',
    description: 'El Reloj del Origen es destruido definitivamente. Las líneas temporales no vuelven a encadenarse bajo ningún amo ni entidad cósmica. La historia queda como un lienzo abierto.',
    philosophicalMeaning: 'El tiempo ya no es una cárcel de piedra ni un juguete de los tiranos: cada ser humano forja su propio destino.',
    howToUnlock: 'Condición: Completa toda la campaña del Modo Historia derrotando a los 5 jefes y al Nexo sin gastar ninguna de tus 3 revanchas.'
  }
];
