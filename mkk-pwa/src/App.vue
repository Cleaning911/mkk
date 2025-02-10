<template>
  <div id="app" class="app">
    <splash v-if="getShowSplash" />
    <router-view v-else />
  </div>
</template>

<script setup lang="ts">
import {onMounted,toRefs, watch} from "vue";
import {useUserStore} from "./stores/userStore.ts";
import {useRouter} from "vue-router";
import Splash from "./views/splash.vue";
import {ROUTE_NAME_LOGIN, ROUTE_NAME_WORK_JOURNAL} from "./routes.ts";
const { isAuth, getShowSplash } = toRefs(useUserStore())
const { init } = useUserStore()
const router = useRouter()

const checkAuthAndRedirect = () => {
  if (!isAuth.value) {
    router.push({
      name: ROUTE_NAME_LOGIN
    })
  } else {
    router.push({
      name: ROUTE_NAME_WORK_JOURNAL
    })
  }
}

onMounted(() => {
  init()
})

watch(getShowSplash,(val) => {
  if (!val) {
    checkAuthAndRedirect()
  }
}, {
  immediate: false
})
watch(isAuth,() => {
  checkAuthAndRedirect()
}, {
  immediate: false
})
</script>

<style scoped lang="scss">
.app {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
}
</style>
