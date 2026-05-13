"use client";

import { cn } from "@/lib/utils";
import { useIntersection } from "@/hooks/use-intersection";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  id,
}: SectionWrapperProps) {
  const { ref, isVisible } = useIntersection({ threshold: 0.05 });

  return (
    <section
      id={id}
      ref={ref}
      className={cn("section", "reveal", isVisible && "revealed", className)}
    >
      <div className="container">{children}</div>
    </section>
  );
}
