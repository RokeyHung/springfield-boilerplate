import type { RenderersProps } from 'react-native-render-html';

import { Dimensions, Linking } from 'react-native';
import RenderHTML from 'react-native-render-html';

import { useTheme } from '@/theme';

interface IRNRenderHtml {
  content: string;
}

export function RNRenderHtml({ content }: IRNRenderHtml) {
  const { colors, fonts, gutters } = useTheme();

  const renderersProps: Partial<RenderersProps> = {
    a: {
      onPress: async (event, href, htmlAttribs, target) => {
        try {
          await Linking.openURL(href);
        } catch (error) {
          console.error('Error opening URL in RNRenderHtml:', error);
        }
      },
    },
  };

  return (
    <RenderHTML
      baseStyle={{ color: colors.text_dark_gray }}
      contentWidth={Dimensions.get('window').width}
      renderersProps={renderersProps}
      source={{ html: content }}
      systemFonts={['Inter-Regular']}
      tagsStyles={{
        a: {
          ...fonts.size_14,
          color: colors.blue,
          fontFamily: 'Inter-Regular',
          fontWeight: '400',
          lineHeight: 20,
          textDecorationLine: 'underline',
        },
        p: {
          ...gutters.margin_0,
          ...fonts.size_14,
          fontFamily: 'Inter-Regular',
          fontWeight: '400',
        },
      }}
    />
  );
}
