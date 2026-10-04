import { FRAMES } from "../data";
import { Sparkle } from "./Icons";

export default function About() {
  return (
    <section id="about" aria-labelledby="ab-h">
      <div className="wrap about">
        <div className="salon" role="group" aria-label="دیوار قاب‌های نقاشی">
          {FRAMES.map((f) => (
            <div key={f.cls} className={`frame ${f.cls}`}>
              <img src={f.src} alt={f.alt} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="text">
          <h2 className="big" id="ab-h">
            دربارهٔ ما
          </h2>
          <div className="copy">
            <p>
              نگار موزه‌ای رایگان است با هفت اتاق نقاشی و یک اتاق اشیای باستانی. تور، شب‌های آرام و نشست‌های لمس اثر
              برگزار می‌کنیم و هر سخنرانی نسخهٔ زبان اشاره هم دارد.
            </p>
            <p>با وقت‌گیری آنلاین، راهنمای اتاق‌های همان روز و تغییرهای لحظهٔ آخر را با ایمیل می‌گیرید.</p>
          </div>
          <Sparkle style={{ insetInlineEnd: 0, bottom: -30 }} />
        </div>
      </div>
    </section>
  );
}
