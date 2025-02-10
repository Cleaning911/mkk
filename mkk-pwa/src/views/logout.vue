<script setup lang="ts">
  import AuthService from "../api/auth-service.ts";
  import {useRouter} from "vue-router";

  AuthService.logout()
  useRouter().push({
    name: "login"
  })
</script>
<script lang="ts">
export default {
  name: "Logout"
}
</script>

<template>
  <div class="logout"></div>
</template>

<style scoped lang="scss">

</style>