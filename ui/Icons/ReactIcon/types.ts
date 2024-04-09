import { AllIcons } from "./lib";

export type ReactIconName = keyof typeof AllIcons;

export type ReactIconProps = {
  name: ReactIconName;
  size?: number;
  color?: string;
  fill?: string;
  stroke?: string;
  hoverColor?: string;
};
