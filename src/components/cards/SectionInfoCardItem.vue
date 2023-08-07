<template>
  <div class="card">
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="action">
      <slot name="action"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  min-height: 60px;
  padding: 12px 16px;
  align-items: center;
  gap: 95px;
  flex-shrink: 0;
  border-radius: 6px;
  border: 0.5px solid #e0e0e0;
  background: var(--background-color);
  padding: 12px 16px;
}

.card:hover {
  transition: var(--transition);
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

.content {
  width: 100%;
}

.action {
  display: flex;
  justify-content: end;
  min-width: 68px;
  max-width: 68px;
}
</style>
