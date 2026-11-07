export interface Era {
  id: string;
  order: number;
  name: string;
  period: string;
  bossName: string;
  bossRole: string;
  bossWish: string;
  stageName: string;
  description: string;
  nexoLine: string;
  creatorName: string;
  creatorPossession: string;
}

export const ERAS_DATA: Era[] = [
  {
    id: 'era_1',
    order: 1,
    name: 'El Mundo Actual',
    period: 'Siglo XXI',
    bossName: 'Donald Trump',
    bossRole: 'Magnate y presidente',
    bossWish: 'Aprovechar el caos para hacer negocios y quedarse con todas las ciudades.',
    stageName: 'Ciudad invadida · Frente I',
    description: 'Kim Jong-un, Maduro, Bin Laden, Xi Jinping, Putin, Escobar... Los vivos quieren más poder: Kim, más bombas con el uranio infinito del Nexo; Putin, un imperio sin fronteras; Maduro, volver al poder desde su celda. Bin Laden y Escobar, volver al día en que cayeron.',
    nexoLine: '«Los vivos quieren más poder; los muertos, volver a ganar. Detenlos a todos.»',
    creatorName: 'Marie Curie',
    creatorPossession: 'Arrancada de París, 1898. Su radiactividad alimenta al Nexo y al uranio infinito de Kim. Al vencerla, te da lo que sabe.'
  },
  {
    id: 'era_2',
    order: 2,
    name: 'El Siglo XX',
    period: '1900 - 1999',
    bossName: 'Adolf Hitler',
    bossRole: 'Dictador del Tercer Reich',
    bossWish: 'Volver a Stalingrado, 1943, y ganar la guerra que perdió.',
    stageName: 'Ciudad invadida · Frente II',
    description: 'Saddam, Castro, Pinochet, Mussolini, Stalin, Rasputín... Un siglo de guerras cae sobre tus ciudades, con ejércitos que quieren volver a su día de la derrota.',
    nexoLine: '«La colisión mezcló las épocas. Sus ejércitos avanzan sobre tus ciudades.»',
    creatorName: 'Albert Einstein',
    creatorPossession: 'Arrancado de Berna, 1905. El Nexo usa su propia ecuación para atarlo: «El tiempo es relativo y el Nexo lo estira a su antojo».'
  },
  {
    id: 'era_3',
    order: 3,
    name: 'Revoluciones, Imperios y Descubrimientos',
    period: 'Siglos XV - XIX',
    bossName: 'Napoleón Bonaparte',
    bossRole: 'El Emperador de los franceses',
    bossWish: 'Volver a Waterloo, 18 de junio de 1815, y ganar la batalla que perdió.',
    stageName: 'Ciudad invadida · Frente III',
    description: 'Iván el Terrible, Nostradamus, Cortés, Maquiavelo, Colón... Coronas, flotas y revoluciones traídas de otro tiempo, que quieren reescribir su derrota.',
    nexoLine: '«Coronas, flotas y revoluciones, traídas de otro tiempo, quieren reescribir su derrota.»',
    creatorName: 'Nikola Tesla',
    creatorPossession: 'Arrancado de Colorado Springs, 1899. Su corriente alterna es la cuerda que lo arrastra: rompe su ritmo y te soltará.'
  },
  {
    id: 'era_4',
    order: 4,
    name: 'Antigüedad, Edad Media y Renacimiento',
    period: 'Hasta el siglo XV',
    bossName: 'Julio César',
    bossRole: 'Dictador del Senado Romano',
    bossWish: 'Volver a los Idus de Marzo del 44 a.C. y evitar las puñaladas.',
    stageName: 'Ciudad invadida · Frente IV',
    description: 'Gengis Kan, Cleopatra, Alejandro Magno y César. El frente más antiguo, arrancado del pasado: si se reescribe, todo lo demás se derrumba.',
    nexoLine: '«El frente más antiguo, arrancado del pasado. Si se reescribe, todo lo demás se derrumba.»',
    creatorName: 'Leonardo da Vinci',
    creatorPossession: 'Arrancado de Milán, 1495, y obligado a diseñar el Reloj. Es su último engranaje: si te vence, el Reloj queda completo.'
  }
];

export interface OriginScientist {
  id: string;
  name: string;
  role: string;
  era: string;
  quote: string;
  truthRevealed: string;
}

export const SCIENTISTS_DATA: OriginScientist[] = [
  {
    id: 'marie_curie',
    name: 'Marie Curie',
    role: 'Creadora del Reloj · Época 1',
    era: 'El Mundo Actual',
    quote: 'Me arrancó de París, 1898. Mi radiactividad alimenta al Nexo y al uranio infinito de Kim.',
    truthRevealed: 'Todo lo radiactivo decae con el tiempo, y el control del Nexo también si lo debilitas. Cuando cae, te da lo que sabe.'
  },
  {
    id: 'einstein',
    name: 'Albert Einstein',
    role: 'Creador del Reloj · Época 2',
    era: 'El Siglo XX',
    quote: 'Me arrancó de Berna, 1905, y usa mi propia ecuación para atarme. No puedo controlar mi cuerpo.',
    truthRevealed: 'El Nexo: «Él dio la teoría y yo la convertí en arma. Si te vence, nadie más podrá desafiarme». Vence a su sombra y lo liberas.'
  },
  {
    id: 'tesla',
    name: 'Nikola Tesla',
    role: 'Creador del Reloj · Época 3',
    era: 'Revoluciones, Imperios y Descubrimientos',
    quote: 'Me arrancó de Colorado Springs, 1899. Mi corriente alterna es la cuerda que me arrastra.',
    truthRevealed: 'Todo lo que oscila resuena: golpea al ritmo adecuado y te soltará.'
  },
  {
    id: 'da_vinci',
    name: 'Leonardo da Vinci',
    role: 'Creador del Reloj · Época 4',
    era: 'Antigüedad, Edad Media y Renacimiento',
    quote: 'Me arrancó de Milán, 1495, y me obligó a diseñar el Reloj. Sus engranajes son mi jaula.',
    truthRevealed: 'En su cuaderno está el plano completo: un reloj de cinco fragmentos, y él es el último engranaje.'
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
    description: 'Los ejércitos se desvanecen, cada uno vuelve a su tiempo y la Tierra respira. El mundo recuerda sus errores y aprende de ellos.',
    philosophicalMeaning: 'La historia no se borra: se recuerda y se aprende.',
    howToUnlock: 'Vence al Nexo y elige «Reparar».'
  },
  {
    id: 'rewrite',
    title: 'Reescribir la Historia',
    badge: 'Final 2',
    description: 'Tomas el poder del Nexo y el tiempo es tuyo. Tu luchador lo moldea a su imagen, y cada epílogo muestra el precio: un imperio sin fin, pero sin nadie que se atreva a contradecirlo.',
    philosophicalMeaning: 'Quien reescribe la historia a su medida acaba repitiendo sus errores.',
    howToUnlock: 'Vence al Nexo y elige «Reescribir».'
  },
  {
    id: 'liberate',
    title: 'Liberar el Tiempo',
    badge: 'Final 3 (Oculto)',
    description: '«Ni tú, ni yo». El tiempo deja de pertenecer a nadie: ni al Nexo ni a quien lo venció. Un final que el juego muestra como «???» hasta que lo consigues.',
    philosophicalMeaning: 'El tiempo es de todos: cada generación aprende de la anterior.',
    howToUnlock: 'Llega al Nexo sin que ninguno de los cuatro creadores del Reloj te derrote en combate.'
  }
];
