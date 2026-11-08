import { GOOGLE_CLIENT_ID } from '../config';

// Google Identity Services (https://developers.google.com/identity/gsi/web): solo lo que usamos.
interface CredentialResponse {
  credential?: string;
}
interface GoogleAccountsId {
  initialize(config: { client_id: string; callback: (r: CredentialResponse) => void; cancel_on_tap_outside?: boolean }): void;
  renderButton(
    parent: HTMLElement,
    options: { type?: 'standard'; theme?: 'outline' | 'filled_blue' | 'filled_black'; size?: 'large' | 'medium' | 'small'; text?: string; shape?: string; width?: number; locale?: string },
  ): void;
}
declare global {
  interface Window {
    google?: { accounts: { id: GoogleAccountsId } };
  }
}

/** Hay Client ID configurado: se puede ofrecer «Continuar con Google». */
export const googleEnabled = GOOGLE_CLIENT_ID !== '';

let loading: Promise<GoogleAccountsId> | null = null;

/** Carga el script de Google una sola vez. Falla si algo lo bloquea (extensión, red). */
export function loadGoogle(): Promise<GoogleAccountsId> {
  if (window.google?.accounts?.id) return Promise.resolve(window.google.accounts.id);
  loading ??= new Promise<GoogleAccountsId>((resolve, reject) => {
    const s = document.createElement('script');
    s.src = 'https://accounts.google.com/gsi/client';
    s.async = true;
    s.onload = () => (window.google?.accounts?.id ? resolve(window.google.accounts.id) : reject(new Error('Google no respondió')));
    s.onerror = () => {
      loading = null;
      reject(new Error('No se pudo cargar Google'));
    };
    document.head.appendChild(s);
  });
  return loading;
}

// GSI avisa si se llama a initialize más de una vez: se inicia una vez y el callback se cambia por pantalla.
let initialized = false;
let handler: (idToken: string) => void = () => {};

export function renderGoogleButton(parent: HTMLElement, onToken: (idToken: string) => void): Promise<void> {
  handler = onToken;
  return loadGoogle().then((id) => {
    if (!initialized) {
      id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        cancel_on_tap_outside: true,
        callback: (r) => {
          if (r.credential) handler(r.credential);
        },
      });
      initialized = true;
    }
    id.renderButton(parent, { type: 'standard', theme: 'outline', size: 'large', text: 'continue_with', shape: 'rectangular', width: 320, locale: 'es' });
  });
}
