import { useEffect, useState } from 'react';

export interface AsyncState<T> {
  data: T | null;
  error: boolean;
  loading: boolean;
}

/** Carga datos al montar (o cuando cambian las dependencias) y expone cargando / error. */
export function useAsync<T>(load: () => Promise<T>, deps: unknown[] = []): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({ data: null, error: false, loading: true });

  useEffect(() => {
    let cancelled = false;
    setState({ data: null, error: false, loading: true });
    load()
      .then((data) => !cancelled && setState({ data, error: false, loading: false }))
      .catch(() => !cancelled && setState({ data: null, error: true, loading: false }));
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return state;
}
