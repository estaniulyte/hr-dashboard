<script setup lang="ts">
import Searchbox from '@/components/Searchbox.vue'
import IconButton from '@/components/IconButton.vue'
import AvatarDropdown from '@/components/AvatarDropdown.vue'

import { burgerMenuIconPath, searchIconPath } from '@/config/iconPaths'

import { header } from '@/config/header'
</script>

<template>
  <div class="container">
    <div class="left-side">
      <IconButton :path="burgerMenuIconPath" class="menu-btn" />
      <IconButton :path="searchIconPath" class="search-btn" />
      <Searchbox />
    </div>
    <div class="right-side">
      <IconButton
        class="button"
        v-for="item in header.actionButtons"
        :path="item.icon"
        :href="item.href"
        :tooltip="item.tooltip"
      />
      <AvatarDropdown :avatar="header.userMenu" />
    </div>
  </div>
  <p class="divider" />
</template>

<style scoped>
.button {
  padding: 0;
}
.container {
  height: var(--nav-height);
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
.left-side {
  display: flex;
  align-items: center;
}
.right-side {
  display: flex;
  align-items: center;
}

.divider {
  border-bottom: var(--divider-style);
}

@media (min-width: 390px) {
  .divider {
    margin: 0 0 10px 0;
  }
  .container {
    margin: auto 20px;
  }
  .right-side {
    gap: 16px;
  }

  .left-side {
    align-items: center;
    display: flex;
    justify-content: center;
    justify-items: center;
    gap: 16px;
  }
  .menu-btn,
  .search-btn {
    padding: 0;
  }
}

@media (min-width: 744px) {
  .container {
    margin: auto 50px auto 0px;
  }
  .right-side {
    gap: 30px;
  }

  .menu-btn {
    display: flex;
    margin: 0 15px 0 13px;
  }

  .search-btn {
    display: none;
  }

  .left-side {
    gap: 0px;
  }

  .divider {
    margin: 0 0 16px 0;
  }
}

@media (min-width: 1197px) {
  .container {
    margin: auto 50px;
  }

  .right-side {
    gap: 30px;
  }

  .menu-btn {
    display: none;
  }

  .divider {
    margin: 0 0 11px 50px;
  }
}
</style>
