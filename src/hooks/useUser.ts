import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { QueryKeys } from '@/constants';
import { getUserInfoService } from '@/services';

export const useUser = () => {
  const getUserInfoQuery = useQuery({
    queryFn: async () => {
      return getUserInfoService();
    },
    queryKey: [QueryKeys.GetUserInfo],
  });

  const userInfo = useMemo(() => {
    if (!getUserInfoQuery.data) {
      return {
        email: '',
        id: '',
        image: '',
        userName: '',
      };
    }
    return getUserInfoQuery.data;
  }, [getUserInfoQuery.data]);

  return {
    getUserInfoQuery,
    userInfo,
  };
};
