import { CATEGORIES } from "../categories";
import { Link } from "../router";
import { Arrow } from "./Icons";
import Media from "./Media";

/* کارت‌های لینک به هنرها. در صفحهٔ اصلی همه، در صفحهٔ هر دسته فقط دو دستهٔ دیگر. */
export default function OtherArts({ exclude, heading, id }) {
  const list = CATEGORIES.filter((c) => c.slug !== exclude);
  return (
    <section id={id} aria-labelledby={`${id || "oa"}-h`}>
      <div className="wrap">
        <h2 className="big" id={`${id || "oa"}-h`} style={{ marginBottom: "clamp(24px,4vw,48px)" }}>
          {heading}
        </h2>
        <ul className="arts">
          {list.map((c) => (
            <li key={c.slug}>
              <Link to={c.path} className="art-card" aria-label={`صفحهٔ ${c.title}`}>
                <span className="art-pic">
                  <Media media={c.cover} />
                </span>
                <span className="art-body">
                  <b>{c.title}</b>
                  <span>{c.kicker}</span>
                </span>
                <span className="circle-btn" aria-hidden="true">
                  <Arrow />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
