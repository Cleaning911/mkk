<template>
  <div class="loading-blur">
    <logo-icon v-if="showIcon" />
    <slot v-else>Подождите...</slot>
  </div>
</template>

<script lang="ts">
import LogoIcon from "../icons/logo.vue";

export default {
  name: "LoadingBlur",
  components: { LogoIcon },
  props: {
    showIcon: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
.loading-blur {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>