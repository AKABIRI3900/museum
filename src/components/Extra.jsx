import { useBooking } from "../booking";

export default function Extra({ extra }) {
  const { open: book } = useBooking();

  return (
    <section id="extra" aria-labelledby="extra-h" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <h2 className="big" id="extra-h" style={{ marginBottom: 12 }}>
          {extra.title}
        </h2>
        {extra.note && <p className="extra-note">{extra.note}</p>}

        {extra.kind === "cards" ? (
          <ul className="cards4">
            {extra.items.map((it) => (
              <li key={it.title}>
                <span className="swatch" style={{ background: it.swatch }} aria-hidden="true" />
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="sessions">
            {extra.items.map((s) => (
              <li key={s.title}>
                <div>
                  <h3>{s.title}</h3>
                  <p>
                    {s.when} · {s.level}
                  </p>
                </div>
                <button className="btn ghost" onClick={() => book(`کارگاه «${s.title}»`)}>
                  ثبت‌نام
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
