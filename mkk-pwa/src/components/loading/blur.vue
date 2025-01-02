<template>
  <div class="loading-blur">
    <slot>Подождите...</slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "LoadingBlur"
}
</script>

<style scoped lang="scss">
.loading-blur {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #00000020;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>