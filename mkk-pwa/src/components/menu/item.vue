<script setup lang="ts">

</script>
<script lang="ts">
export default {
  name: "MainMenuItem"
}
</script>

<template>
  <div class="main-menu-item">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.main-menu-item {
  padding: 8px;
  color: var(--text-menu);
  width: 100%;
  box-sizing: border-box;
  border-bottom: var(--border-menu);

  & a {
    color: var(--text-menu);
  }

  &:hover {
    background-color: var(--bk-menu--selected);
    color: var(--text-menu--selected);
  }
}
</style>