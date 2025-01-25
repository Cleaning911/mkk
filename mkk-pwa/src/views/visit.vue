<script setup lang="ts">

import BackButton from "../components/button/back.vue";
import {computed, PropType, ref, watch} from "vue";
import type {IVisit} from "../models/visit.ts";
import DateService from "../services/date-service.ts";
import {useRouter} from "vue-router";
import {ROUTE_NAME_WORK_JOURNAL} from "../routes.ts";
import type {Nullable} from "../models/types.ts";
import {useVisitStore} from "../stores/visitStore.ts";
import ButtonSave from "../components/button/save.vue";
import SimpleGallery from "../components/gallery/simple.vue";
import InputCheckbox from "../components/input/checkbox.vue";
import ButtonDefault from "../components/button/default.vue";
import InputText from "../components/input/text.vue";
import AddPhotoButton from "../components/button/addPhoto.vue";
import AppendPhotoButton from "../components/button/appendPhoto.vue";
import SimpleCamera from "../components/camera/simple.vue";
const props = defineProps({
})
const localVisit = ref({
  id: 0,
  objectName: '',
  address: '',
  photos: [],
  photoCount: 0,
  dtCome: new Date(),
  dtCreate: new Date()
} as Nullable<IVisit>)
const openTime = new Date()
const router = useRouter()
const { fetchVisit } = useVisitStore()
const finishVisitOnSave = ref(false)
const openCamera = ref(false)
const id = computed(() => {
  const _id = router.currentRoute.value.params["id"].toString()
  return _id === 'new' || !parseInt(_id) ? 0 : (Number)(_id)
})
const isNew = computed(() => {
  return !localVisit.value?.id
})
const title = computed(() => {
  return !isNew.value ? `#${localVisit.value?.id} от ${DateService.formatDate(localVisit.value?.dtCreate)}` : "Новый визит"
})
const isAllowSave = computed(() => {
  return !isVisitFinished.value
})
const arrivalTime = computed(() => {
  return localVisit.value?.dtCome ? DateService.formatTime(localVisit.value?.dtCome) : DateService.formatTime(openTime)
})
const leaveTime = computed(() => {
  return localVisit.value?.dtLeave ? DateService.formatTime(localVisit.value.dtLeave) : ''
})
const isVisitFinished = computed(() => {
  return !!leaveTime.value
})
const saveButtonTitle = computed(() => {
  if (isVisitFinished.value) {
    return 'Визит завершен'
  }
  if (finishVisitOnSave.value) {
    return 'Сохранить и завершить визит'
  }
  if (isNew.value) {
    return 'Я на объекте'
  }
  return "Сохранить"
})
const photos = computed(() => {
  return localVisit.value?.photos?.length ? localVisit.value?.photos : []
})
const isAllowAddPhoto = computed(() => {
  return !isVisitFinished.value
})
const snapshot = async () => {
  console.log('camera', camera.value)
  const blob = await camera.value?.snapshot();

  const url = URL.createObjectURL(blob);
  console.log(url)
}
watch(id, () => {
  if (id.value) {
    fetchVisit(id.value).then((visitData) => {
      localVisit.value = visitData
    })
  }
}, {
  immediate: true
})
const handleBackClick = () => {
  router.push({
    name: ROUTE_NAME_WORK_JOURNAL
  })
}
const handleSaveClick = () => {
  //
}
const handleAddPhotoClick = () => {
  openCamera.value = true
}
const handleGotCameraPhoto = (url: string, blob: Blob) => {
  console.log(url)
  console.log(blob)
  openCamera.value = false
}
const handleCloseCamera = () => {
  openCamera.value = false
}
</script>
<script lang="ts">
export default {
  name: "Visit"
}
</script>

<template>
  <div class="visit">
    <div class="visit__head" :class="{'visit__head--photo': isAllowAddPhoto && photos.length}">
      <back-button @click="handleBackClick" />
      <span>{{ title }}</span>
      <append-photo-button v-if="isAllowAddPhoto && photos.length" class="visit__append-photo" @click="handleAddPhotoClick" />
    </div>
    <div class="visit__scroll">
      <div class="visit__common">
        <label>Объект</label>
        <input-text v-if="isNew" :value="localVisit?.objectName" @change="localVisit.objectName = $event" />
        <span v-else>{{ localVisit?.objectName || '' }}</span>
        <label>Организация</label>
        <input-text v-if="isNew" :value="localVisit?.client?.clientName" :disabled="true" />
        <span v-else>{{ localVisit?.client?.clientName || '-' }}</span>
        <label>Адрес</label>
        <input-text v-if="isNew" :value="localVisit?.address" @change="localVisit.address = $event" />
        <span v-else>{{ localVisit?.address || '-' }}</span>
        <label>Время прибытия</label>
        <span>{{ arrivalTime }}</span>
        <template v-if="leaveTime">
          <label>Время ухода</label>
          <span>{{ leaveTime }}</span>
        </template>
      </div>
      <label class="visit__label"></label>
      <div class="visit__photos" id="visitPhotos">
        <add-photo-button v-if="isAllowAddPhoto && !photos.length" @click="handleAddPhotoClick" />
        <simple-gallery :images="photos" gallery-i-d="visitPhotos" />
      </div>
    </div>
    <div class="visit__save" :class="{'visit__save--margin': isVisitFinished}">
      <input-checkbox v-if="!isVisitFinished" :checked="finishVisitOnSave" class="visit__check" @change="finishVisitOnSave = $event" />
      <button-default :disabled="!isAllowSave" @click="handleSaveClick">{{ saveButtonTitle }}</button-default>
    </div>
    <simple-camera v-if="openCamera" @got-photo="handleGotCameraPhoto" @close="handleCloseCamera" />
  </div>
</template>

<style lang="scss">
.visit {
  display: grid;
  grid-template-rows: 40px 1fr auto;
  overflow: hidden;
  width: 100%;

  &__head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    font-size: 16px;
    font-weight: bold;
    color: var(--text-default);

    &--photo {
      display: grid;
      grid-template-columns: auto 1fr auto;
    }
  }

  &__scroll {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }

  &__common {
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
    padding-bottom: 4px;

    & > label {
      font-size: 11px;
      color: var(--text-secondary);
      margin-top: 6px;
    }
  }

  &__label {
    text-align: left;
    font-size: 12px;
    color: var(--text-secondary);
  }

  &__check {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  &__save {
    &--margin {
      margin-top: 12px;
    }
  }

  &__append-photo {
  }
}
#visitPhotos {
  display: flex;
  flex-flow: wrap;
  column-gap: 8px;
  row-gap: 2px;

  & > a > img {
    width: 150px;
    height: 150px;
  }
}
</style>