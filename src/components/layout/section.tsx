import type { ReactNode } from "react";

export type SectionTheme = "light" | "white" | "navy";
export type SectionSpacing = "default" | "large";

type SectionProps = {
  id?: string;
  theme?: SectionTheme;
  spacing?: SectionSpacing;
  ariaLabelledby?: string;
  className?: string;
  children: ReactNode;
};

const themeClasses: Record<SectionTheme, string> = {
  light: "bg-off-white text-text",
  white: "bg-white text-text",
  navy: "bg-brand-navy text-white",
};

// Ranges from 02-design-system.md §29 (mobile 64–96px, desktop 96–160px).
const spacingClasses: Record<SectionSpacing, string> = {
  default: "py-16 md:py-24",
  large: "py-24 md:py-40",
};

export function Section({
  id,
  theme = "light",
  spacing = "default",
  ariaLabelledby,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={[themeClasses[theme], spacingClasses[spacing], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </section>
  );
}
