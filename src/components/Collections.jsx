import { useState } from "react";
import { COLLECTION } from "../data";
import { Arrow } from "./Icons";

export default function Collections() {
  const [cur, setCur] = useState(1);
  const n = COLLECTION.length;
  const move = (d) => setCur((c) => (c + d + n) % n);

  return (
    <section id="collections" aria-labelledby="co-h" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="col-head">
          <h2 className="big" id="co-h">
            مجموعه
          </h2>
          <div className="arrows">
            <button className="circle-btn" onClick={() => move(-1)} aria-label="اثر قبلی">
              <Arrow back />
            </button>
            <button className="circle-btn" onClick={() => move(1)} aria-label="اثر بعدی">
              <Arrow />
            </button>
          </div>
        </div>
        <div className="rail" role="group" aria-label="برگزیدهٔ مجموعه">
          {COLLECTION.map((w, i) => (
            <button
              key={w.title}
              className="work"
              aria-current={i === cur}
              aria-label={`${w.title}، ${w.meta}`}
              onClick={() => setCur(i)}
            >
              <img src={w.src} alt={w.alt} loading="lazy" />
              <span className="cap">
                <b>{w.title}</b>
                <span>{w.meta}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
