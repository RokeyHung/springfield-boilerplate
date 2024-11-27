import { ActivityIndicator, View } from 'react-native';

import { useTheme } from '@/theme';

interface ILoading {
  color?: string;
  visible: boolean;
}

export function Loading({ color, visible }: ILoading) {
  const { colors, layout } = useTheme();

  if (!visible) {
    return null;
  }

  return (
    <View
      style={{
        ...layout.absolute,
        ...layout.top0,
        ...layout.bottom0,
        ...layout.left0,
        ...layout.right0,
        ...layout.justifyCenter,
        ...layout.itemsCenter,
        backgroundColor: 'transparent',
      }}
    >
      <ActivityIndicator color={color || colors.blue} />
    </View>
  );
}
