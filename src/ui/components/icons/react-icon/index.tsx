import React from 'react';
import { AllIcons } from '../../../libs/react-icons/all-icons';

export type ReactIconName = keyof typeof AllIcons;

export type ReactIconProps = {
  name: ReactIconName;
  size?: number;
  color?: string;
  fill?: string;
  stroke?: string;
  hoverColor?: string;
};

export const ReactIcon = ({ name, color = '', ...rest }: ReactIconProps) => {
  const RIcon =
    AllIcons[name as keyof typeof AllIcons] || AllIcons.FaRegWindowClose;

  return <RIcon {...{ name, color, ...rest }} />;
};
