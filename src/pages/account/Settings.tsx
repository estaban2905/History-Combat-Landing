import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import { Card } from '../../components/ui';

/** Ajustes: datos de la cuenta y cerrar sesión. Cambiar nombre, avatar o contraseña se hace desde el juego. */
export const Settings: React.FC = () => {
  const { player, logout } = useAuth();
  const navigate = useNavigate();
  if (!player) return null;

  return (
    <div className="space-y-4 max-w-lg">
      <Card className="p-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-neutral-400">Nombre de jugador</span>
          <strong className="text-neutral-100">{player.username}</strong>
        </div>
        <div className="flex justify-between">
          <span className="text-neutral-400">Tipo de cuenta</span>
          <strong className="text-neutral-100">{player.google_account ? 'Google' : 'Correo y contraseña'}</strong>
        </div>
      </Card>

      <p className="text-xs text-neutral-400 leading-relaxed">
        Para cambiar tu nombre, tu avatar, tu marco o tu contraseña, o para borrar tu cuenta, usa el menú de perfil dentro del
        juego. Cómo tratamos tus datos está en la{' '}
        <Link to="/legal#legal-privacidad" className="text-amber-400 underline">
          Política de privacidad
        </Link>
        .
      </p>

      <button
        onClick={async () => {
          await logout();
          navigate('/', { replace: true });
        }}
        className="px-4 py-2.5 bg-[#1a2636] hover:bg-[#233549] border border-[#2a3f5a] text-neutral-200 font-display font-semibold text-sm rounded cursor-pointer"
      >
        Cerrar sesión
      </button>
    </div>
  );
};
