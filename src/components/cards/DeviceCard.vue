<script setup lang="ts">
import SectionInfoCardItem from '@/components/cards/SectionInfoCardItem.vue'

import { type Device } from '@/types/types'

defineProps<{
  device: Device
}>()
</script>

<template>
  <SectionInfoCardItem>
    <template #content>
      <h4>
        {{ device.title }}
      </h4>
      <p class="description">{{ device.description }}</p>
    </template>
    <template #action>
      <div class="info">
        <div class="price">{{ device.price }} &#x20AC</div>
        <div class="rating">{{ device.rating  }} &#9733</div>
      </div>
    </template>
  </SectionInfoCardItem>
</template>

<style scoped>
.description {
  overflow: hidden;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: var(--primary-subtitle-color);
}

.info {
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 100%;
}

.price {
  font-weight: 500;
  line-height: 28px;
  font-family: var(--main-font);
  font-size: 18px;
}

.rating {
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  justify-self: end;
  color: var(--primary-subtitle-color);
}
</style>