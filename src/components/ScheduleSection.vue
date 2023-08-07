<script setup lang="ts">
import SectionCardItem from '@/components/cards/SectionCardItem.vue'
import ScheduleCard from '@/components/cards/ScheduleCard.vue'
import { schedule } from '@/config/schedule'
</script>

<template>
  <div>
    <SectionCardItem
      title="Upcoming Schedule"
      :button="{ text: 'Creat a New Schedule' }"
      :height="'424px'"
    >
      <template #action></template>
      <template #content>
        <h3 class="subtitle">Priority</h3>
        <ScheduleCard v-for="item in schedule.priority" :event="item" />
        <h3 class="subtitle">Other</h3>
        <ScheduleCard v-for="item in schedule.other" :event="item" />
      </template>
    </SectionCardItem>
  </div>
</template>

<style scoped>
.subtitle {
  color: var(--primary-subtitle-color);
  font-feature-settings: 'salt' on, 'liga' off;
  font-family: var(--primary-font);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
}
</style>
