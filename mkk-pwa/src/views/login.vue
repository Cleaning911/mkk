<template>
  <div class="login">
    <logo-icon />
    <h4>Вход для МКК</h4>
    <div class="login__content">
      <input-phone v-show="isInputPhoneVisible" :value="phone" @change="handlePhoneChange" />
      <input-pin v-model="pin" v-if="isInputPinVisible" @completed="handlePinCompleted" />
      <button-default v-if="isInputPhoneVisible" :disabled="!!errorMessage" @click="handleClickNext">Далее</button-default>
      <error-text v-if="errorMessage">{{ errorMessage }}</error-text>
      <info-text v-if="isInputPinVisible && !isAllowResendPIN">
        На номер +7{{phone}} отправлено SMS с кодом. Повторная отправка возможна через
        <timer-countdown :initial-seconds-left="pinResendSecondsLeft" @stopped="handlePinTimedOut" />
      </info-text>
      <input-link v-if="isInputPinVisible && isAllowResendPIN" @click="handleResendPinClick">Отправить код повторно</input-link>
      <input-link v-if="!isInputPhoneVisible" @click="handleUseOtherPhoneClick">Использовать другой номер</input-link>
    </div>
    <loading-blur v-if="loading" />
  </div>
</template>


<script setup lang="ts">
import {PinInput} from "v-pin-input";

const STEP_INPUT_PHONE = 1
const STEP_INPUT_PIN = 2
const PIN_RESEND_TIMEOUT = 300

import WebStorage from "../stores/webStorage.ts";
import InputPhone from "../components/input/phone.vue";
import ButtonDefault from "../components/button/default.vue";
import LogoIcon from "../components/icons/logo.vue";
import ErrorText from "../components/error/text.vue";
import {computed, onMounted, ref} from "vue";
import InputPin from "../components/input/pin.vue";
import InputLink from "../components/input/link.vue";
import SmsService from "../api/sms-service.ts";
import LoadingBlur from "../components/loading/blur.vue";
import "./login.vue";
import InfoText from "../components/info/text.vue";
import TimerCountdown from "../components/timer/countdown.vue";
import DateService from "../services/date-service.ts";
import AuthService from "../api/auth-service.ts";
import {useRouter} from "vue-router";
import {ROUTE_NAME_WORK_JOURNAL} from "../routes.ts";
import {useUserStore} from "../stores/userStore.ts";
import type {IUser} from "../models/user.ts";
const { checkPIN } = useUserStore()

const phone = ref("")
const pin = ref("")
const errorMessage = ref("")
const step = ref(STEP_INPUT_PHONE)
const loading = ref(false)
const isAllowResendPIN = ref(true)
const pinResendSecondsLeft = ref(PIN_RESEND_TIMEOUT)
const router = useRouter()

const isInputPhoneVisible = computed(() => {
  return step.value === STEP_INPUT_PHONE
})
const isInputPinVisible = computed(() => {
  return step.value === STEP_INPUT_PIN
})

const handlePhoneChange = (value: string) => {
  phone.value = value
  errorMessage.value = ""
  if (value !== WebStorage.getLastPhone()) {
    WebStorage.setLastPINSendDate("")
  }
}
const handlePinCompleted = (value: string) => {
  errorMessage.value = ""
  loading.value = true
    checkPIN(phone.value, pin.value).then((user: IUser) => {
      WebStorage.setUser(user)
    router.push({
      name: ROUTE_NAME_WORK_JOURNAL
    })
  }).catch(() => {
    errorMessage.value = "Введен неверный код"
    pin.value = ""
  }).finally(() => {
    loading.value = false
  })
}
const handlePinTimedOut = () => {
  pinResendSecondsLeft.value = 0
  isAllowResendPIN.value = true
}
const handleUseOtherPhoneClick = () => {
  WebStorage.setLastPhone("")
  WebStorage.setLastPINSendDate("")
  step.value = STEP_INPUT_PHONE
  phone.value = ""
}
const handleClickNext = () => {
  if (validate()) {
    storeVariables()
    sendPIN()
  }
}
const validate = () => {
  if (!phone.value) {
    errorMessage.value = "Введите номер телефона"
  } else {
    if (phone.value.length !== 10) {
      errorMessage.value = "Номер телефона должен содержать 10 цифр. Допускаются только Российские номера."
    }
  }
  return !errorMessage.value
}
const storeVariables = () => {
  if (step.value === STEP_INPUT_PHONE) {
    WebStorage.setLastPhone(phone.value)
  }
  if (step.value === STEP_INPUT_PIN) {
    WebStorage.setLastPINSendDate(new Date())
  }
}
const handleResendPinClick = () => {
  sendPIN()
}
const sendPIN = () => {
  pin.value = ""
  const lastPINSendDate = WebStorage.getLastPINSendDate()
  let renewPINDate = true
  if (!lastPINSendDate) {
    pinResendSecondsLeft.value = PIN_RESEND_TIMEOUT
  }
  const secondsLeft = PIN_RESEND_TIMEOUT - DateService.secondsBetween(new Date(), lastPINSendDate)
  if (secondsLeft <= 0) {
    pinResendSecondsLeft.value = PIN_RESEND_TIMEOUT
  } else {
    pinResendSecondsLeft.value = secondsLeft
    renewPINDate = false
  }
  if (!renewPINDate) {
    isAllowResendPIN.value = false
    step.value = STEP_INPUT_PIN
    return
  }
  loading.value = true
  AuthService.sendPIN(phone.value).then(() => {
    step.value = STEP_INPUT_PIN
    if (renewPINDate) {
      storeVariables()
    }
    isAllowResendPIN.value = false
  }).finally(() => {
    loading.value = false
  })
}

onMounted(() => {
  phone.value = WebStorage.getLastPhone()
})

</script>

<script lang="ts">
export default {
  name: "LoginPage"
}
</script>


<style scoped lang="scss">
.login {
  display: grid;
  grid-template-rows: 70px auto 1fr;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 480px;
    margin: 0px auto;
  }
}
</style>