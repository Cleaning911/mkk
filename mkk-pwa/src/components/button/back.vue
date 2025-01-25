<script setup lang="ts">

import BackIcon from "../icons/back.vue";

const emit = defineEmits(["click"])
const handleClick = (e: any) => {
  emit("click", e)
}
</script>
<script lang="ts">
export default {
  name: "BackButton"
}
</script>
<template>
  <back-icon
    class="back-icon"
    @click="handleClick"
  />
</template>

<style scoped lang="scss">
.back-icon {
  width: 30px;
  height: 30px;
  fill: var(--bk-icon);

  &:hover {
    cursor: pointer;
  }
}
</style>