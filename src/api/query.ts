import type { TUser } from '@/types';

import { useQuery } from '@tanstack/react-query';

import { mockFetchUserInfo } from '.';

export function useCurrentUserInfo() {
  return useQuery<TUser, any>(['current-user'], () => {
    return mockFetchUserInfo();
  });
}
