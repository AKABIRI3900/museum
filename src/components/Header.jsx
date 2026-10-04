import { useEffect, useState } from "react";
import { CATEGORIES } from "../categories";
import { Link, useRouter } from "../router";
import { useBooking } from "../booking";
import { Pillars } from "./Icons";

const HOME_LINKS = [
  { to: "/#exhibitions", label: "نمایشگاه‌ها" },
  { to: "/#collections", label: "مجموعه" },
  { to: "/#faq", label: "بازدید" },
];

export default function Header() {
  const { path } = useRouter();
  const { open } = useBooking();
  const [menu, setMenu] = useState(false);

  // با رفتن به صفحهٔ دیگر منوی موبایل بسته شود
  useEffect(() => setMenu(false), [path]);

  return (
    <header className={path === "/" ? "over" : "solid"}>
      <div className="wrap nav">
        <Link className="brand" to="/" aria-label="موزهٔ نگار، صفحهٔ اصلی">
          <Pillars />
          نگار
        </Link>

        <nav id="site-nav" className={menu ? "open" : ""} aria-label="منوی اصلی">
          <ul>
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link to={c.path} aria-current={path === c.path ? "page" : undefined}>
                  {c.navLabel}
                </Link>
              </li>
            ))}
            {HOME_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <button className="menu-btn" aria-expanded={menu} aria-controls="site-nav" onClick={() => setMenu((m) => !m)}>
          {menu ? "بستن" : "منو"}
        </button>
        <button className="btn" onClick={() => open()}>
          وقت‌گیری
        </button>
      </div>
    </header>
  );
}
