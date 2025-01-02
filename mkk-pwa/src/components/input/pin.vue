<template>
  <pin-input
    class="input-pin__wrapper"
    v-model="model"
    :length="length"
    autofocus
    input-class="input-pin__input"
    @completed="handleCompleted"
  />
</template>

<script setup lang="ts">
import {ref} from "vue";

const props = defineProps({
  length: {
    type: Number,
    default: 4
  }
})
const emit = defineEmits(["completed"])
const model = ref("")
const handleCompleted = (value: string) => {
  emit("completed", value)
}
</script>

<script lang="ts">
export default {
  name: "InputPin"
}
</script>

<style lang="scss">
.input-pin {
  &__wrapper {
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;
  }

  &__input {
    width: 20px;
    padding: 4px;
    border: none;
    border-bottom: 2px solid black;
    font-size: 1.5rem;
    color: black;
    margin-right: 4px;
    text-align: center;

    &:focus {
      outline: none;
    }
  }

}
</style>