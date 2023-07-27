<script setup lang="ts">
defineProps<{
  image: string
  fullName: string
}>()
</script>

<template>
  <div class="container">
    <img class="image" :src="image" alt="avatar" size="" />
    <span class="name">{{ fullName }}</span>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  margin: 0 9px;
  gap: 12px;
}

.image {
  height: 42px;
  width: 42px;
  border-radius: 50%;
}
.name {
  color: var(--tertiary-color);
  font-feature-settings: 'salt' on, 'liga' off;
  font-family: var(--main-font);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
}

@media (min-width: 390px) {
  .name {
    display: none;
  }
}

@media (min-width: 1197px) {
  .name {
    display: flex;
  }
}
</style>
