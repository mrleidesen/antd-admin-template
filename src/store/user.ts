import type { TUser } from '@/types';

import { proxy, useSnapshot } from 'valtio';

// FIXME: 根据自己需求设置用户类型
export const userStore = proxy<{
  user?: TUser;
}>({});

export const useUserStore = () => {
  const snap = useSnapshot(userStore);

  return snap;
};
