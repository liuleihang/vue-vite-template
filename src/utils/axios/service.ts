import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  AxiosError
} from 'axios';
import axios from 'axios';
import qs from 'qs';

import { config } from './config';

// import { useCache } from '@/hooks/web/useCache'

const { result_code, base_url } = config;
// export const PATH_URL = base_url[import.meta.env.VITE_API_BASEPATH]

// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: '', // api 的 base_url
  timeout: config.request_timeout // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (
      config.method === 'post' &&
      (config.headers as AxiosRequestHeaders)['Content-Type'] ===
        'application/x-www-form-urlencoded'
    ) {
      config.data = qs.stringify(config.data);
    }
    // ;(config.headers as AxiosRequestHeaders)['Token'] = 'test test'

    //处理token,将token放入头部 By hifeeling
    /* const { wsCache } = useCache()
    const token = wsCache.get('token')
    if (token) {
      (config.headers as AxiosRequestHeaders)['token'] = token
    } */

    // get参数编码
    if (config.method === 'get' && config.params) {
      let url = config.url as string;
      url += '?';
      const keys = Object.keys(config.params);
      for (const key of keys) {
        if (config.params[key] !== void 0 && config.params[key] !== null) {
          url += `${key}=${encodeURIComponent(config.params[key])}&`;
        }
      }
      url = url.substring(0, url.length - 1);
      config.params = {};
      config.url = url;
    }
    return config;
  },
  (error: AxiosError) => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    if (response.config.responseType === 'blob') {
      // 如果是文件流，直接过
      return response;
    } else if (response.data.code === result_code) {
      //刷新token处理
      const keys = Object.keys(response.headers);
      if (keys.includes('token')) {
        // const { wsCache } = useCache()
        // wsCache.set('token', response.headers["token"])
      }
      return response.data;
    } //token过期 3001 Token不存在|3002 Token过期
    else if (response.data.code == '3001' || response.data.code == '3002') {
      //token过期或不存在则清空
      // const { wsCache } = useCache()
      // wsCache.clear()
      window.location.href = '/login';
    } else {
      // ElMessage.error(response.data.msg)
    }
  },
  (error: AxiosError) => {
    console.log('err' + error); // for debug
    // ElMessage.error(error.message)
    return Promise.reject(error);
  }
);

export { service };
