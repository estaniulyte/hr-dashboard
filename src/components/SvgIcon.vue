<script setup lang="ts">
defineProps<{
  path: string
}>()
</script>

<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g v-html="path"></g>
  </svg>
</template>

<style scoped>
svg {
  color: var(--icon-color);
  height: var(--icon-size);
  width: var(--icon-size);
}
</style>
