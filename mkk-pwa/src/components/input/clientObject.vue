<script setup lang="ts">
import {useVisitStore} from "../../stores/visitStore.ts";
import {onMounted} from "vue";
import {useUserStore} from "../../stores/userStore.ts";

const props = defineProps({
  isOnlyMy: {
    type: Boolean,
    default: true
  }
})
const emit = defineEmits(['select'])

const { objectList } = useVisitStore()
const { fetchObjectList } = useVisitStore()
const { user } = useUserStore()

onMounted(() => {
  fetchObjectList(user, 0, true, "")
})
</script>
<script lang="ts">
export default {
  name: "InputClientObject"
}
</script>

<template>
  <div class="input-client-object">
    <select class="input-client-object__select">

    </select>
  </div>
</template>

<style scoped lang="scss">
.input-client-object {
  display: flex;
  width: 100%;

  &__select {
    display: flex;
    width: 100%;
    padding: 8px 12px;
    border: var(--border-input);
    box-sizing: border-box;
    font-size: 16px;
    border-radius: 4px;
  }
}
</style>