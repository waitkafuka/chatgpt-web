<script setup lang='ts'>
import { computed } from 'vue'
import { useAuthStore, useUserStore } from '@/store'
import { isString } from '@/utils/is'

const userStore = useUserStore()
const authStore = useAuthStore()

const userInfo = computed(() => userStore.userInfo)
const session = computed(() => authStore.session)
</script>

<template>
  <div class="flex items-center overflow-hidden">
    <!-- <div class="w-10 h-10 overflow-hidden rounded-full shrink-0">
      <template v-if="isString(userInfo.avatar) && userInfo.avatar.length > 0">
         <NAvatar
          size="large"
          round
          :src="userInfo.avatar"
          :fallback-src="defaultAvatar"
        />
      </template>
      <template v-else>
        <NAvatar size="large" round :src="defaultAvatar" />
      </template>
    </div> -->
    <div class="flex-1 min-w-0 ml-2">
      <h2
        class="overflow-hidden font-bold text-md text-ellipsis whitespace-nowrap"
      >
        <span v-if="session?.nickname">{{ session.nickname }}</span>
        <a v-else href="/login">未登录</a>
      </h2>
      <p
        class="overflow-hidden text-xs text-gray-500 text-ellipsis whitespace-nowrap"
      >
        <span
          v-if="isString(userInfo.description) && userInfo.description !== ''"
          v-html="userInfo.description"
        />
      </p>
    </div>
  </div>
</template>
