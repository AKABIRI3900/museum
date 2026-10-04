import { useState } from "react";
import { FAQ } from "../data";
import ObjectArt from "./Objects";

export default function Faq() {
  const [open, setOpen] = useState(1);

  return (
    <section id="faq" aria-labelledby="faq-h">
      <div className="wrap faq">
        <div>
          <div className="faq-title">
            <h2 className="big" id="faq-h">
              پرسش‌ها
            </h2>
          </div>
          <p className="faq-side">برنامهٔ بازدیدتان را بریزید. جوابتان را پیدا نکردید؟ به hello@negar.example بنویسید.</p>
          <ObjectArt name="eye" />
        </div>
        <div className="acc">
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div className="item" key={f.q}>
                <h3>
                  <button
                    className="q"
                    id={`q${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`a${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    {f.q}
                    <i aria-hidden="true" />
                  </button>
                </h3>
                <div className="a" id={`a${i}`} role="region" aria-labelledby={`q${i}`}>
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
