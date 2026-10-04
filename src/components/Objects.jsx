/* اشیای باستانی به‌صورت SVG. هر کدام با viewBox خودش رسم شده است. */

const SUN_RAYS = Array.from({ length: 16 }, (_, i) => i * 22.5);

const OBJECTS = {
  amphora: {
    viewBox: "0 0 100 140",
    body: (
      <>
        <defs>
          <linearGradient id="g-am" x1="0" x2="1">
            <stop offset="0" stopColor="#6b3b1a" />
            <stop offset=".5" stopColor="#d9964a" />
            <stop offset="1" stopColor="#5a2f14" />
          </linearGradient>
        </defs>
        <path d="M38 6h24l-2 14c26 8 34 40 24 70-5 20-20 36-34 44-14-8-29-24-34-44-10-30-2-62 24-70z" fill="url(#g-am)" />
        <path d="M38 6c-14 6-16 22-10 38M62 6c14 6 16 22 10 38" stroke="#6b3b1a" strokeWidth="5" fill="none" />
        <path d="M22 66h56M22 86h56" stroke="#2a140a" strokeWidth="3" />
      </>
    ),
  },
  helmet: {
    viewBox: "0 0 120 120",
    body: (
      <>
        <defs>
          <linearGradient id="g-he" x1="0" x2="1">
            <stop offset="0" stopColor="#3a3f4a" />
            <stop offset=".5" stopColor="#b9a46a" />
            <stop offset="1" stopColor="#2a2e36" />
          </linearGradient>
        </defs>
        <path d="M60 14c-26 0-42 20-42 44v8h84v-8c0-24-16-44-42-44z" fill="url(#g-he)" />
        <path d="M14 62c8 22 22 38 46 44 24-6 38-22 46-44" fill="#22252c" />
        <path d="M60 8 48 -2M60 8 72 -2" stroke="#c9a85a" strokeWidth="6" strokeLinecap="round" />
        <path d="M40 70c10 8 30 8 40 0" stroke="#c9a85a" strokeWidth="4" fill="none" />
      </>
    ),
  },
  coin: {
    viewBox: "0 0 120 120",
    body: (
      <>
        <defs>
          <radialGradient id="g-co" cx=".35" cy=".3">
            <stop offset="0" stopColor="#fbe7a1" />
            <stop offset="1" stopColor="#9a6a1a" />
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="52" fill="url(#g-co)" />
        <circle cx="60" cy="60" r="44" fill="none" stroke="#7a5214" strokeWidth="2" strokeDasharray="3 4" />
        <path d="M48 44c0-12 24-12 24 4 0 8-6 10-6 18s6 10 6 16-6 10-18 10" stroke="#7a5214" strokeWidth="5" fill="none" strokeLinecap="round" />
      </>
    ),
  },
  sun: {
    viewBox: "0 0 120 120",
    body: (
      <>
        <defs>
          <radialGradient id="g-su" cx=".5" cy=".5">
            <stop offset="0" stopColor="#f6d98a" />
            <stop offset="1" stopColor="#a8761f" />
          </radialGradient>
        </defs>
        {SUN_RAYS.map((deg) => (
          <path key={deg} d="M60 4l7 24h-14z" fill="#c9962f" transform={`rotate(${deg} 60 60)`} />
        ))}
        <circle cx="60" cy="60" r="30" fill="url(#g-su)" />
        <circle cx="50" cy="54" r="3" fill="#5a3a0a" />
        <circle cx="70" cy="54" r="3" fill="#5a3a0a" />
        <path d="M52 70c5 5 11 5 16 0" stroke="#5a3a0a" strokeWidth="3" fill="none" />
      </>
    ),
  },
  eye: {
    viewBox: "0 0 120 120",
    body: (
      <>
        <path d="M10 60C30 26 90 26 110 60 90 94 30 94 10 60z" fill="#f2e6cf" />
        <circle cx="60" cy="60" r="22" fill="#2f6fa8" />
        <circle cx="60" cy="60" r="9" fill="#0b1118" />
        <circle cx="52" cy="52" r="4" fill="#fff" opacity=".8" />
        <path d="M10 60C30 26 90 26 110 60" stroke="#c9962f" strokeWidth="5" fill="none" />
      </>
    ),
  },
};

export default function ObjectArt({ name, label }) {
  const o = OBJECTS[name];
  return (
    <svg viewBox={o.viewBox} role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      {o.body}
    </svg>
  );
}
