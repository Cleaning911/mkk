<script setup lang="ts">
import AddPhotoIcon from "../icons/addPhoto.vue";

const props = defineProps({
  size: {
    type: String,
    default: "default",
    validator(val: string) {
      return ["default", "large"].includes(val)
    }
  }
})
const emit = defineEmits(["click"])
const handleClick = (e: any) => {
  emit("click", e)
}
</script>
<script lang="ts">
export default {
  name: "AppendPhotoButton"
}
</script>

<template>
  <div class="append-photo-button" :class="`append-photo-button--${size}`" @click="handleClick">
    <add-photo-icon />
  </div>
</template>

<style scoped lang="scss">
.append-photo-button {
  width: 40px;
  height: 40px;
  padding: 8px;
  border-radius: 25px;
  background-color: var(--bk-button-secondary);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid white;

  &:hover {
    cursor: pointer;
  }

  & > svg {
    fill: white;
  }

  &--large {
    width: 64px;
    height: 64px;
    padding: 12px;
    border-radius: 40px;
  }
}
</style>