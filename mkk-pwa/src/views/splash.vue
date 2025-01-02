<template>
  <div class="splash">
    <logo-icon />
    <span class="splash__version">v. {{ appVersion }} от {{ appReleaseDate }}</span>
  </div>
</template>

<script setup lang="ts">

import LogoIcon from "../components/icons/logo.vue";
import {computed} from "vue";

const appVersion = computed(() => {
  return import.meta.env.VITE_APP_VERSION
})
const appReleaseDate = computed(() => {
  return import.meta.env.VITE_APP_RELEASE
})
</script>

<style scoped lang="scss">
.splash {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: white;
  z-index: 100;

  &__version {
    font-size: 12px;
    color: lightgray;
  }
}
</style>