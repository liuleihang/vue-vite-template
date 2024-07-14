import request from '@/utils/axios';

import type { UserData } from './types';

// 登录接口
export const loginApi = async (data: UserData): Promise<IResponse> => {
  const res = await request.post({ url: '/api/user/login', data });
  return res;
};
