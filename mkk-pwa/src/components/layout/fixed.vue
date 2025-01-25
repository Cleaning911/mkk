<script lang="ts">
export default {
  name: "LayoutFixed"
}
</script>

<template>
  <div class="layout-fixed">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.layout-fixed {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 11;
  background-color: var(--bk--dark);
}
</style>