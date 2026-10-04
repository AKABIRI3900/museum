import { useBooking } from "../booking";
import Media from "../components/Media";
import Works from "../components/Works";
import Extra from "../components/Extra";
import OtherArts from "../components/OtherArts";
import { Sparkle } from "../components/Icons";

export default function CategoryPage({ category }) {
  const { open: book } = useBooking();

  return (
    <>
      <div className="cat-hero">
        <Sparkle style={{ insetInlineEnd: "4%", top: 24 }} />
        <div className="wrap cat-grid">
          <div>
            <p className="kicker">{category.kicker}</p>
            <h1 className="big">{category.title}</h1>
            <p className="cat-intro">{category.intro}</p>
            <div className="actions">
              <a className="btn" href="#works">
                دیدن آثار
              </a>
              <button className="btn ghost" onClick={() => book(`بازدید از بخش ${category.title}`)}>
                وقت‌گیری
              </button>
            </div>
            <dl className="facts">
              {category.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className={`cat-cover ${category.cover.type === "art" ? "art" : ""}`}>
            <Media media={category.cover} eager />
          </div>
        </div>
      </div>

      <Works category={category} key={category.slug} />
      <Extra extra={category.extra} key={`${category.slug}-x`} />
      <OtherArts exclude={category.slug} heading="هنرهای دیگر" id="other" />
    </>
  );
}
