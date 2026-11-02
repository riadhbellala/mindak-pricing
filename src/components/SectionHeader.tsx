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
      <h2 id={id} className="serif text-[40px] md:text-[56px]" data-reveal>
        {roman} <em className="italic">{italic}</em>
      </h2>
      {note && (
        <p className="mt-3 text-[15px] text-ink-2" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
          {note}
        </p>
      )}
    </Container>
  );
}
