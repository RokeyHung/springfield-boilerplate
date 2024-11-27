import React from 'react';
import { View } from 'react-native';

interface DotProps {
  color?: string;
  size?: number;
}

export const Dot = ({ color, size = 6 }: DotProps) => {
  return (
    <View
      style={{
        backgroundColor: color,
        borderRadius: 99,
        height: size,
        width: size,
      }}
    />
  );
};
