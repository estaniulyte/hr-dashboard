<script setup lang="ts">
import CardTitle from '@/components/CardTitle.vue'

defineProps<{
  title: string
  subtitle: string
  number: number
}>()
</script>

<template>
  <div class="card">
    <CardTitle :title="title" />
    <span class="number"> {{ number }}</span>
    <a class="subtitle">{{ subtitle }}</a>
  </div>
</template>

<style scoped>
.card {
  width: 100%;
  max-height: 136px;
  display: flex;
  padding: 12px 20px;
  gap: 16px;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;
}

.card:hover {
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.number {
  color: var(--tertiary-colo);
  font-feature-settings: 'salt' on, 'liga' off;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  font-family: var(--main-font);
}

.subtitle {
  color: #ee61cf;
  font-feature-settings: 'salt' on, 'liga' off;
  font-family: var(--secondary-font);
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  white-space: nowrap;
}
.card:first-of-type {
  background-color: #ffefe7;
}

.card:first-of-type .subtitle {
  color: var(--main-color);
}

.card:nth-child(2) {
  background-color: #e8f0fb;
}

.card:nth-child(2) .subtitle {
  color: #3786f1;
}

.card:nth-child(3) {
  background-color: #fdebf9;
}

.card:nth-child(3) .subtitle {
  color: #ee61cf;
}

@media (min-width: 390px) {
  .number {
    font-size: 32px;
  }
  .subtitle {
    font-size: 14px;
  }
}

@media (min-width: 1197px) {
  .number {
    font-size: 36px;
  }
  .subtitle {
    font-size: 16px;
  }
}
</style>
