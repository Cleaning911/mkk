<script setup lang="ts">
import ButtonPlus from "../components/button/plus.vue";
import ButtonMenu from "../components/button/menu.vue";
import {computed, onMounted, ref} from "vue";
import DateService from "../services/date-service.ts";
import WorkJournalList from "../components/workJournal/list.vue";
import {useRouter} from "vue-router";
import {useVisitStore} from "../stores/visitStore.ts";
import MainMenu from "../components/menu/main.vue";
import {useUserStore} from "../stores/userStore.ts";
import LoadingBlur from "../components/loading/blur.vue";
const props = defineProps({
  date: {
    type: [Date, String]
  }
})
const router = useRouter()
const { fetchVisits } = useVisitStore()
const { user } = useUserStore()
const loading = ref(false)
const propDate = computed(() => {
  return props.date ? new Date(props.date) : new Date()
})
const dateStr = computed(() => {
  return DateService.getDateHumanStr(propDate.value)
})
const handleNewVisitClick = () => {
  router.push({
    name: "visit",
    params: {
      id: "new"
    }
  })
}
const loadVisitList = () => {
  loading.value = true
  fetchVisits(user, props.date || new Date()).finally(() => {
    loading.value = false
  })
}
onMounted(() => {
  loadVisitList()
})
</script>

<script lang="ts">
export default {
  name: "WorkJournal"
}
</script>

<template>
  <div class="work-journal">
    <div class="work-journal__head">
      <main-menu @new-visit="handleNewVisitClick"/>
      <span>{{ dateStr }}</span>
      <button-plus @click="handleNewVisitClick" />
    </div>
    <div class="work-journal__content">
      <work-journal-list />
    </div>
    <loading-blur v-if="loading" />
  </div>
</template>

<style scoped lang="scss">
.work-journal {
  display: grid;
  grid-template-rows: 40px 1fr;
  grid-gap: 16px;
  overflow: hidden;

  &__head {
    display: grid;
    grid-template-columns: 30px 1fr 40px;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  &__content {
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>