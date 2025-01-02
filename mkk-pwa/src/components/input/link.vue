<template>
  <div class="input-link">
    <span class="input-link__text" @click="handleClick">
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["click"])
const handleClick = (e) => {
  emit("click", e)
}
</script>

<script lang="ts">
export default {
  name: "InputLink"
}
</script>

<style scoped lang="scss">
.input-link {
  display: flex;
  justify-content: center;
  width: 100%;

  &__text {
    color: var(--text-link);
    cursor: pointer;
    font-size: 12px;
    text-decoration: underline;
    text-align: center;

    &:hover {
      opacity: 80;
    }
  }
}
</style>