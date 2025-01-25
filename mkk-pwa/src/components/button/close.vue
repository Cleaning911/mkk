<script setup lang="ts">
import CloseIcon from "../icons/close.vue";
const emit = defineEmits(["click"])
const handleClick = () => {
  emit("click")
}
</script>
<script lang="ts">
export default {
  name: "CloseButton"
}
</script>

<template>
  <close-icon class="close-button" @click="handleClick" />
</template>

<style scoped lang="scss">
.close-button {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
</style>