<script setup lang="ts">
import ButtonDefault from "./default.vue";

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(["click"])
const handleClick = () => {
  emit("click")
}
</script>
<script lang="ts">
export default {
  name: "ButtonSave"
}
</script>

<template>
  <button-default :disabled="disabled" class="button-save" @click="handleClick">Сохранить</button-default>
</template>

<style scoped lang="scss">
.button-save {
}
</style>