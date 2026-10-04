import { ClockIcon, ScribbleArrow, TicketIcon } from "./Icons";

export default function Hero({ onBook }) {
  return (
    <div className="hero" id="top">
      <img
        className="hero-art"
        src={`${import.meta.env.BASE_URL}images/mona-remix.jpg`}
        width="1456"
        height="816"
        alt="کلاژی تیره از چهرهٔ مونالیزا میان گل‌های سرخ و پروانه‌ها"
      />
      <div className="wrap hero-body">
        <h1 className="big">موزه</h1>
        <div className="meta">
          <span>
            <TicketIcon />
            ورود رایگان، آنلاین وقت بگیرید
          </span>
          <span>
            <ClockIcon />
            امروز باز است: ۱۰ تا ۱۷
          </span>
          <span>
            <ClockIcon />
            آخرین ورود: ۱۶:۱۵
          </span>
        </div>
      </div>
      <button className="book" onClick={onBook}>
        وقت‌گیری
        <ScribbleArrow />
      </button>
    </div>
  );
}
