<script setup lang="ts">
import {computed, ref, watch} from "vue";

const props = defineProps({
  value: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['change'])
const localValue = ref(props.value || '')
const propsValue = computed(() => {
  return props.value
})
const handleChange = () => {
  emit('change', localValue.value)
}
watch(propsValue, (val) => {
  localValue.value = val
})
</script>
<script lang="ts">
export default {
  name: "InputText"
}
</script>

<template>
  <input class="input-text" type="text" v-model="localValue" :disabled="disabled" />
</template>

<style scoped lang="scss">
.input-text {
  width: 100%;
  padding: 8px 12px;
  border: var(--border-input);
  box-sizing: border-box;
  font-size: 16px;
  border-radius: 4px;

  &:focus {
    outline: none;
    border: var(--border-input--focus);
  }
}
</style>