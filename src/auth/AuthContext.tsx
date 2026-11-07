import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import * as session from './session';
import type { Profile } from './session';

interface AuthValue {
  /** Jugador con sesión abierta, o null. */
  player: Profile | null;
  /** true mientras se comprueba si la sesión guardada sigue valiendo. */
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, username: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthValue | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [player, setPlayer] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(session.hasSession());

  useEffect(() => {
    if (!session.hasSession()) return;
    let cancelled = false;
    session
      .fetchMe()
      .then((p) => !cancelled && setPlayer(p))
      .catch(() => !cancelled && setPlayer(null))
      .finally(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    setPlayer(await session.login(email, password));
  }, []);

  const register = useCallback(async (email: string, password: string, username: string) => {
    setPlayer(await session.register(email, password, username));
  }, []);

  const logout = useCallback(async () => {
    setPlayer(null);
    await session.logout();
  }, []);

  const value = useMemo(() => ({ player, loading, login, register, logout }), [player, loading, login, register, logout]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth(): AuthValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth fuera de AuthProvider');
  return ctx;
}
