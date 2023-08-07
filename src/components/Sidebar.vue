<script setup lang="ts">
import { sidebar } from '@/config/sidebar'
import SvgIcon from '@/components/SvgIcon.vue'
</script>

<template>
  <div class="sidebar">
    <div class="title-container">
      <h1 class="title">WeHR</h1>
    </div>
    <nav class="nav" v-for="item in sidebar">
      <h3 class="nav-title">{{ item.title }}</h3>
      <ul class="nav-link" v-for="link in item.items">
        <a :class="{ active: link.active }">
          <SvgIcon :path="link.icon"> </SvgIcon>
          <h4>{{ link.title }}</h4>
        </a>
      </ul>
    </nav>
  </div>
</template>

<style scoped\>
.sidebar {
  display: flex;
  width: var(--sidebar-width);
  max-width: var(--sidebar-width);
  padding: 20px 0px 272px 0px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background-color: #fafafa;
  flex-direction: column;
  gap: 39px;
  flex-shrink: 0;
}

.title-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  color: #000;
  font-feature-settings: 'salt' on, 'liga' off;
  font-style: normal;
  font-weight: 600;
  line-height: 42px;
}

.nav {
  display: flex;
  flex-direction: column;
}

.nav-title {
  color: var(--secondary-subtitle-color);
  font-family: var(--secondary-font);
  font-size: 12px;
  text-transform: uppercase;
  opacity: 0.5;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
}

.nav-link {
  display: flex;
  padding: 16px 30px;
  align-items: center;
  text-align: center;
  color: var(--secondary-subtitle-color);
}

.nav-link a {
  display: flex;
  align-items: center;
  text-align: center;
  gap: 24px;
}

.nav-link:hover {
  background-color: #f9e2e2;
  color: var(--main-color-lighten);
  cursor: pointer;
}

.nav-link:hover svg {
  color: var(--main-color-lighten);
  cursor: pointer;
}

.active,
.active svg {
  color: var(--main-color);
}

@media (min-width: 390px) {
  .sidebar {
    display: none;
  }
}

@media (min-width: 744px) {
  .sidebar {
    display: flex;
  }
  .nav-link a h4 {
    display: none;
  }
  .title {
    font-size: 20px;
  }

  .nav-title {
    text-align: center;
    padding-left: 0px;
    font-size: 10px;
  }

  .nav-link {
    justify-content: center;
  }
}

@media (min-width: 1197px) {
  .nav-link a h4 {
    display: inline;
  }

  .nav-title {
    text-align: left;
    padding-left: 30px;
  }

  .nav-link {
    justify-content: left;
  }

  .title {
    font-size: 36px;
  }
}
</style>
