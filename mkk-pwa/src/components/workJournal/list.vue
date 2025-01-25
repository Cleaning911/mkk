<script setup lang="ts">
import {ref, toRefs} from "vue";
import type {IVisitList} from "../../models/visit.ts";
import WorkJournalItem from "./item.vue";
import {useVisitStore} from "../../stores/visitStore.ts";

const { getVisitList } = toRefs(useVisitStore())
</script>
<script lang="ts">
export default {
  name: "WorkJournalList"
}
</script>

<template>
  <div class="work-journal-list">
    <work-journal-item
      v-for="item in getVisitList"
      :key="`work-journal-item-${item.id}`"
      :work-journal="item"
    />
  </div>
</template>

<style scoped lang="scss">
.work-journal-list {
  display: flex;
  flex-direction: column;
}
</style>