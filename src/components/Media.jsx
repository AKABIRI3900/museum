import { Ceramic, Sculpture } from "./Illustrations";

/* یک اثر یا عکس است یا طرح SVG. این کامپوننت هر دو را یک‌شکل نشان می‌دهد. */
export default function Media({ media, eager = false }) {
  if (media.type === "image") {
    return (
      <img
        src={media.src}
        alt={media.alt}
        width={media.w}
        height={media.h}
        loading={eager ? "eager" : "lazy"}
      />
    );
  }
  return media.kind === "ceramic" ? (
    <Ceramic shape={media.shape} glaze={media.glaze} accent={media.accent} label={media.alt} />
  ) : (
    <Sculpture shape={media.shape} material={media.material} label={media.alt} />
  );
}
