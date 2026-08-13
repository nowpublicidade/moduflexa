import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={className}
      style={{
        width: "min(calc(100% - (var(--page-padding) * 2)), var(--container-max))",
        marginInline: "auto",
      }}
    >
      {children}
    </div>
  );
}
