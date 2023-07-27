<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'

defineProps<{
  path: string
  href?: string
  tooltip?: string
}>()
</script>

<template>
  <button>
    <SvgIcon :path="path" class="icon" />
  </button>
</template>

<style scoped>
button {
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}

button:hover svg {
  color: var(--main-color-lighten);
}
</style>
