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
  flex-direction: column;
}

.header {
  margin-left: var(--sidebar-width);
}

.main-container {
  display: flex;
  flex: 1;
  overflow-x: hidden;
}

.main-content {
  flex: 1;
  margin-left: var(--sidebar-width);
}
</style>
