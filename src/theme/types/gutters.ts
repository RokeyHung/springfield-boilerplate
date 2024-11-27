import type {
  ArrayValue,
  RemoveAfterSeparator,
  RemoveBeforeSeparator,
  ToNumber,
} from './common';
import type { config } from '@/theme/_config';
import type { staticGutterStyles } from '@/theme/gutters';

type Margins =
  | 'margin'
  | 'marginBottom'
  | 'marginHorizontal'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop'
  | 'marginVertical';

type MarginKeys = `${Margins}_${ArrayValue<typeof config.gutters>}`;

type MarginGutters = {
  [key in MarginKeys]: {
    [K in Extract<RemoveAfterSeparator<key>, Margins>]: ToNumber<
      RemoveBeforeSeparator<key>
    >;
  };
};

type Paddings =
  | 'padding'
  | 'paddingBottom'
  | 'paddingHorizontal'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingTop'
  | 'paddingVertical';

type PaddingKeys = `${Paddings}_${ArrayValue<typeof config.gutters>}`;

type PaddingGutters = {
  [key in PaddingKeys]: {
    [K in Extract<RemoveAfterSeparator<key>, Paddings>]: ToNumber<
      RemoveBeforeSeparator<key>
    >;
  };
};

type Gaps = `gap_${ArrayValue<typeof config.gutters>}`;

type GapGutters = {
  [key in Gaps]: {
    gap: ToNumber<RemoveBeforeSeparator<key>>;
  };
};

type Heights = 'height' | 'maxHeight' | 'minHeight';

type HeightsKeys = `${Heights}_${ArrayValue<typeof config.gutters>}`;

type HeightsGutters = {
  [key in HeightsKeys]: {
    [K in Extract<RemoveAfterSeparator<key>, Paddings>]: ToNumber<
      RemoveBeforeSeparator<key>
    >;
  };
};

type Widths = 'maxWidth' | 'minWidth' | 'width';

type WidthsKeys = `${Widths}_${ArrayValue<typeof config.gutters>}`;

type WidthsGutters = {
  [key in WidthsKeys]: {
    [K in Extract<RemoveAfterSeparator<key>, Paddings>]: ToNumber<
      RemoveBeforeSeparator<key>
    >;
  };
};

export type Gutters = GapGutters &
  HeightsGutters &
  MarginGutters &
  PaddingGutters &
  typeof staticGutterStyles &
  WidthsGutters;
