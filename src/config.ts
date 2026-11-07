/**
 * Dirección del juego en el navegador (servicio `web` de Railway).
 * La landing vive en historycombat.cl; el juego tiene su propia dirección.
 * Se puede cambiar al compilar con VITE_GAME_URL.
 */
export const GAME_URL: string = (import.meta.env.VITE_GAME_URL as string | undefined) ?? 'https://historycombat.cl';

/** Release más reciente del juego para Windows (lo publica el pipeline del repo del juego). */
export const DOWNLOAD_URL =
  'https://github.com/estaban2905/History-Combat/releases/latest/download/HistoryCombat.exe';
