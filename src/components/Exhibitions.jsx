import { EXHIBITS } from "../data";
import { Arrow, Sparkle } from "./Icons";
import ObjectArt from "./Objects";

export default function Exhibitions() {
  return (
    <section id="exhibitions" aria-labelledby="ex-h">
      <Sparkle style={{ insetInlineStart: "12%", top: 60 }} />
      <div className="wrap">
        <h2 className="big" id="ex-h">
          نمایشگاه‌ها
        </h2>
        <div className="ex-grid">
          {EXHIBITS.map((e) => (
            <article className="ex" key={e.id}>
              <div className="ring">
                <ObjectArt name={e.object} label={e.objectLabel} />
              </div>
              <h3>{e.title}</h3>
              <p className="by">{e.by}</p>
              <p className="when">{e.when}</p>
              <div className="row">
                <a className="circle-btn" href="#faq" aria-label={`برنامهٔ بازدید از ${e.title}`}>
                  <Arrow />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
