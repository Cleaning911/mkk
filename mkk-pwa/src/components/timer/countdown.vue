<script setup lang="ts">
import {computed, ref, watch} from "vue";
import DateService from "../../services/date-service.ts";

const props = defineProps({
  initialSecondsLeft: {
    type: Number,
    default: 0
  }
})
const emit = defineEmits(["seconds-left-change", "stopped"])
const secondsLeft = ref(0)
const timerHandle = ref(null as any)
const propInitialSecondsLeft = computed(() => {
  return props.initialSecondsLeft
})
const useHours = computed(() => {
  return propInitialSecondsLeft.value / 3600 >= 1
})
const hours = computed(() => {
  return Math.floor(secondsLeft.value / 3600)
})
const hoursStr = computed(() => {
  return DateService.getTimePartStr(hours.value)
})
const minutes = computed(() => {
  return Math.floor((secondsLeft.value - hours.value * 3600) / 60)
})
const minutesStr = computed(() => {
  return DateService.getTimePartStr(minutes.value)
})
const seconds = computed(() => {
  return Math.floor(secondsLeft.value - hours.value * 3600 - minutes.value * 60)
})
const secondsStr = computed(() => {
  return DateService.getTimePartStr(seconds.value)
})

const startTimer = () => {
  secondsLeft.value = propInitialSecondsLeft.value
  timerHandle.value = setInterval(() => {
    if (secondsLeft.value > 0) {
      secondsLeft.value--
      emit("seconds-left-change", secondsLeft.value)
    } else {
      clearInterval(timerHandle.value)
      timerHandle.value = null
      emit("stopped")
    }
  }, 1000)
}

watch(propInitialSecondsLeft, (val) => {
  if (val > 0) {
    startTimer()
  }
}, {
  immediate: true
})
</script>
<script lang="ts">
export default {
  name: "TimerCountdown"
}
</script>

<template>
  <span class="time-countdown">
    <span v-if="useHours">{{ hoursStr }}:</span><span>{{minutesStr}}:</span><span>{{secondsStr}}</span>
  </span>
</template>

<style scoped lang="scss">
.time-countdown {
  color: var(--text-timer);
  font-size: 13px;
}
</style>