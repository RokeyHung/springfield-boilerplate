import type { IBaseRes } from './base';

import { ApiKeys } from '@/constants';

import axiosClient from './instance';

export const getUserInfoService = async () => {
  const response = await axiosClient.get<IBaseRes<IUserInfo>>(
    ApiKeys.GetUserInfo,
  );
  return response.data.data;
};
