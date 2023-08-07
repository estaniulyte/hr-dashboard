<script setup lang="ts">
import Heading from '@/components/Heading.vue'
import StatsSection from '@/components/StatsSection.vue'
import DevicesSection from '@/components/DevicesSection.vue'
import RecentActivitySection from '@/components/RecentActivitySection.vue'
import ScheduleSection from '@/components/ScheduleSection.vue'

import { type Products } from '@/types/types'

import { statsCards } from '@/config/stats'

import { ref, onMounted } from 'vue'

import { fetchSmartphones } from '@/endpoints/smartphones'

const smartphonesData = ref<Products | null>(null)

onMounted(async () => {
  try {
    smartphonesData.value = await fetchSmartphones()
  } catch (error) {
    console.error('Failed to fetch smartphone data:', error)
  }
})
</script>

<template>
  <div class="page">
    <div class="container">
      <Heading title="Dashboard" />
      <div class="content">
        <div class="section">
          <StatsSection :cards="statsCards" />
          <DevicesSection v-if="smartphonesData" :devices="smartphonesData.products" />
        </div>
        <div class="section-2">
          <RecentActivitySection />
          <ScheduleSection />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (min-width: 390px) {
  .content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .page {
    margin: 0 20px;
  }

  .section-2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

@media (min-width: 744px) {
  .page {
    margin: 0 52px;
  }
  .section-2 {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 16px;
  }
}

@media (min-width: 1197px) {
  .content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 30px;
  }

  .page {
    margin: 0 50px;
  }
  .section-2 {
    display: flex;
    flex-direction: column;
  }
}
</style>
