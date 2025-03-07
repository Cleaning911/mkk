<script setup lang="ts">
import {useVisitStore} from "../../stores/visitStore.ts";
import {computed, onMounted, PropType, ref, watch} from "vue";
import {useUserStore} from "../../stores/userStore.ts";
import type {IObject} from "../../models/object.ts";
import ClientObjectService from "../../services/client-object-service.ts";

const props = defineProps({
  isOnlyMy: {
    type: Boolean,
    default: true
  },
  value: {
    type: Object as PropType<IObject>
  }
})
const emit = defineEmits(['select'])

const { objectList } = useVisitStore()
const { fetchObjectList } = useVisitStore()
const { user } = useUserStore()
const selectedObject = ref(null as IObject)

const propValue = computed(() => {
  return props.value
})

onMounted(() => {
  fetchObjectList(user, 0, true, "")
})
watch(propValue, (newVal) => {
  selectedObject.value = newVal
}, {
  immediate: true
})
watch(selectedObject, (newVal) => {
  emit('select', ClientObjectService.apiObjectToIObject(newVal))
})
</script>
<script lang="ts">
export default {
  name: "InputClientObject"
}
</script>

<template>
  <div class="input-client-object">
    <select v-model="selectedObject" class="input-client-object__select">
      <option v-for="item in objectList" :key="`object-${item.id}`" :value="item">
        {{ item.ObjectName }}
      </option>
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