import React, { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { ApiError } from '../utils/api';
import { Card, PageHeader } from '../components/ui';

const field =
  'w-full bg-[#0c121a] border border-[#2a3f5a] text-neutral-100 text-sm rounded px-3 py-2.5 placeholder:text-neutral-600 focus:outline-none focus:border-amber-400';

/** Entrar o crear cuenta: /entrar. Es la misma cuenta que usa el juego. */
export const LoginPage: React.FC = () => {
  const { player, login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? '/cuenta';

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  if (player) return <Navigate to={from} replace />;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (mode === 'register') {
      if (!/^[A-Za-z0-9_]{3,16}$/.test(username)) return setError('El nombre debe tener de 3 a 16 letras, números o guion bajo.');
      if (password.length < 6) return setError('La contraseña debe tener al menos 6 caracteres.');
      if (!accepted) return setError('Debes aceptar los términos y la política de privacidad.');
    }
    setBusy(true);
    try {
      if (mode === 'login') await login(email.trim(), password);
      else await register(email.trim(), password, username);
      navigate(from, { replace: true });
    } catch (err) {
      setError(
        err instanceof ApiError && err.status === 429
          ? 'Demasiados intentos. Espera un momento.'
          : err instanceof ApiError
            ? err.message
            : 'No se pudo conectar con el servidor.',
      );
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 py-12 md:py-16">
      <PageHeader tag="Tu cuenta" title={mode === 'login' ? 'Iniciar sesión' : 'Crear cuenta'}>
        Es la misma cuenta del juego: tus puntos, partidas y progreso están aquí.
      </PageHeader>

      <Card className="p-5 space-y-4">
        <div className="flex rounded overflow-hidden border border-[#2a3f5a] text-xs font-display font-semibold">
          {([
            ['login', 'Ya tengo cuenta'],
            ['register', 'Crear cuenta'],
          ] as const).map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => {
                setMode(key);
                setError('');
              }}
              className={`flex-1 px-3 py-2 cursor-pointer transition-colors ${
                mode === key ? 'bg-amber-400 text-neutral-950' : 'bg-[#101722] text-neutral-300 hover:bg-[#1a2636]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="space-y-3">
          {mode === 'register' && (
            <label className="block text-xs text-neutral-400 space-y-1">
              Nombre de jugador
              <input
                className={field}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                maxLength={16}
                autoComplete="username"
                placeholder="3 a 16 letras, números o _"
                required
              />
            </label>
          )}
          <label className="block text-xs text-neutral-400 space-y-1">
            Correo
            <input
              className={field}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </label>
          <label className="block text-xs text-neutral-400 space-y-1">
            Contraseña
            <input
              className={field}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
              minLength={6}
              required
            />
          </label>

          {mode === 'register' && (
            <label className="flex items-start gap-2 text-[11px] text-neutral-400 leading-relaxed">
              <input type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} className="mt-0.5" />
              <span>
                Tengo 14 años o más y acepto los{' '}
                <Link to="/legal#legal-terminos" className="text-amber-400 underline">
                  Términos
                </Link>{' '}
                y la{' '}
                <Link to="/legal#legal-privacidad" className="text-amber-400 underline">
                  Política de privacidad
                </Link>
                .
              </span>
            </label>
          )}

          {error && (
            <p role="alert" className="text-xs text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={busy}
            className="w-full py-3 bg-amber-400 hover:bg-amber-300 disabled:opacity-60 text-neutral-950 font-display font-bold text-sm rounded cursor-pointer"
          >
            {busy ? 'Un momento…' : mode === 'login' ? 'Entrar' : 'Crear cuenta'}
          </button>
        </form>

        <p className="text-[11px] text-neutral-500">
          Si creaste tu cuenta con Google en el juego, por ahora entra desde el juego: aquí solo funciona el acceso con correo
          y contraseña.
        </p>
      </Card>
    </div>
  );
};
