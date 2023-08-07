<script setup lang="ts">
import SectionInfoCardItem from '@/components/cards/SectionInfoCardItem.vue'
import IconButton from '@/components/IconButton.vue'

import { horizontalMenu } from '@/config/iconPaths'

import { type Event } from '@/types/types'

defineProps<{
  event: Event
}>()
</script>

<template>
  <SectionInfoCardItem>
    <template #content>
      <h4 class="title">
        {{ event.title }}
      </h4>
      <p class="date">{{ event.date }}</p>
    </template>
    <template #action>
      <div class="action">
        <IconButton :path="horizontalMenu" class="search-btn" />
        <!-- <div class="price">{{ device.price }} &#x20AC</div>
        <div class="rating">{{ device.rating  }} &#9733</div> -->
      </div>
    </template>
  </SectionInfoCardItem>
</template>

<style scoped>
.date {
  color: var(--primary-subtitle-color, #686868);
  font-feature-settings: 'salt' on, 'liga' off;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
}

.title {
  color: var(--secondary-title-color);
  font-feature-settings: 'salt' on, 'liga' off;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  width: 283px;
  padding-bottom: 6px;
}


</style>
