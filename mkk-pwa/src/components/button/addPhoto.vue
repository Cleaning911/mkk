<script setup lang="ts">
import AddPhotoIcon from "../icons/addPhoto.vue";
const emit = defineEmits(["click"])
const handleClick = (e: any) => {
  emit("click", e)
}
</script>
<script lang="ts">
export default {
  name: "AddPhotoButton"
}
</script>

<template>
  <div class="add-photo-button" @click="handleClick">
    <add-photo-icon />
    <span>Добавить</span>
    <span>фото</span>
  </div>
</template>

<style scoped lang="scss">
.add-photo-button {
  width: 150px;
  height: 150px;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: var(--border-button-photo);
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }

  & > svg {
    fill: var(--text-info);
    margin-bottom: 6px;
  }

  & > span {
    color: var(--text-info);
    font-size: 14px;
  }
}
</style>