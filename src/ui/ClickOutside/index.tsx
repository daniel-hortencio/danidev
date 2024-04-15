"use client";

import React from "react";
import { ClickOutsideProps } from "./types";

export const ClickOutside = ({
  element,
  onClickOutsite,
  ...rest
}: ClickOutsideProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClickOutsite();
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return <div ref={ref} {...rest} />;
};
