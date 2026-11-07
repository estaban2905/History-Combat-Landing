// Cliente de solo lectura de la API pública del servidor de partidas.
// La dirección se puede cambiar al compilar con VITE_API_URL.
export const API_URL: string =
  (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, '') ??
  'https://server-production-f7f1.up.railway.app';

export interface RankingRow {
  username: string;
  points: number;
  wins: number;
  losses: number;
  gained?: number;
  avatar: string | null;
  favorite_fighter: string | null;
  streak: number;
}

export interface RecentMatch {
  id: string;
  played_at: string;
  opponent: string;
  my_fighter: string;
  opponent_fighter: string;
  result: 'win' | 'loss' | 'draw';
  delta: number;
  my_rounds: number;
  opponent_rounds: number;
}

export interface PlayerProfile {
  username: string;
  points: number;
  wins: number;
  losses: number;
  avatar: string | null;
  rank: number;
  favorite_fighter: string | null;
  streak: number;
  recent: RecentMatch[];
}

export interface Season {
  id: string;
  ends_at: string;
}

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, { headers: { Accept: 'application/json' } });
  if (!res.ok) throw new ApiError(res.status, `HTTP ${res.status}`);
  return (await res.json()) as T;
}

export const fetchRanking = (period: 'all' | 'week', fighter: string) => {
  const q = new URLSearchParams({ limit: '50', period });
  if (fighter) q.set('fighter', fighter);
  return get<RankingRow[]>(`/leaderboard?${q}`);
};

export const fetchPlayer = (username: string) =>
  get<PlayerProfile>(`/players/${encodeURIComponent(username)}`);

export const fetchSeason = () => get<Season>('/season');

// Ligas: mismos umbrales que el juego (server/src/services/season.service.ts).
export const LEAGUES = [
  { key: 'diamond', label: 'Diamante', from: 1500, color: 'text-cyan-300 border-cyan-700 bg-cyan-950/50' },
  { key: 'gold', label: 'Oro', from: 1300, color: 'text-amber-300 border-amber-700 bg-amber-950/50' },
  { key: 'silver', label: 'Plata', from: 1100, color: 'text-neutral-200 border-neutral-500 bg-neutral-800/60' },
  { key: 'bronze', label: 'Bronce', from: 0, color: 'text-orange-400 border-orange-800 bg-orange-950/50' },
] as const;

export const leagueOf = (points: number) => LEAGUES.find((l) => points >= l.from) ?? LEAGUES[LEAGUES.length - 1];
