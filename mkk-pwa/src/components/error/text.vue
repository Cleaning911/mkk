<template>
  <div class="error-text">
    <span class="error-text__inner">
      <error-icon class="error-text__icon"/>
      <slot name="default"></slot>
    </span>
  </div>
</template>

<script setup lang="ts">

import ErrorIcon from "../icons/error.vue";
</script>

<script lang="ts">
export default {
  name: "ErrorText"
}
</script>

<style scoped lang="scss">
.error-text {
  width: 100%;
  padding: 12px 12px;
  display: flex;
  border: var(--border-error);
  border-radius: 8px;
  color: var(--text-error);
  box-sizing: border-box;

  &__inner {
    display: grid;
    grid-template-columns: 24px auto;
    font-size: 13px;
    align-items: center;
    grid-gap: 8px;
  }

  &__icon {
    width: 24px;
    height: 24px;
  }
}
</style>