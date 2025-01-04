<script setup lang="ts">
import IconPlus from "../icons/plus.vue";
const emit = defineEmits(["click"])
const handleClick = () => {
  emit("click")
}
</script>
<script lang="ts">
export default {
  name: "ButtonPlus"
}
</script>

<template>
  <icon-plus class="button-plus" @click="handleClick" />
</template>

<style scoped lang="scss">
.button-plus {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
</style>