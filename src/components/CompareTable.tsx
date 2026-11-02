import clsx from "clsx";
import { labels, type Category } from "@/content/pricing";
import { CheckIcon } from "./icons";

/**
 * Comparison table that always fits the screen: no horizontal scroll, no clipped columns.
 * On phones the feature column narrows and pack names may wrap onto two lines.
 */
export function CompareTable({ category }: { category: Category }) {
  const featuredCol = category.plans.findIndex((p) => p.featured);
  const { columns, rows } = category.compare;

  const cell = (value: boolean | string) =>
    value === true ? (
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
    );

  return (
    <>
      {/* Phones: one block per feature, every pack side by side underneath */}
      <ul className="flex flex-col gap-2 md:hidden" aria-label={labels.compareCaption(category.label)}>
        {rows.map((row) => (
          <li key={row.label} className="bg-paper-2 px-4 py-3.5">
            <p className="text-[15px] font-semibold">{row.label}</p>
            <dl
              className="mt-2.5 grid gap-2"
              style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}
            >
              {columns.map((col, i) => (
                <div
                  key={col}
                  className={clsx(
                    "flex flex-col gap-1 bg-paper px-2.5 py-2",
                    i === featuredCol && "border-t-[3px] border-lime",
                  )}
                >
                  <dt className="text-[12px] leading-tight font-medium text-ink-2">{col}</dt>
                  <dd className="tnum text-[15px] font-semibold">{cell(row.values[i])}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>

    <table className="hidden w-full table-fixed border-collapse text-left text-[16px] md:table">
      <caption className="sr-only">{labels.compareCaption(category.label)}</caption>
      <colgroup>
        <col className={columns.length > 2 ? "w-[30%] sm:w-[40%]" : "w-[46%] sm:w-[50%]"} />
        {columns.map((col) => (
          <col key={col} />
        ))}
      </colgroup>
      <thead>
        <tr>
          <th
            scope="col"
            className="border-t border-b border-t-ink border-b-rule py-3 pr-2 pl-2 align-bottom text-[13px] sm:pl-3 font-medium text-ink-2 sm:py-4 sm:text-[14px]"
          >
            {labels.compareFeatureCol}
          </th>
          {columns.map((col, i) => (
            <th
              key={col}
              scope="col"
              className={clsx(
                "border-b border-rule px-0.5 py-3 text-center align-bottom text-[12.5px] leading-[1.2] font-semibold tracking-[-0.015em] sm:px-3 sm:py-4 sm:text-[16px] md:text-[18px]",
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
          <tr key={row.label} className="even:bg-paper-2">
            <th
              scope="row"
              className="border-b border-rule py-3 pr-2 pl-2 leading-[1.3] font-normal hyphens-auto sm:py-4 sm:pl-3"
            >
              {row.label}
            </th>
            {row.values.map((value, i) => (
              <td key={i} className="tnum border-b border-rule px-0.5 py-3 text-center text-[13px] font-medium sm:px-3 sm:py-4 sm:text-[16px]">
                {cell(value)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}
