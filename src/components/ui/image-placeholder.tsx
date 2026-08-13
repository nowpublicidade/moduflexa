type ImagePlaceholderProps = {
  label: string;
  aspectClassName?: string;
  className?: string;
};

// Neutral placeholder until real photography is approved
// (06-asset-guide.md §92, §116 — no generated/stock imagery).
export function ImagePlaceholder({
  label,
  aspectClassName = "aspect-[4/5] md:aspect-[16/9]",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      aria-hidden="true"
      className={`flex w-full items-center justify-center rounded-lg border border-dashed border-border bg-surface ${aspectClassName} ${className ?? ""}`}
    >
      <span className="px-4 text-center text-sm font-medium text-text-muted">
        {label}
      </span>
    </div>
  );
}
