<script setup lang="ts">
defineProps<{
  name: string
  action?: () => void
}>()
</script>
<template>
  <button class="button" @click="action">
    {{ name }}
  </button>
</template>

<style scoped>
.button {
  background: var(--main-color);
  display: flex;
  height: 38px;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 4px;
  color: #fff;
  white-space: nowrap;

  text-align: center;
  font-family: var(--main-font);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.button:hover {
  cursor: pointer;
}

@media (min-width: 390px) {
  .button {
    max-width: 146px;
  }
}

@media (min-width: 744px) {
  .button {
  }
}

@media (min-width: 1197px) {
  .button {
    max-width: 139px;
  }
}
</style>
