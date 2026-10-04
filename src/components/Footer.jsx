import { CATEGORIES } from "../categories";
import { Link } from "../router";

const SOCIALS = [
  { label: "اینستاگرام", short: "Ig" },
  { label: "تلگرام", short: "Tg" },
  { label: "ایکس", short: "X" },
  { label: "پینترست", short: "Pi" },
];

export default function Footer() {
  return (
    <footer>
      <div className="arc" aria-hidden="true" />
      <div className="wrap foot">
        <div className="big word" aria-hidden="true">
          موزه
        </div>
        <div className="follow">
          <p>ما را دنبال کنید</p>
          <div className="socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href="#top" aria-label={s.label}>
                {s.short}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="wrap legal">
        <span>© موزهٔ نگار</span>
        <nav aria-label="هنرها" className="legal-nav">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} to={c.path}>
              {c.navLabel}
            </Link>
          ))}
        </nav>
        <span>خیابان نمونه، کوچهٔ دباغ‌ها، پلاک ۶۰۰</span>
      </div>
    </footer>
  );
}
