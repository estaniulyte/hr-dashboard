<script setup lang="ts">
import { type StatCard } from '@/types/index'

import StatsCard from '@/components/StatsCard.vue'

defineProps<{
  cards: Array<StatCard>
}>()
</script>

<template>
  <section class="container">
    <StatsCard
      v-for="card in cards"
      :key="card.heading"
      :title="card.heading"
      :subtitle="card.subheading"
      :number="card.number"
    />
  </section>
</template>

<style scoped>
@media (min-width: 390px) {
  .container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}

@media (min-width: 744px) {
  .container {
    display: flex;
    flex-direction: row;
    gap: 14px;
  }
}
</style>
