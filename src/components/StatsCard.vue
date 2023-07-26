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
    <p class="subtitle">{{ subtitle }}</p>
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
  background: #fdebf9;
}

.number {
  color: var(--tertiary-colo);
  font-feature-settings: 'salt' on, 'liga' off;
  font-family: Poppins;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 77.778% */
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
</style>
