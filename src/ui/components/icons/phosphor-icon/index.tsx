import React from 'react';
import * as PhosphorIcons from '@phosphor-icons/react';

export type PhosphorIconName = keyof typeof PhosphorIcons;

export type PhosphorIconProps = {
  name: PhosphorIconName;
  size?: number;
  color?: string;
};

export const PhosphorIcon = ({
  name,
  size = 20,
  color = '',
}: PhosphorIconProps) => {
  const PhIcon: any =
    PhosphorIcons[name as keyof typeof PhosphorIcons] || PhosphorIcons.XSquare;

  return <PhIcon size={size} color={color} />;
};
