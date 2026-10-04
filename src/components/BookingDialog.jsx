import { useEffect, useRef, useState } from "react";

const TIMES = ["۱۰:۰۰", "۱۱:۳۰", "۱۳:۰۰", "۱۴:۳۰", "۱۶:۰۰"];
const iso = (d) => d.toISOString().slice(0, 10);

export default function BookingDialog({ open, subject, onClose }) {
  const ref = useRef(null);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [date, setDate] = useState(iso(tomorrow));
  const [time, setTime] = useState(TIMES[0]);
  const [visitors, setVisitors] = useState(2);
  const [msg, setMsg] = useState("ورود رایگان است.");

  // وضعیت باز/بسته را با <dialog> هماهنگ می‌کنیم تا کیبورد و فوکوس درست کار کند
  useEffect(() => {
    const d = ref.current;
    if (open && !d.open) {
      setMsg("ورود رایگان است.");
      d.showModal();
    }
    if (!open && d.open) d.close();
  }, [open]);

  const [done, setDone] = useState(false);

  const reserve = () => {
    const label = new Date(date).toLocaleDateString("fa-IR", { dateStyle: "long" });
    setMsg(`نمایشی: ${Number(visitors).toLocaleString("fa-IR")} نفر، ${label}، ساعت ${time}. رزروی ثبت نشد.`);
    setDone(true);
    window.setTimeout(() => setDone(false), 1600);
  };

  return (
    <dialog
      ref={ref}
      aria-labelledby="dlg-h"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      <form method="dialog" onSubmit={(e) => e.preventDefault()}>
        <h2 id="dlg-h">وقت بازدید</h2>
        {subject && <p className="dl-subject">{subject}</p>}
        <label>
          تاریخ
          <input type="date" value={date} min={iso(new Date())} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <label>
          ساعت ورود
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            {TIMES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label>
          تعداد بازدیدکننده
          <input
            type="number"
            min="1"
            max="10"
            value={visitors}
            onChange={(e) => setVisitors(e.target.value)}
            required
          />
        </label>
        <p className="dl-msg" role="status" key={msg}>
          {msg}
        </p>
        <div className="dl-row">
          <button type="button" className="btn ghost" onClick={onClose}>
            بستن
          </button>
          <button type="button" className={`btn${done ? " ok" : ""}`} onClick={reserve}>
            {done ? "ثبت شد ✓" : "ثبت وقت"}
          </button>
        </div>
      </form>
    </dialog>
  );
}
