<script setup lang="ts">
import MenuIcon from "../icons/menu.vue";

const emit = defineEmits(["click"])
const handleClick = () => {
  emit("click")
}
</script>
<script lang="ts">
export default {
  name: "ButtonMenu"
}
</script>
<template>
  <menu-icon class="button-menu" @click="handleClick" />
</template>

<style scoped lang="scss">
.button-menu {
  width: 30px;
  height: 30px;
}
</style>