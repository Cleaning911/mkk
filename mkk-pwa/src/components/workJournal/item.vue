<script setup lang="ts">
import type {PropType} from "vue";
import type {IWorkJournal} from "../../models/workJournal.ts";
import {computed} from "vue";
import DateService from "../../services/date-service.ts";

const props = defineProps({
  workJournal: {
    type: Object as PropType<IWorkJournal>
  }
})
const formattedCreationDate = computed(() => {
  return props.workJournal ? DateService.formatDateForUI(props.workJournal.dtCreate) : "Дата создания неизвестна"
})
</script>
<script lang="ts">
export default {
  name: "WorkJournalItem"
}
</script>

<template>
  <div class="work-journal-item">
    <span class="work-journal-item__object">{{ workJournal.objectName }}</span>
    <span class="work-journal-item__address">{{ workJournal.address }}</span>
    <div class="work-journal-item__footer">
      <span>{{ formattedCreationDate }}</span>
      <span class="work-journal-item__footer__photo">Фото: {{ workJournal.photoCount }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.work-journal-item {
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 16px 8px;
  border-bottom: var(--border-divide);
  align-items: flex-start;

  &:last-child {
    border-bottom: none;
    padding-bottom: 32px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  &__object {
    font-weight: bold;
    color: var(--text-default);
  }

  &__address {
    color: var(--text-default);
  }

  &__footer {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    color: var(--text-secondary);
    font-size: 12px;
    padding-top: 8px;

    &__photo {
      color: var(--text-link);

      &:hover {
        cursor: pointer;
        opacity: 0.9;
      }
    }
  }
}
</style>