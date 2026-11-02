import { site } from "@/content/pricing";

/**
 * The four print-metadata labels every Mindak poster carries in its corners.
 * Decorative repetition of brand info, so hidden from assistive tech.
 */
export function CornerFrame({ inset = "12px" }: { inset?: string }) {
  const style = { "--inset": inset } as React.CSSProperties;
  const pos = "meta pointer-events-none absolute select-none";
  return (
    <div aria-hidden="true" style={style} className="pointer-events-none absolute inset-0">
      <span className={`${pos} left-(--inset) top-(--inset)`}>{site.studio}</span>
      <span className={`${pos} right-(--inset) top-(--inset)`}>{site.year}</span>
      <span className={`${pos} bottom-(--inset) left-(--inset)`}>{site.rights}</span>
      <span className={`${pos} bottom-(--inset) right-(--inset)`}>{site.phonePrefix}</span>
    </div>
  );
}
