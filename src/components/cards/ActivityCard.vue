<script setup lang="ts">
import CardTitle from '@/components/cards/components/CardTitle.vue'
import type { Post } from '@/types/types'
import PrimaryButton from './PrimaryButton.vue'

defineProps<{
  title?: string
  post: Post
  activityCount?: number
}>()
</script>

<template>
  <div class="card">
    <div class="heading">{{ title }}</div>
    <div class="content">
      <p class="post-time">{{ post.timestamp }}</p>
      <h3 class="post-title">{{ post.title }}</h3>
      <p class="post-description">{{ post.description }}</p>
    </div>
    <div class="action">
      <p class="activity-count">Today you makes {{ activityCount }} Activity</p>
      <PrimaryButton name="See All Activity" />
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-height: 258px;
  min-height: 258px;
  border-radius: 10px;
  background: var(--tertiary-color);
  color: var(--just-white);
  border-radius: 10px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 26px 0 28x 0;
}

.activity-count {
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.action {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.post-time {
  color: #fff;
  font-family: var(--secondary-font);
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  opacity: 0.6;
}

.post-title {
  color: var(--just-white);
  font-feature-settings: 'salt' on, 'liga' off;
  font-family: var(--primary-font);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}

.post-description {
  color: var(--just-white);
  font-feature-settings: 'salt' on, 'liga' off;
  font-family: var(--secondary-font);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  align-self: stretch;
  opacity: 0.8;
}

.heading {
  border-radius: 10px 10px 0px 0px;
  background: #1b204a;
  align-items: center;
  min-height: 48px;
  max-height: 48px;
  display: flex;
  align-items: center;
}

.content {
}

@media (min-width: 390px) {
  .card {
    min-height: 306px;
    max-height: 306px;
  }
  .action {
    flex-direction: column;
    justify-content: start;
    gap: 18px;
    padding: 0 20px 24px 20px;
  }
  .content {
    padding: 0px 20px;
  }
  .heading {
    padding: 10px 20px;
  }
}

@media (min-width: 744px) {
  .card {
    min-height: 319px;
    max-height: 319px;
  }
}

@media (min-width: 1197px) {
  .card {
    min-height: 258px;
    max-height: 258px;
  }
  .heading {
    padding: 10px 24px;
  }
  .content {
    padding: 0px 24px;
  }

  .action {
    flex-direction: row;
    padding: 0 24px 26px 24px;
  }
}
</style>
