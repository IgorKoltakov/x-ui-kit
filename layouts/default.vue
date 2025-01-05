<template>
  <div class="container">
    <div class="sidebar-toggle" @click="handleOpenSidebar">&#5125</div>
    <layout-header />
    <layout-sidebar :sidebarIsOpen="sidebarIsOpen" />
    <div :class="['content', { content_full: !sidebarIsOpen }]">
      <NuxtPage />
    </div>
  </div>
</template>

<script lang="ts" setup>
const sidebarIsOpen = ref(false)

function handleOpenSidebar() {
  sidebarIsOpen.value = !sidebarIsOpen.value
}

</script>

<style scoped>
.content {
  max-width: 1400px;
  margin-left: 250px;
  padding: 2rem;
  transition: var(--transition);
}

.content_full {
  margin-left: 15px;
}

.sidebar-toggle {
  position: fixed;
  left: 0;
  top: 55px;
  width: 15px;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: var(--color-surface-dark);
  color: var(--color-text-dark);
}
</style>