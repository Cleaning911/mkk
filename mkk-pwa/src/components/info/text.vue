<template>
  <div class="info-text">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "InfoText"
}
</script>


<style scoped lang="scss">
.info-text {
  display: inline-block;
  padding: 12px;
  width: 100%;
  border: var(--border-info);
  //border-style: double;
  //border-width: 4px;
  color: var(--text-info);
  border-radius: 8px;
  font-size: 13px;
  box-sizing: border-box;
}
</style>