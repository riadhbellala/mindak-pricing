import { Container } from "./Container";

/** Centred section head: serif title with one italic word, optional one-line note under it. */
export function SectionHeader({
  id,
  roman,
  italic,
  note,
}: {
  id: string;
  roman: string;
  italic: string;
  note?: React.ReactNode;
}) {
  return (
    <Container className="flex flex-col items-center text-center">
      <h2
        id={id}
        className="text-[36px] leading-[1.05] font-semibold tracking-[-0.035em] md:text-[52px]"
        data-reveal
      >
        {roman} <em className="serif text-[1.12em] font-normal tracking-[-0.02em] italic">{italic}</em>
      </h2>
      {note && (
        <p className="mt-3 max-w-[52ch] text-[16px] leading-[1.5] text-ink-2 md:text-[18px]" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
          {note}
        </p>
      )}
    </Container>
  );
}
