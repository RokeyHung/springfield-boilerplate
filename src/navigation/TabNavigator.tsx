import type { HomeTabParamList } from './types';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';

import { Discover, Home, MyPage } from '@/screens';

import { Paths } from './paths';

const Tab = createBottomTabNavigator<HomeTabParamList>();

const renderTabBarIcon = ({ name, ...rest }: { name: string }) => {
  const { colors } = useTheme();
  switch (name) {
    case 'Discover':
      return null;
    case 'Home':
      return null;
    case 'MyPage':
      return null;
    default:
      return null;
  }
};

export default function TabNavigator() {
  const { colors, fonts, gutters } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName={Paths.Home}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.gray,
        tabBarLabelStyle: {
          fontFamily: 'Inter-SemiBold',
          ...fonts.size_12,
        },
        tabBarStyle: {
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          borderTopWidth: 0,
          position: 'absolute',
          // ios
          shadowColor: '#000000',
          shadowOffset: { height: -3, width: 0 },
          shadowOpacity: 0.04,
          shadowRadius: 24,
          // android
          elevation: 3,

          ...gutters.paddingTop_5,
          ...gutters.height_80,
          ...gutters.paddingBottom_11,

          ...Platform.select({
            ios: insets.bottom && {
              height: 80 + insets.bottom / 2,
              paddingBottom: 11 + insets.bottom / 2,
            },
          }),
        },
      }}
    >
      <Tab.Screen
        component={Home}
        name={Paths.Home}
        options={{
          tabBarIcon: (props) => renderTabBarIcon({ name: 'Home', ...props }),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        component={Discover}
        name={Paths.Discover}
        options={{
          tabBarIcon: (props) =>
            renderTabBarIcon({ name: 'Discover', ...props }),
          tabBarLabel: 'Discover',
        }}
      />
      <Tab.Screen
        component={MyPage}
        name={Paths.MyPage}
        options={{
          tabBarIcon: (props) => renderTabBarIcon({ name: 'MyPage', ...props }),
          tabBarLabel: 'MyPage',
        }}
      />
    </Tab.Navigator>
  );
}
