<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <h1 class="title">
    {{ title }}
  </h1>
</template>

<style scoped>
.title {
  color: var(--tertiary-color);
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 500;
  line-height: 42px;
  margin: 10px 0;
}

@media (min-width: 390px) {
  .title {
    font-size: 20px;
  }
}

@media (min-width: 744px) {
  .title {
    font-size: 24px;
  }
}
</style>
