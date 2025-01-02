<template>
  <img src="@/assets/logo.svg" class="logo-icon" />
</template>

<script lang="ts">
export default {
  name: "LogoIcon"
}
</script>

<style scoped lang="scss">
.logo-icon {
  height: 50px;
}

@media screen and (max-width: 1600px) {
  .logo-icon {
    height: 40px;
  }
}

@media screen and (max-width: 1024px) {
  .logo-icon {
    height: 30px;
  }
}
</style>