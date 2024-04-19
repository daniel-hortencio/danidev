import React from "react";

export const LinkExternal = ({
  children,
  className,
  href,
  id,
}: React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => {
  return (
    <a target="_blank" rel="noopener noreferrer" {...{ href, className, id }}>
      {children}
    </a>
  );
};
