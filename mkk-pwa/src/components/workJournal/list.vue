<script setup lang="ts">
import {computed, ref, toRefs} from "vue";
import type {IVisitList} from "../../models/visit.ts";
import WorkJournalItem from "./item.vue";
import {useVisitStore} from "../../stores/visitStore.ts";

const { getVisitList } = toRefs(useVisitStore())
const isNoVisits = computed(() => {
  return !getVisitList.value?.length
})

</script>
<script lang="ts">
export default {
  name: "WorkJournalList"
}
</script>

<template>
  <div class="work-journal-list">
    <div v-if="isNoVisits" class="work-journal-list__empty">
      <span class="work-journal-list__empty__text">Посещения  отсутствуют</span>
    </div>
    <work-journal-item
      v-else
      v-for="item in getVisitList"
      :key="`work-journal-item-${item.id}`"
      :work-journal="item"
    />
  </div>
</template>

<style scoped lang="scss">
.work-journal-list {
  display: grid;
  grid-template-rows: 1fr;
  height: 100%;

  &__empty {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary);

    &__text {
      margin-top: -100px;
    }
  }
}
</style>