/* طرح‌های SVG برای آثار سفالی و مجسمه‌ها تا زمانی که عکس واقعی در دسترس باشد. */

const MATERIALS = {
  marble: ["#f6f3ec", "#b9b3a5"],
  bronze: ["#d6a763", "#4a3016"],
  wood: ["#c18a52", "#5a3515"],
  stone: ["#9a9a95", "#43433e"],
  plaster: ["#ffffff", "#d3cdbf"],
  terracotta: ["#d9825a", "#7a3a1f"],
};

let gid = 0;

function Defs({ id, a, b }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor={a} />
      <stop offset="1" stopColor={b} />
    </linearGradient>
  );
}

const CERAMIC_BODIES = {
  vase: (f) => (
    <path d="M42 10h36c0 14-8 18-8 30 18 8 28 28 22 54-4 22-16 32-32 32S32 116 28 94c-6-26 4-46 22-54 0-12-8-16-8-30z" fill={f} />
  ),
  bowl: (f) => (
    <>
      <path d="M8 56h104c0 38-22 64-52 64S8 94 8 56z" fill={f} />
      <ellipse cx="60" cy="56" rx="52" ry="10" fill={f} />
    </>
  ),
  jug: (f) => (
    <>
      <path d="M40 18h36l4 16c18 8 24 32 18 56-4 20-16 28-40 28S24 110 22 90c-4-24 2-48 18-56z" fill={f} />
      <path d="M96 48c24-6 24 38-4 40" fill="none" stroke={f} strokeWidth="9" strokeLinecap="round" />
    </>
  ),
  plate: (f) => (
    <>
      <ellipse cx="60" cy="86" rx="54" ry="22" fill={f} />
      <ellipse cx="60" cy="82" rx="38" ry="12" fill="#ffffff55" />
      <path d="M44 106h32l4 12H40z" fill={f} />
    </>
  ),
  teapot: (f) => (
    <>
      <ellipse cx="58" cy="78" rx="38" ry="34" fill={f} />
      <path d="M92 70c16-2 22 4 28 12-8-2-14-2-24 6z" fill={f} />
      <path d="M22 62c-18-6-20 28-2 34" fill="none" stroke={f} strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="58" cy="46" rx="24" ry="8" fill={f} />
      <circle cx="58" cy="36" r="6" fill={f} />
    </>
  ),
  jar: (f) => (
    <>
      <rect x="30" y="34" width="60" height="84" rx="18" fill={f} />
      <rect x="36" y="22" width="48" height="16" rx="6" fill={f} />
      <circle cx="60" cy="16" r="6" fill={f} />
    </>
  ),
};

export function Ceramic({ shape, glaze = "terracotta", accent = "#f2e2c4", label }) {
  const [a, b] = MATERIALS[glaze] || MATERIALS.terracotta;
  const id = `cg${gid++}`;
  const Body = CERAMIC_BODIES[shape] || CERAMIC_BODIES.vase;
  return (
    <svg viewBox="0 0 120 140" role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <defs>
        <Defs id={id} a={a} b={b} />
      </defs>
      <ellipse cx="60" cy="130" rx="44" ry="6" fill="#0003" />
      {Body(`url(#${id})`)}
      {shape !== "plate" && <path d="M30 78h60M34 92h52" stroke={accent} strokeWidth="3" opacity=".75" fill="none" />}
    </svg>
  );
}

const SCULPT_BODIES = {
  bust: (f) => (
    <path d="M60 12c-16 0-26 12-26 30 0 12 4 20 10 26v8c-14 4-28 10-32 24h96c-4-14-18-20-32-24v-8c6-6 10-14 10-26 0-18-10-30-26-30z" fill={f} />
  ),
  torso: (f) => (
    <path d="M36 14c10 6 38 6 48 0 6 14 4 36-2 50-4 10-4 24 2 40H36c6-16 6-30 2-40-6-14-8-36-2-50z" fill={f} />
  ),
  figure: (f) => (
    <>
      <path d="M62 8c22 10 26 36 12 56-8 12-8 26 0 42-16 6-34-2-38-20-6-24 6-52 26-78z" fill={f} />
      <circle cx="54" cy="52" r="8" fill="#0000" stroke="#0004" strokeWidth="2" />
    </>
  ),
  ring: (f) => (
    <>
      <ellipse cx="60" cy="60" rx="46" ry="46" fill={f} />
      <ellipse cx="60" cy="60" rx="18" ry="22" fill="#14100e" />
    </>
  ),
  stele: (f) => (
    <>
      <path d="M38 14h44l4 98H34z" fill={f} />
      <path d="M46 34h28M46 50h28M46 66h18M46 82h24" stroke="#0004" strokeWidth="3" fill="none" />
    </>
  ),
  bird: (f) => (
    <>
      <ellipse cx="58" cy="70" rx="34" ry="22" transform="rotate(-18 58 70)" fill={f} />
      <circle cx="90" cy="40" r="13" fill={f} />
      <path d="M100 38l16 4-16 6z" fill={f} />
      <path d="M26 82 6 98l30-6z" fill={f} />
    </>
  ),
};

export function Sculpture({ shape, material = "marble", label }) {
  const [a, b] = MATERIALS[material] || MATERIALS.marble;
  const id = `sg${gid++}`;
  const Body = SCULPT_BODIES[shape] || SCULPT_BODIES.bust;
  return (
    <svg viewBox="0 0 120 150" role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <defs>
        <Defs id={id} a={a} b={b} />
      </defs>
      <g transform="translate(0 4)">{Body(`url(#${id})`)}</g>
      <rect x="22" y="122" width="76" height="14" rx="2" fill="#2a2522" />
      <rect x="14" y="134" width="92" height="8" rx="2" fill="#1b1715" />
    </svg>
  );
}
