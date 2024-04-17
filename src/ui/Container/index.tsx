import React from "react";
import { WrapperProps } from "../types/Wrapper";
import { cn } from "../tailwind/cn";

export const Container = ({
  as: Element = "div",
  className = "",
  children,
}: WrapperProps) => (
  <Element className={cn("w-full max-w-6xl px-5 mx-auto", className)}>
    {children}
  </Element>
);
