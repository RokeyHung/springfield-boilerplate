import type { StyleProp, ViewStyle } from 'react-native';
import type { ColorType } from '@/theme/_config';

import { View } from 'react-native';

import { useTheme } from '@/theme';

interface IDivider {
  color?: ColorType;
  size?: number;
  style?: StyleProp<ViewStyle>;
  width?: number;
}

export function Divider({
  color = 'divider',
  size = 1,
  style,
  width,
}: IDivider) {
  const { colors } = useTheme();

  return (
    <View
      style={[
        {
          borderBottomColor: colors[color],
          borderBottomWidth: size,
          width,
        },
        style,
      ]}
    />
  );
}
