import clsx from "clsx";
import { labels, type Category } from "@/content/pricing";
import { CheckIcon } from "./icons";

export function CompareTable({ category }: { category: Category }) {
  const featuredCol = category.plans.findIndex((p) => p.featured);
  const { columns, rows } = category.compare;

  return (
    <div
      role="region"
      aria-label={labels.compareCaption(category.label)}
      tabIndex={0}
      className="scroll-x relative -mx-5 overflow-x-auto px-5 md:mx-0 md:px-0"
    >
      <table className={clsx("w-full border-collapse text-left text-[14px] sm:text-[15px]", columns.length > 2 && "min-w-[520px]")}>
        <caption className="sr-only">{labels.compareCaption(category.label)}</caption>
        <thead>
          <tr>
            <th
              scope="col"
              className="meta sticky left-0 z-10 w-[40%] border-t border-b border-t-ink border-b-rule bg-paper py-3 pr-4 align-bottom font-medium"
            >
              {labels.compareFeatureCol}
            </th>
            {columns.map((col, i) => (
              <th
                key={col}
                scope="col"
                className={clsx(
                  "serif border-b border-rule px-3 pt-3 pb-3 text-center align-bottom text-[24px] md:text-[28px]",
                  i === featuredCol ? "border-t-[3px] border-t-lime" : "border-t border-t-ink",
                )}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="group">
              <th
                scope="row"
                className="sticky left-0 z-10 border-b border-rule bg-paper py-3.5 pr-4 font-normal group-even:bg-paper-2 max-md:border-r"
              >
                {row.label}
              </th>
              {row.values.map((value, i) => (
                <td
                  key={i}
                  className="tnum border-b border-rule px-3 py-3.5 text-center group-even:bg-paper-2"
                >
                  {value === true ? (
                    <>
                      <CheckIcon className="inline-block" />
                      <span className="sr-only">{labels.included}</span>
                    </>
                  ) : value === false ? (
                    <>
                      <span aria-hidden="true" className="text-ink-2">
                        –
                      </span>
                      <span className="sr-only">{labels.notIncluded}</span>
                    </>
                  ) : (
                    value
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
