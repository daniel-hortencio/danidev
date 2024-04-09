import React from "react";
import { AllIcons } from "./lib";
import { ReactIconProps } from "./types";

export const ReactIcon = ({ name, color = "", ...rest }: ReactIconProps) => {
  const RIcon =
    AllIcons[name as keyof typeof AllIcons] || AllIcons.FaRegWindowClose;

  return <RIcon {...{ name, color, ...rest }} />;
};
