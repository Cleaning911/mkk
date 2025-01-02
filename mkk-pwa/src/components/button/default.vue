
<template>
  <button :disabled="disabled" class="button-default" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['click'])
const handleClick = (e) => {
  emit('click', e)
}
</script>
<script lang="ts">
export default {
  name: "ButtonDefault"
}
</script>

<style scoped lang="scss">
.button-default {
  background-color: var(--bk-button);
  color: var(--text-button);
  padding: 8px 16px;
  border-radius: 8px;
  border: var(--border-button);
  width: 100%;

  &:focus {
    outline: none!important;
  }

  &[disabled] {
    background-color: var(--bk-button-disabled);
    color: var(--text-button-disabled);
    border: var(--border-button-disabled);
    cursor: default;
    pointer-events: none;
  }
}
</style>