import { StyleSheet, Text } from 'react-native';

const InterFont = {
  // Numeric weights
  '100': 'Thin',
  '200': 'ExtraLight',
  '300': 'Light',
  '400': 'Regular',
  '500': 'Medium',
  '600': 'SemiBold',
  '700': 'Bold',
  '800': 'ExtraBold',
  '900': 'Black',

  // Named weights
  black: 'Black',
  bold: 'Bold',
  light: 'Light',
  medium: 'Medium',
  normal: 'Regular',
  regular: 'Regular',
  semibold: 'SemiBold',
  thin: 'Thin',
  ultralight: 'Light',

  // Not supported
  condensed: 'condensed',
  condensedBold: 'condensedBold',
  heavy: 'heavy',
};

type TextProps = Text['props'];

export function InterText({ style, ...props }: TextProps) {
  const { fontWeight = '400' } = StyleSheet.flatten(style || {});

  const fontFamily = `Inter-${InterFont[fontWeight]}`;

  return <Text {...props} style={[style, { fontFamily }]} />;
}
