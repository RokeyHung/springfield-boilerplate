import type { AxiosError } from 'axios';

import { isAxiosError } from 'axios';
import { isEmpty } from 'lodash';

interface AxiosErrorData {
  data: {
    error: string;
    message: string;
    statusCode: number;
  };
  statusCode: number;
}

export const errorMessage = (error: unknown): string => {
  if (isEmpty(error)) return '';

  if (isAxiosError(error)) {
    const axiosError = error as AxiosError;
    const responseData = axiosError.response?.data as
      | AxiosErrorData
      | undefined;

    if (responseData?.data?.message) {
      return responseData.data.message;
    }
    return 'Unknown error';
  }
  return 'Unknown error';
};
