<script setup lang="ts">
import Avatar from '@/components/Avatar.vue'
import Dropdown from '@/components/Dropdown.vue'

defineProps<{
  avatar: {
    image: string
    fullName: string
  }
}>()
</script>

<template>
  <Dropdown class="button">
    <template #avatar>
      <Avatar :image="avatar.image" :fullName="avatar.fullName" />
    </template>
  </Dropdown>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
}
</style>
