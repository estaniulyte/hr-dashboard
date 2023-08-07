<script setup lang="ts">
import { type Device } from '@/types/types'
import SectionCardItem from '@/components/cards/SectionCardItem.vue'
import DeviceCard from '@/components/cards/DeviceCard.vue'

import { arrowDownIconPath } from '@/config/iconPaths'

import SvgIcon from '@/components/SvgIcon.vue'

import { ref, computed } from 'vue'

const props = defineProps<{
  devices: Device[]
}>()

const sortKey = ref<keyof Device>('id')
const isDropdownOpen = ref<boolean>(false)

const sortedDevices = computed(() => {
  if (!sortKey.value) {
    return props.devices
  }

  const clonedDevices = [...props.devices]

  if (sortKey.value === 'rating') {
    return clonedDevices.sort((a, b) => b[sortKey.value] - a[sortKey.value])
  } else if (sortKey.value === 'price') {
    return clonedDevices.sort((a, b) => a[sortKey.value] - b[sortKey.value])
  } else if (sortKey.value === 'id') {
    return clonedDevices.sort((a, b) => a[sortKey.value] - b[sortKey.value])
  } else {
    return clonedDevices.sort((a, b) => a[sortKey.value].localeCompare(b[sortKey.value]))
  }
})

const handleSortChange = (sortOption: keyof Device) => {
  sortKey.value = sortOption
  isDropdownOpen.value = false
}

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const getSelectedOptionLabel = computed(() => {
  if (sortKey.value === 'rating') {
    return 'Rating'
  } else if (sortKey.value === 'price') {
    return 'Price'
  } else if (sortKey.value === 'title') {
    return 'Title'
  } else {
    return 'Sort by'
  }
})
</script>

<template>
  <div>
    <SectionCardItem title="Devices" :button="{ text: 'See All List' }" :height="'334px'">
      <template #action>
        <div class="custom-dropdown">
          <div class="selected-option" @click="toggleDropdown">
            {{ getSelectedOptionLabel }}
            <SvgIcon :size="'18px'" :path="arrowDownIconPath" />
          </div>
          <ul v-if="isDropdownOpen" class="dropdown-options">
            <li class="list-item" @click="handleSortChange('title')">Title</li>
            <li class="list-item" @click="handleSortChange('rating')">Rating</li>
            <li class="list-item" @click="handleSortChange('price')">Price</li>
          </ul>
        </div>
      </template>
      <template #content>
        <DeviceCard v-for="device in sortedDevices" :device="device" />
      </template>
    </SectionCardItem>
  </div>
</template>

<style scoped>
.sort {
  display: flex;
  width: 145px;
  padding: 0px 6px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #efefef;
  background: #fff;
  color: var(--secondary-subtitle-color);
  font-feature-settings: 'salt' on, 'liga' off;
  font-family: var(--secondary-font);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
}

.option {
  font-feature-settings: 'salt' on, 'liga' off;
  font-family: var(--secondary-font);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
}

.custom-dropdown {
  z-index: 1;
}

.dropdown-options,
.selected-option {
  font-feature-settings: 'salt' on, 'liga' off;
  font-family: var(--secondary-font);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  color: var(--secondary-subtitle-color);

  border-radius: 4px;
  border: 1px solid #efefef;
  background: #fff;
}

.dropdown-options {
  background-color: white;
  padding: 4px 6px;
}

.selected-option {
  height: 27px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  max-width: 145px;
  min-width: 100px;
  gap: 8px;
  padding: 0px 6px;
}

.list-item {
  padding-top: 4px;
}
</style>
