type FloorHeadingProps = {
  number: string;
  title: string;
  description: string;
  headingId: string;
};

export function FloorHeading({
  number,
  title,
  description,
  headingId,
}: FloorHeadingProps) {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-sm font-extrabold tracking-[0.08em] text-brand-orange">
        {number}
      </span>
      <h2
        id={headingId}
        className="text-[clamp(2rem,4vw,4.5rem)] leading-[1.05] font-bold text-brand-navy"
      >
        {title}
      </h2>
      <p className="max-w-[55ch] text-lg leading-relaxed text-text-muted">
        {description}
      </p>
    </div>
  );
}
