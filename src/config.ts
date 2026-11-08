/**
 * Dirección del juego en el navegador (servicio `web` de Railway).
 * La landing vive en historycombat.cl; el juego tiene su propia dirección.
 * Se puede cambiar al compilar con VITE_GAME_URL.
 */
export const GAME_URL: string = (import.meta.env.VITE_GAME_URL as string | undefined) || 'https://historycombat.cl';

/**
 * Client ID de Google (OAuth, tipo web): el mismo valor que `GOOGLE_CLIENT_ID` del servidor y del juego web. No es un
 * secreto. Vite solo expone variables que empiezan por VITE_, así que en el servicio de la landing se llama
 * VITE_GOOGLE_CLIENT_ID. Vacío = el botón «Continuar con Google» no se muestra.
 */
export const GOOGLE_CLIENT_ID: string = ((import.meta.env.VITE_GOOGLE_CLIENT_ID as string | undefined) ?? '').trim();

/** Release más reciente del juego para Windows (lo publica el pipeline del repo del juego). */
export const DOWNLOAD_URL =
  'https://github.com/estaban2905/History-Combat/releases/latest/download/HistoryCombat.exe';
