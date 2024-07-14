import { defineStore } from 'pinia';

interface AppState {
  title: string;
  logo: string;
}

export const useAppStore = defineStore('app', {
  state: (): AppState => {
    return {
      title: '',
      logo: ''
    };
  },
  // 使用默认持久化配置保存
  persist: true
});
