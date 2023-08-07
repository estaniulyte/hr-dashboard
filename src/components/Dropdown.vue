<script setup lang="ts">
import { arrowDownIconPath } from '@/config/iconPaths'

import SvgIcon from '@/components/SvgIcon.vue'

defineProps<{
  action?: () => void
}>()
</script>

<template>
  <button class="button" @click="action">
    <slot name="avatar"></slot>
    <SvgIcon :path="arrowDownIconPath" />
  </button>
</template>

<style scoped>
.button {
  display: flex;
  height: 42px;
  align-items: center;
  border: none;
  cursor: pointer;
  background-color: transparent;
  height: 42px;
}

.button:hover {
  background-color: var(--background-color);
  border-radius: var(--border-radius);
}
</style>
