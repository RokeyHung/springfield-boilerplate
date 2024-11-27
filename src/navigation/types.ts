import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { Paths } from '@/navigation/paths';

export type RootStackParamList = {
  [Paths.Login]: undefined;
  [Paths.Startup]: undefined;
  TabNavigator: NavigatorScreenParams<HomeTabParamList>;
};

export type RootScreenProps<
  S extends keyof RootStackParamList = keyof RootStackParamList,
> = StackScreenProps<RootStackParamList, S>;

export type HomeTabParamList = {
  [Paths.Discover]: undefined;
  [Paths.Home]: undefined;
  [Paths.MyPage]: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabParamList, T>,
    RootScreenProps<keyof RootStackParamList>
  >;
