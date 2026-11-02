import clsx from "clsx";

export function Container({
  children,
  className,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer";
}) {
  return <Tag className={clsx("mx-auto w-full max-w-[1200px] px-5 md:px-10", className)}>{children}</Tag>;
}
