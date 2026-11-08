// Comprueba que el plantel de la landing (src/data/roster.ts) coincide con el del juego (data/roster.json del repo
// del juego): mismos luchadores, mismo orden y mismo rol. No toca el build: es una comprobación que se lanza a mano
// o desde CI (`npm run check:roster`).
//
// Fuente del JSON: argumento (ruta local o URL) o, por defecto, la rama indicada en ROSTER_BRANCH (main).
import { readFileSync } from "node:fs";

const branch = process.env.ROSTER_BRANCH ?? "main";
const source = process.argv[2] ?? `https://raw.githubusercontent.com/estaban2905/History-Combat/${branch}/data/roster.json`;

async function loadGame() {
  if (/^https?:\/\//.test(source)) {
    const res = await fetch(source);
    if (!res.ok) throw new Error(`No se pudo leer ${source} (HTTP ${res.status})`);
    return res.json();
  }
  return JSON.parse(readFileSync(source, "utf8"));
}

const ts = readFileSync(new URL("../src/data/roster.ts", import.meta.url), "utf8");
const landing = [...ts.matchAll(/\{\s*id:\s*"([a-z0-9_]+)"[^}]*?role:\s*'([a-z]+)'/g)].map((m) => ({ id: m[1], role: m[2] }));
const game = (await loadGame()).fighters.map((f) => ({ id: f.id, role: f.role }));

const problems = [];
const gIds = new Set(game.map((f) => f.id));
const lIds = new Set(landing.map((f) => f.id));
for (const f of game) if (!lIds.has(f.id)) problems.push(`falta en la landing: ${f.id}`);
for (const f of landing) if (!gIds.has(f.id)) problems.push(`sobra en la landing (el juego no lo tiene): ${f.id}`);
const gRole = Object.fromEntries(game.map((f) => [f.id, f.role]));
for (const f of landing) if (gRole[f.id] && gRole[f.id] !== f.role) problems.push(`rol distinto en ${f.id}: landing ${f.role}, juego ${gRole[f.id]}`);
if (problems.length === 0 && game.map((f) => f.id).join() !== landing.map((f) => f.id).join()) problems.push("mismos luchadores, pero en otro orden");

console.log(`Juego: ${game.length} · Landing: ${landing.length} (fuente: ${source})`);
if (problems.length) {
  console.error(problems.map((p) => `  - ${p}`).join("\n"));
  process.exit(1);
}
console.log("Plantel de la landing al día.");
