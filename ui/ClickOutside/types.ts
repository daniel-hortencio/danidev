import React from "react";

export type ClickOutsideProps = {
  element?: keyof HTMLElementTagNameMap;
  onClickOutsite: () => void;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
