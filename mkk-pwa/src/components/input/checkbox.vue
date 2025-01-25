<script setup lang="ts">
import uniqid from 'uniqid';
import {computed, ref, watch} from "vue";

const id = uniqid()
const props = defineProps({
  checked: {
    type: Boolean,
    default: false
  }
})
const propChecked = computed(() => {
  return props.checked
})
const emit = defineEmits(['change'])
const localValue = ref(false)
const handleChange = (e: any) => {
  localValue.value = e.target.checked
  emit('change', localValue.value)
}
watch(propChecked, (val) => {
  localValue.value = val
}, {
  immediate: true
})
</script>

<script lang="ts">
export default {
  name: "InputCheckbox"
}
</script>

<template>
  <div class="input-checkbox">
    <input v-model="localValue" type="checkbox" :id="`checkbox-${id}`" @change="handleChange"/>
    <label :for="`checkbox-${id}`">Завершить визит</label>
  </div>
</template>

<style scoped lang="scss">
.input-checkbox {
  display: flex;
  font-size: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  gap: 8px;
  align-items: center;
}
</style>