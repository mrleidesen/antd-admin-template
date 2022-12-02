import type { TUser } from '@/types';

import { getToken } from '@/utils';

import { request } from '@/utils/request';

/**
 * FIXME:
 * 简单做个 request 类型返回示例
 * 不存在实际 api 地址
 */
export function getUser() {
  return request<TUser>({
    url: '/user',
  });
}

export function mockFetchUserInfo() {
  return new Promise<TUser>((resolve, reject) => {
    setTimeout(() => {
      const token = getToken();

      if (token) {
        const user: TUser = {
          id: 1,
          name: '卷仔',
        };
        resolve(user);
      } else {
        reject({
          status: 401,
          msg: '暂未登录',
        });
      }
    }, 100);
  });
}
