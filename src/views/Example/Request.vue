<template>
  <div></div>
</template>

<script setup lang="ts">
import { loginApi } from '@/api/user';
import type { UserData } from '@/api/user/types';

const login = async () => {
  const loginInfo: UserData = {
    userCode: 'admin',
    password: '123456'
  };
  const res = await loginApi(loginInfo);
  console.log(res);
};
login();
</script>

<style scoped></style>
