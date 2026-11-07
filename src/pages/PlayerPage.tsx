import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { ApiError, fetchPlayer, type PlayerProfile } from '../utils/api';
import { Card, ErrorBox, LeagueBadge, Loading, MatchList, Portrait, StatBox, fighterName, winRate } from '../components/ui';

/** Perfil público de un jugador: /jugador/:username */
export const PlayerPage: React.FC = () => {
  const { username = '' } = useParams();
  const { player } = useAuth();
  const [profile, setProfile] = useState<PlayerProfile | null>(null);
  const [error, setError] = useState<'notfound' | 'failed' | null>(null);

  useEffect(() => {
    let cancelled = false;
    setProfile(null);
    setError(null);
    fetchPlayer(username)
      .then((p) => !cancelled && setProfile(p))
      .catch((e) => !cancelled && setError(e instanceof ApiError && e.status === 404 ? 'notfound' : 'failed'));
    return () => {
      cancelled = true;
    };
  }, [username]);

  const isMe = profile !== null && player?.username.toLowerCase() === profile.username.toLowerCase();

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-4">
      <Link to="/ranking" className="text-xs font-mono text-neutral-400 hover:text-amber-400">
        ← Volver al ranking
      </Link>

      {!profile && !error && <Loading />}
      {error === 'notfound' && <ErrorBox>No existe un jugador llamado «{username}».</ErrorBox>}
      {error === 'failed' && <ErrorBox>No se pudo cargar el perfil. Inténtalo de nuevo en unos minutos.</ErrorBox>}

      {profile && (
        <Card className="p-5 space-y-4">
          <div className="flex items-center gap-4">
            <Portrait id={profile.avatar} size={72} />
            <div className="min-w-0 flex-1">
              <h1 className="font-display font-black text-2xl text-neutral-100 truncate">{profile.username}</h1>
              <div className="flex items-center gap-2 mt-1">
                <LeagueBadge points={profile.points} />
                <span className="font-mono text-xs text-neutral-400">Puesto #{profile.rank}</span>
              </div>
            </div>
            {isMe && (
              <Link
                to="/cuenta"
                className="px-3 py-2 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-display font-bold text-xs rounded"
              >
                Mi cuenta
              </Link>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <StatBox label="Puntos" value={profile.points} />
            <StatBox label="V–D" value={`${profile.wins}–${profile.losses}`} />
            <StatBox label="% Vic." value={winRate(profile.wins, profile.losses)} />
            <StatBox label="Racha" value={profile.streak > 0 ? `🔥 ${profile.streak}` : '—'} />
          </div>

          <p className="text-xs text-neutral-300">
            Luchador favorito: <strong className="text-neutral-100">{fighterName(profile.favorite_fighter)}</strong>
          </p>

          <div>
            <h2 className="font-mono text-[10px] text-amber-400 uppercase tracking-wider mb-2">Últimas partidas</h2>
            {profile.recent.length === 0 ? (
              <p className="text-xs text-neutral-500">Todavía no tiene duelos clasificatorios.</p>
            ) : (
              <MatchList matches={profile.recent} showDate />
            )}
          </div>
        </Card>
      )}
    </div>
  );
};
