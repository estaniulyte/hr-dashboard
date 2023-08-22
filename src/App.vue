<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
import MainPage from '@/pages/MainPage.vue'
</script>

<template>
  <div class="app">
    <header class="header">
      <navbar></navbar>
    </header>
    <div class="main-container">
      <sidebar></sidebar>
      <main class="main-content">
        <main-page></main-page>
      </main>
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.header {
  margin-left: var(--sidebar-width);
}

.main-container {
  display: flex;
}

.main-content {
  width: calc(100% - var(--sidebar-width));
  max-width: calc(100% - var(--sidebar-width));
  margin-left: var(--sidebar-width);
}

</style>
