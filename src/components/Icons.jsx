/* آیکن‌ها: همه aria-hidden هستند و نام قابل‌دسترس را دکمهٔ والد می‌دهد. */

// پیکان به‌سمت پایان خوانش (در راست‌به‌چپ یعنی چپ). کلاس .fwd در CSS آینه‌اش می‌کند.
export function Arrow({ back = false }) {
  return (
    <svg viewBox="0 0 26 26" className={back ? "arrow back" : "arrow fwd"} aria-hidden="true">
      <path d="M3 13h19m-6-6 6 6-6 6" />
    </svg>
  );
}

export function Sparkle({ style, className = "" }) {
  return (
    <svg className={`sparkle ${className}`} style={style} viewBox="0 0 44 44" aria-hidden="true">
      <path d="M22 2c1 12 8 19 20 20-12 1-19 8-20 20-1-12-8-19-20-20C14 21 21 14 22 2z" />
    </svg>
  );
}

export function TicketIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M9 6v12M3 12h4" />
    </svg>
  );
}

export function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function Pillars() {
  return (
    <svg viewBox="0 0 44 30" aria-hidden="true">
      <path d="M3 27h38M6 27V12M38 27V12M12 27V12M32 27V12M22 27V12M2 12 22 2l20 10z" />
    </svg>
  );
}

export function ScribbleArrow() {
  return (
    <svg viewBox="0 0 58 18" aria-hidden="true">
      <path d="M2 12c10-8 18 6 28-2s14 0 24-2m0 0-6-4m6 4-6 4" />
    </svg>
  );
}
