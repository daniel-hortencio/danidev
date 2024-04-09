import React from "react";
import PhosphorIcons from "@phosphor-icons/react";
import type { PhosphorIconProps } from "./types";

export const PhosphorIcon = ({
  name,
  size = 20,
  color = "",
}: PhosphorIconProps) => {
  const PhIcon: any =
    PhosphorIcons[name as keyof typeof PhosphorIcons] || PhosphorIcons.XSquare;

  return <PhIcon size={size} color={color} />;
};
