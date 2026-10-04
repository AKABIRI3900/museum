import { useState } from "react";
import { flushSync } from "react-dom";
import Media from "./Media";
import WorkDialog from "./WorkDialog";

const prefersReduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Works({ category }) {
  const [filter, setFilter] = useState("همه");
  const [shuffled, setShuffled] = useState(false); // فقط بعد از اولین کلیک روی فیلتر، کارت‌ها پشت‌سرهم وارد شوند
  const [selected, setSelected] = useState(null);

  const list = category.works.filter((w) => filter === "همه" || w.filter === filter);
  const faNum = (n) => n.toLocaleString("fa-IR");

  const pick = (f) => {
    setFilter(f);
    setShuffled(true);
  };

  // کلیک روی اثر: عکس کارت به عکس بزرگ دیالوگ تبدیل می‌شود (View Transitions API).
  // اگر مرورگر پشتیبانی نکند یا «کاهش حرکت» روشن باشد، دیالوگ مستقیم باز می‌شود.
  const openWork = (work, button) => {
    const thumb = button.querySelector(".media > *");
    if (!thumb || !document.startViewTransition || prefersReduced()) {
      setSelected(work);
      return;
    }
    const root = document.documentElement;
    root.dataset.vt = "1";
    thumb.style.viewTransitionName = "work-media";
    try {
      const t = document.startViewTransition(() => {
        thumb.style.viewTransitionName = "";
        flushSync(() => setSelected(work));
      });
      t.finished.finally(() => delete root.dataset.vt);
    } catch {
      thumb.style.viewTransitionName = "";
      delete root.dataset.vt;
      setSelected(work);
    }
  };

  return (
    <section id="works" aria-labelledby="works-h" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="col-head">
          <h2 className="big" id="works-h">
            آثار
          </h2>
          <div className="chips" role="group" aria-label="فیلتر آثار">
            {category.filters.map((f) => (
              <button key={f} className="chip" aria-pressed={f === filter} onClick={() => pick(f)}>
                {f}
              </button>
            ))}
          </div>
        </div>
        <p role="status" className="sr-only">
          {faNum(list.length)} اثر نمایش داده شد
        </p>
        <ul className={`works${shuffled ? " shuffled" : ""}`}>
          {list.map((w, i) => (
            <li key={`${filter}-${w.id}`} className="work-card" style={{ "--i": i }}>
              <button className="open" onClick={(e) => openWork(w, e.currentTarget)} aria-label={`جزئیات ${w.title}`}>
                <span className={`media ${w.media.type === "art" ? "art" : ""}`}>
                  <Media media={w.media} />
                </span>
              </button>
              <div className="wc-body">
                <h3>{w.title}</h3>
                <p>{w.material}</p>
                <small>{w.room}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <WorkDialog work={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
