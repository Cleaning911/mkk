<script setup lang="ts">
import {ref} from "vue";
import type {IWorkJournalList} from "../../models/workJournal.ts";
import WorkJournalItem from "./item.vue";

const workJournalList = ref([
  {
    id: 1,
    objectName: "Test object #1",
    address: "Test address #1",
    dtCreate: new Date(),
    photoCount: 2
  },
  {
    id: 2,
    objectName: "Test object #2",
    address: "Test address #2",
    dtCreate: new Date(),
    photoCount: 10
  },
  {
    id: 3,
    objectName: "Test object #3",
    address: "Test address #3",
    dtCreate: new Date(),
    photoCount: 10
  },
  {
    id: 4,
    objectName: "Test object #4",
    address: "Test address #4",
    dtCreate: new Date(),
    photoCount: 10
  },
  {
    id: 5,
    objectName: "Test object #5",
    address: "Test address #5",
    dtCreate: new Date(),
    photoCount: 5
  },
  {
    id: 6,
    objectName: "Test object #6",
    address: "Test address #6",
    dtCreate: new Date(),
    photoCount: 6
  },
  {
    id: 7,
    objectName: "Test object #7",
    address: "Test address #7",
    dtCreate: new Date(),
    photoCount: 3
  },
  {
    id: 8,
    objectName: "Test object #8",
    address: "Test address #8",
    dtCreate: new Date(),
    photoCount: 1
  }
] as IWorkJournalList)
</script>
<script lang="ts">
export default {
  name: "WorkJournalList"
}
</script>

<template>
  <div class="work-journal-list">
    <work-journal-item
      v-for="item in workJournalList"
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