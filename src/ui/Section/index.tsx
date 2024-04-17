import React from "react";
import { WrapperProps } from "../types/Wrapper";
import { Container } from "../Container";

interface Props extends WrapperProps {
  contentClassName?: string;
}

export const Section = ({
  as: AsElement = "section",
  className,
  children,
  contentClassName = "",
}: Props) => (
  <AsElement {...{ className }}>
    <Container className={contentClassName}>{children}</Container>
  </AsElement>
);
