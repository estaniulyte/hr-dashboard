<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <h3 class="title">{{ title }}</h3>
</template>

<style scoped>
.title {
  align-self: stretch;
  color: var(--tertiary-color);
  font-feature-settings: 'salt' on, 'liga' off;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  white-space: nowrap;
}

@media (min-width: 390px) {
  .title {
    font-size: 16px;
  }
}

@media (min-width: 1197px) {
  .title {
    font-size: 18px;
  }
}
</style>
