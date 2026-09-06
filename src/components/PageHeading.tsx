import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../lib/cn";

export function PageHeading({ className, ...props }: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className={cn(
        "font-heading text-3xl font-medium leading-tight tracking-tight md:text-4xl",
        className,
      )}
      {...props}
    />
  );
}

