<script setup lang="ts">
import ButtonPlus from "../components/button/plus.vue";
import ButtonMenu from "../components/button/menu.vue";
import {computed, onMounted} from "vue";
import DateService from "../services/date-service.ts";
import WorkJournalList from "../components/workJournal/list.vue";
import {useRouter} from "vue-router";
import {useVisitStore} from "../stores/visitStore.ts";
const props = defineProps({
  date: {
    type: [Date, String]
  }
})
const router = useRouter()
const { fetchVisits } = useVisitStore()
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
onMounted(() => {
  fetchVisits(props.date)
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
      <button-menu />
      <span>{{ dateStr }}</span>
      <button-plus @click="handleNewVisitClick" />
    </div>
    <div class="work-journal__content">
      <work-journal-list />
    </div>
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