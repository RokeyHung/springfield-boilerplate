import type { Options } from 'react-native-image-crop-picker';

import { Dimensions, Platform } from 'react-native';

export const scheme = 'springfield';

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const dimensionsScreen = Dimensions.get('screen');
export const dimensionsWindow = Dimensions.get('window');

export enum QueryKeys {
  // auth
  Login = 'LOGIN',

  // user
  GetUserInfo = 'GET_USER_INFO',
}

export enum ApiKeys {
  // auth
  Login = 'auth/login',

  // user
  GetUserInfo = 'user/getUserInfo',

  // upload
  UploadSingle = 'upload/single',
}

export enum EStatusCode {
  Unauthorized = 401,
}

export const IMAGE_CROP: Options = {
  compressImageQuality: 0.5,
  cropperCircleOverlay: true,
  cropping: true,
  height: 300,
  includeBase64: true,
  mediaType: 'photo',
  width: 300,
};

export const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100 MB
