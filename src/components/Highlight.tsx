import clsx from "clsx";

/** Flat lime rectangle behind one or two words, rotated -1.5deg. Max twice per page. */
export function Highlight({
  children,
  draw = false,
  className,
}: {
  children: React.ReactNode;
  draw?: boolean;
  className?: string;
}) {
  return (
    <span className={clsx("highlight", className)} data-draw={draw ? "" : undefined}>
      {children}
    </span>
  );
}
