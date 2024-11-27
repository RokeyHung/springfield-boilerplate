import type { UnionConfiguration } from '@/theme/types/config';
import type { Gutters } from '@/theme/types/gutters';

import { type ViewStyle } from 'react-native';

export const generateGutters = (configuration: UnionConfiguration): Gutters => {
  return configuration.gutters.reduce((acc, curr) => {
    return Object.assign(acc, {
      [`gap_${curr}`]: {
        gap: curr,
      },
      [`height_${curr}`]: {
        height: curr,
      },
      [`margin_${curr}`]: {
        margin: curr,
      },
      [`marginBottom_${curr}`]: {
        marginBottom: curr,
      },
      [`marginHorizontal_${curr}`]: {
        marginHorizontal: curr,
      },
      [`marginLeft_${curr}`]: {
        marginLeft: curr,
      },
      [`marginRight_${curr}`]: {
        marginRight: curr,
      },
      [`marginTop_${curr}`]: {
        marginTop: curr,
      },
      [`marginVertical_${curr}`]: {
        marginVertical: curr,
      },
      [`maxHeight_${curr}`]: {
        maxHeight: curr,
      },
      [`maxWidth_${curr}`]: {
        maxWidth: curr,
      },
      [`minHeight_${curr}`]: {
        minHeight: curr,
      },
      [`minWidth_${curr}`]: {
        minWidth: curr,
      },
      [`padding_${curr}`]: {
        padding: curr,
      },
      [`paddingBottom_${curr}`]: {
        paddingBottom: curr,
      },
      [`paddingHorizontal_${curr}`]: {
        paddingHorizontal: curr,
      },
      [`paddingLeft_${curr}`]: {
        paddingLeft: curr,
      },
      [`paddingRight_${curr}`]: {
        paddingRight: curr,
      },
      [`paddingTop_${curr}`]: {
        paddingTop: curr,
      },
      [`paddingVertical_${curr}`]: {
        paddingVertical: curr,
      },
      [`width_${curr}`]: {
        width: curr,
      },
    });
  }, {} as Gutters);
};

export const staticGutterStyles = {} as const satisfies Record<
  string,
  ViewStyle
>;
