<script setup lang="ts">
import CardTitle from '@/components/cards/components/CardTitle.vue'

defineProps<{
  title: string
  button: {
    text: string
    action?: () => void
  }
}>()
</script>

<template>
  <section class="section">
    <div class="top-container">
      <div class="heading">
        <CardTitle :title="title" />
        <slot name="action"></slot>
      </div>
      <div class="cards">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="action-container">
      <p class="divider"></p>
      <button class="button">
        {{ button.text }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.section {
  max-height: 289px;
  min-height: 289px;
  width: 100%;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  background: var(--just-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.top-container {
  padding: 16px 5px 0 5px;
}

.cards {
  overflow: scroll;
  padding: 0 15px;
  max-height: 195px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.divider {
  border-bottom: var(--divider-style);
}

.heading {
  padding: 0 15px;
  height: 37px;
  display: flex;
  justify-content: space-between;
}

.button {
  color: var(--main-color);
  text-align: center;
  font-feature-settings: 'salt' on, 'liga' off;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  border: none;
  background: transparent;
  cursor: pointer;
  width: 100%;
  padding: 10px;
}

.button:hover {
  height: 38px;
  background: #f5f5f5;
  border-radius: 0px 0px 10px 10px;
  transition: var(--transition);
}

.action-container {
  height: 39px;
}
</style>
