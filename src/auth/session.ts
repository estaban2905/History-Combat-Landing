import { API_URL, ApiError } from '../utils/api';

export interface Profile {
  id: string;
  username: string;
  points: number;
  wins: number;
  losses: number;
  avatar: string | null;
  frame: string | null;
  title: string | null;
  google_account: boolean;
}

interface SessionResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  player: Profile;
}

const KEY = 'hc_session_v1';

interface Tokens {
  access: string;
  refresh: string;
}

// El navegador puede bloquear el almacenamiento: sin él la sesión dura solo mientras la pestaña esté abierta.
let memory: Tokens | null = null;

function load(): Tokens | null {
  if (memory) return memory;
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) memory = JSON.parse(raw) as Tokens;
  } catch {
    /* sin almacenamiento */
  }
  return memory;
}

function save(t: Tokens | null) {
  memory = t;
  try {
    if (t) localStorage.setItem(KEY, JSON.stringify(t));
    else localStorage.removeItem(KEY);
  } catch {
    /* sin almacenamiento */
  }
}

export const hasSession = () => load() !== null;

/** Mensaje de error de la API ({error, message}) o uno genérico. */
async function toError(res: Response): Promise<ApiError> {
  let message = `Error ${res.status}`;
  let code = '';
  try {
    const body = (await res.json()) as { message?: string; error?: string };
    if (body.message) message = body.message;
    if (body.error) code = body.error;
  } catch {
    /* sin cuerpo */
  }
  return new ApiError(res.status, message, code);
}

async function post<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw await toError(res);
  return (await res.json()) as T;
}

function adopt(r: SessionResponse): Profile {
  save({ access: r.access_token, refresh: r.refresh_token });
  return r.player;
}

export async function login(email: string, password: string): Promise<Profile> {
  return adopt(await post<SessionResponse>('/auth/login', { email, password }));
}

export async function register(email: string, password: string, username: string): Promise<Profile> {
  return adopt(await post<SessionResponse>('/auth/register', { email, password, username, accept_terms: true }));
}

/**
 * Entrar con el ID token que entrega Google. Si la cuenta es nueva el servidor responde 409 `username_required`
 * (ApiError.code): hay que volver a llamar con `username` y `acceptTerms`.
 */
export async function loginWithGoogle(idToken: string, username?: string, acceptTerms?: boolean): Promise<Profile> {
  const body: Record<string, unknown> = { id_token: idToken };
  if (username !== undefined) body.username = username;
  if (acceptTerms !== undefined) body.accept_terms = acceptTerms;
  return adopt(await post<SessionResponse>('/auth/google', body));
}

export async function logout(): Promise<void> {
  const t = load();
  save(null);
  if (!t) return;
  try {
    await fetch(`${API_URL}/auth/logout`, { method: 'POST', headers: { Authorization: `Bearer ${t.access}` } });
  } catch {
    /* ya está cerrada de este lado */
  }
}

// Si varias peticiones caducan a la vez, solo una renueva la sesión.
let refreshing: Promise<boolean> | null = null;

function refresh(): Promise<boolean> {
  refreshing ??= (async () => {
    const t = load();
    if (!t) return false;
    try {
      adopt(await post<SessionResponse>('/auth/refresh', { refresh_token: t.refresh }));
      return true;
    } catch {
      save(null);
      return false;
    } finally {
      refreshing = null;
    }
  })();
  return refreshing;
}

/** GET con la sesión: si el token caducó lo renueva y reintenta una vez. 401 = no hay sesión. */
export async function authedGet<T>(path: string): Promise<T> {
  for (let attempt = 0; attempt < 2; attempt++) {
    const t = load();
    if (!t) throw new ApiError(401, 'Sin sesión');
    const res = await fetch(`${API_URL}${path}`, {
      headers: { Accept: 'application/json', Authorization: `Bearer ${t.access}` },
    });
    if (res.status === 401 && attempt === 0 && (await refresh())) continue;
    if (!res.ok) throw await toError(res);
    return (await res.json()) as T;
  }
  throw new ApiError(401, 'Sin sesión');
}

// ---- Datos privados de la cuenta ----

export interface MyMatch {
  id: string;
  played_at: string;
  opponent: string;
  my_fighter: string;
  opponent_fighter: string;
  result: 'win' | 'loss' | 'draw';
  delta: number;
  my_rounds: number;
  opponent_rounds: number;
  reason?: string | null;
}

export interface Achievement {
  key: string;
  progress: number;
  goal: number;
  done: boolean;
}

export interface StorySave {
  fighter: string;
  stage: number;
  continues: number;
  continues_used: number;
  difficulty: number;
  saved_at: number;
}

export interface SeasonResult {
  season: string;
  rank: number;
  points: number;
  peak_points: number;
  league: 'bronze' | 'silver' | 'gold' | 'diamond';
  wins: number;
  losses: number;
}

export interface Unlock {
  kind: string;
  key: string;
}

export const fetchMe = () => authedGet<Profile>('/me');
export const fetchMyMatches = (limit = 50) => authedGet<MyMatch[]>(`/me/matches?limit=${limit}`);
export const fetchMyAchievements = () => authedGet<Achievement[]>('/me/achievements');
export const fetchMyStories = () => authedGet<StorySave[]>('/me/stories');
export const fetchMySeasons = () => authedGet<SeasonResult[]>('/me/seasons');
export const fetchMyUnlocks = () => authedGet<Unlock[]>('/me/unlocks');
