import { useLayoutEffect, useRef } from "react";
import Media from "./Media";
import { useBooking } from "../booking";

export default function WorkDialog({ work, onClose }) {
  const ref = useRef(null);
  const { open: book } = useBooking();
  // آخرین اثر را نگه می‌داریم تا هنگام بسته‌شدن، محتوا قبل از پایان انیمیشن ناپدید نشود
  const last = useRef(work);
  if (work) last.current = work;
  const shown = work || last.current;

  // layout effect: دیالوگ باید هم‌زمان با رندر باز شود تا انتقال عکس درست ضبط شود
  useLayoutEffect(() => {
    const d = ref.current;
    if (work && !d.open) d.showModal();
    if (!work && d.open) d.close();
  }, [work]);

  return (
    <dialog
      ref={ref}
      className="work-dialog"
      aria-labelledby="wd-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
    >
      {shown && (
        <div className="wd">
          <div className="wd-pic">
            <Media media={shown.media} eager />
          </div>
          <div className="wd-info">
            <div className="wd-head">
              <h2 id="wd-title">{shown.title}</h2>
              <button className="x" onClick={onClose} aria-label="بستن">
                ✕
              </button>
            </div>
            <p>{shown.note}</p>
            <dl>
              <div>
                <dt>جنس و روش</dt>
                <dd>{shown.material}</dd>
              </div>
              <div>
                <dt>جای اثر</dt>
                <dd>{shown.room}</dd>
              </div>
            </dl>
            <button
              className="btn"
              onClick={() => {
                onClose();
                book(`دیدن «${shown.title}»`);
              }}
            >
              وقت‌گیری برای دیدن این اثر
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
