<script setup lang="ts">
import ActivityCard from '@/components/cards/ActivityCard.vue'

import { activity } from '@/config/recentActivity'
</script>

<template>
  <ActivityCard
    title="Recent Activity"
    :post="activity.recentPost"
    :activityCount="activity.activityCount"
  />
</template>
