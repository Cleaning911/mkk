<template>
  <div class="input-phone">
    <select disabled>
      <option>+7</option>
    </select>
    <input v-model="phone" type="number" :maxlength="10" placeholder="Введите 10 цифр номера телефона" />
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, watch} from "vue";
const props = defineProps({
  value: {
    type: [String, Number],
    default: ""
  }
})
const emit = defineEmits(["change"])
const phone = ref("")

const propValue = computed(() => {
  return props.value
})

watch(phone, (val) => {
  emit("change", val?.toString() || "")
})
watch(propValue, () => {
  phone.value = props.value
}, {
  immediate: true
})
</script>

<script lang="ts">
export default {
  name: "InputPhone"
}
</script>

<style scoped lang="scss">
.input-phone {
  display: grid;
  grid-template-columns: 40px 1fr;
  box-sizing: border-box;
  width: 100%;
  font-size: 16px;
  padding: 8px;
  border: var(--border-input);

  & > select, & > input {
    border: none!important;
    font-size: 16px;
    color: var(--text-input);

    &:focus {
      outline: none!important;
    }
  }

  & > input {
    min-width: 200px;
  }
}
</style>