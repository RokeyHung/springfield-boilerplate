import type { RootStackParamList } from './types';
import type { NavigationAction } from '@react-navigation/native';

import { createNavigationContainerRef } from '@react-navigation/native';

import { storage } from '@/App';

import { Paths } from './paths';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<RouteName extends keyof RootStackParamList>(
  ...args: undefined extends RootStackParamList[RouteName]
    ? [name: RouteName]
    : [name: RouteName, params: RootStackParamList[RouteName]]
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...args);
  }
}

export function goBack() {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
}

export function dispatch(action: NavigationAction) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(action);
  }
}

export async function handleUnauthorized() {
  storage.clearAll();
  navigate(Paths.Login);
}
