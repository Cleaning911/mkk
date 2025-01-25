<template>
  <layout-fixed class="simple-camera">
    <camera
      :resolution="{ width, height }"
      ref="camera"
      :autoplay="autoplay"
    >
      <button v-if="!autoplay" class="simple-camera__shot" @click="cameraOff" >I'm on top of the video</button>
      <append-photo-button size="large" @click="takePicture" />
      <close-button @click="handleClose" />
    </camera>
  </layout-fixed>
</template>
<script>
import { defineComponent, ref } from "vue";
import Camera from "simple-vue-camera";
import LayoutFixed from "../layout/fixed.vue";
import AppendPhotoButton from "../button/appendPhoto.vue";
import CloseButton from "../button/close.vue";

export default defineComponent({
  name: "SimpleCamera",
  props: {
    width: {
      type: Number,
      default: 1024
    },
    height: {
      type: Number,
      default: 768
    },
    autoplay: {
      type: Boolean,
      default: true
    }
  },
  emits: ['got-photo', 'close'],
  components: {
    CloseButton,
    AppendPhotoButton,
    LayoutFixed,
    Camera,
  },
  setup() {
    const camera = ref(null)
    const cameraIsOn = ref(false)

    const cameraOff = () => {
      cameraIsOn.value ? camera.value.stop() : camera.value.start()
      cameraIsOn.value = !cameraIsOn.value
    };

    // const send_file = (blob_file) => {
    //   let formData = new FormData();
    //   let fileName = `${blob_file.name}.${blob_file.extension}`;
    //   let file = new File([blob_file.blob], fileName);
    //   formData.append('file', file, fileName);
    //   formData.append('chat', roomId);
    //   formData.append('message', messageId);
    // }

    return {
      camera,
      cameraOff,
      cameraIsOn
    }
  },
  methods: {
    async takePicture() {
      const imageBlob = await this.camera.snapshot(
        { width: this.width, height: this.height },
        "image/png",
        0.5
      )
      const url = URL.createObjectURL(imageBlob);
      this.$emit('got-photo', url, imageBlob)
    },
    handleClose() {
      this.$emit('close')
    }
  }
})
</script>
<style lang="scss">
.simple-camera {
  & .append-photo-button {
    position: relative;
    margin: auto;
    top: calc(100% - 100px);
  }

  & .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
  }
}
</style>