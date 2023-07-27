<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { searchIconPath } from '@/config/iconPaths'
</script>

<template>
  <form>
    <input type="search" placeholder="Search" />
    <SvgIcon :path="searchIconPath" class="icon" />
  </form>
</template>

<style scoped>
form {
  position: relative;
  display: flex;
  background-color: var(--background-color);
  border-radius: 4px;
  border: var(--border-style);
  z-index: 0;
}

input[type='search'] {
  border: none;
  width: 100%;
  align-items: center;
  flex-shrink: 0;
  background: transparent;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 10px 16px;
  z-index: 0;
}

input[type='search']::placeholder {
  color: #b3b3b3;
}

.icon {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
  z-index: 1;
}

@media (min-width: 390px) {
  form {
    width: 24px;
    border: none;
  }
  input[type='search'],
  .icon {
    display: none;
  }
}

@media (min-width: 744px) {
  form {
    width: 245px;
    height: 36px;
    border: var(--border-style);
  }

  input[type='search'],
  .icon {
    display: flex;
  }
}

@media (min-width: 1197px) {
  form {
    width: 343px;
    height: 44px;
  }
}
</style>
