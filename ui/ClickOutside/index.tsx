"use client";

import React, { ReactElement, useEffect, useRef } from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  element?: keyof HTMLElementTagNameMap;
  onClickOutsite: () => void;
}

export const ClickOutside = ({ element, onClickOutsite, ...rest }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClickOutsite();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return <div ref={ref} {...rest} />;
};
