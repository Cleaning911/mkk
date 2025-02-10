<script setup lang="ts">
import ButtonMenu from "../button/menu.vue";
import { Popper } from "vue-use-popperjs"

const emit = defineEmits(['new-visit'])
const modifiers = [
  {
    name: "offset",
    options: {
      offset: [0, 8],
    },
  },
]
const handleNewVisitClick = () => {
  emit('new-visit')
}
</script>
<script lang="ts">
export default {
  name: "MainMenu"
}
</script>
<template>
  <div class="main-menu">
    <Popper
      reference-is="span"
      popper-is="span"
      :teleport-props="{ to: 'body' }"
      :transition-props="{ name: 'fade' }"
      :modifiers="modifiers"
    >
      <template #reference>
        <button-menu />
      </template>
      <ul class="main-menu__popover">
        <li @click="handleNewVisitClick">Новый визит</li>
        <li><router-link to="logout">Выход</router-link></li>
      </ul>
    </Popper>

  </div>
</template>

<style scoped lang="scss">
.main-menu {
  &__popover {
    background-color: var(--bk-menu);
    border: var(--border-input);
    padding: 20px 30px 12px 20px;
    margin: 0 0 0 20px;
    min-width: 200px;
    border-bottom-right-radius: 40px;

    & li {
      color: var(--text-menu);
      list-style: none;
      margin-bottom: 16px;
      border-bottom: 1px dotted var(--text-menu);
      cursor: pointer;

      & > a {
        color: var(--text-menu);
      }
    }
  }
}
.vue-use-popperjs-none {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#tooltip {
  display: inline-block;
  background: #643045;
  color: #ffffff;
  font-weight: bold;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 4px;
}
</style>