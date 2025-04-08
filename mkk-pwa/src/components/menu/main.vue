<script setup lang="ts">
import ButtonMenu from "../button/menu.vue";
import { Popper } from "vue-use-popperjs"
import CloseIcon from "../icons/close.vue";
import MainMenuItem from "./item.vue";
import PlusIcon from "../icons/plus.vue";
import LogoutIcon from "../icons/logout.vue";
import {ref, watch} from "vue";

const emit = defineEmits(['new-visit'])
const modifiers = [
  {
    name: "offset",
    options: {
      offset: [0, 8],
    },
  },
]
const showPopper = ref(true)
const handleNewVisitClick = () => {
  emit('new-visit')
}
const handleCloseMenu = () => {
  showPopper.value = false
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
      popper-is="div"
      :teleport-props="{ to: 'body' }"
      :transition-props="{ name: 'fade' }"
      :popper-props="{ id: 'mainMenu' }"
      :modifiers="modifiers"
    >
      <template #reference>
        <button-menu @click="showPopper = true"/>
      </template>
      <div v-if="showPopper" class="main-menu__popover">
        <div class="main-menu__popover__head">
          <close-icon @click="handleCloseMenu"/>
          <h4>Выберите действие</h4>
        </div>
        <input placeholder="Поиск" type="search" />
        <main-menu-item @click="handleNewVisitClick">
          <div class="main-menu__popover__item--icon">
            <plus-icon />
            <span>Новый визит</span>
          </div>
        </main-menu-item>
        <main-menu-item @click="handleNewVisitClick">
          <div class="main-menu__popover__item--icon">
            <logout-icon />
            <router-link to="logout">Выход</router-link>
          </div>
        </main-menu-item>
      </div>
    </Popper>
  </div>
</template>

<style scoped lang="scss">
.main-menu {

  &__popover {
    background-color: var(--bk-menu);
    // border: var(--border-menu);
    padding: 20px 30px 12px 20px;
    // margin: 0 0 0 20px;
    min-width: 200px;
    border-bottom-right-radius: 40px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    // box-shadow: inset -10px -10px 10px var(--text-menu);

    &__head {
      display: grid;
      grid-template-columns: 30px 1fr;
      grid-gap: 12px;
      align-items: center;
      width: 100%;
      padding-top: 8px;
      padding-bottom: 12px;

      & svg {
        fill: var(--text-menu);
        width: 30px;
        height: 30px;
      }

      & h4 {
        text-transform: uppercase;
        margin: 0;
      }
    }

    &__item {
      &--icon {
        display: grid;
        grid-template-columns: 30px 1fr;
        grid-gap: 12px;
        align-items: center;
        cursor: pointer;

        & > svg {
          width: 30px;
          height: 30px;
        }
      }
    }

    &__options {
      margin: 0;
      margin-block-start: 0;
      padding: 0;
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