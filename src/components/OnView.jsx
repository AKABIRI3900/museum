import { useRef } from "react";
import { ON_VIEW } from "../data";
import { Arrow } from "./Icons";
import ObjectArt from "./Objects";

export default function OnView() {
  const ref = useRef(null);

  // در راست‌به‌چپ، «بعدی» یعنی حرکت به چپ (scrollLeft منفی‌تر می‌شود)
  const go = (dir) => {
    const el = ref.current;
    const step = Math.min(el.clientWidth * 0.8, 480);
    const rtl = getComputedStyle(el).direction === "rtl";
    el.scrollBy({ left: dir * step * (rtl ? -1 : 1), behavior: "smooth" });
  };

  const onKey = (e) => {
    if (e.key === "ArrowLeft") go(1);
    if (e.key === "ArrowRight") go(-1);
  };

  return (
    <section id="on-view" aria-labelledby="nov-h" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="nov-head">
          <h2 className="big" id="nov-h">
            در معرض دید
          </h2>
          <p className="tag">هشت اثر از اتاق‌های این فصل.</p>
          <div className="arrows">
            <button className="circle-btn" onClick={() => go(-1)} aria-label="آثار قبلی">
              <Arrow back />
            </button>
            <button className="circle-btn" onClick={() => go(1)} aria-label="آثار بعدی">
              <Arrow />
            </button>
          </div>
        </div>
        <div className="scroller" ref={ref} tabIndex={0} role="region" aria-label="آثار در معرض دید" onKeyDown={onKey}>
          <div className="nov-side">
            <ObjectArt name="sun" />
            <b>سدهٔ دوم پیش از میلاد</b>
            قرص خورشید زرین با چهرهٔ انسان، اتاق ۸.
          </div>
          {ON_VIEW.map((w) => (
            <article className="nov-card" key={w.title}>
              <div className="pic">
                <img src={w.src} alt={w.alt} loading="lazy" />
              </div>
              <small>{w.room}</small>
              <h3>{w.title}</h3>
              <p>{w.year}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
