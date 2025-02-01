<template>
  <div :id="galleryID" class="simple-gallery">
    <a
      v-for="(image, key) in imagesData"
      :key="key"
      :href="image.largeURL"
      :data-pswp-width="image.width"
      :data-pswp-height="image.height"
      target="_blank"
      rel="noreferrer"
      class="simple-gallery__link"
    >
      <img :src="image.thumbnailURL" alt="" />
      <cloud-done-icon v-if="inCloud(image)" class="simple-gallery__cloud" />
    </a>
  </div>
</template>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import CloudDoneIcon from "../icons/cloudDone.vue";
import {SAVE_STATUS_GOT_FROM_SERVER} from "../../stores/consts.ts";

export default {
  name: 'SimpleGallery',
  components: {CloudDoneIcon},
  props: {
    galleryID: String,
    images: Array,
  },
  setup(props) {
    return {
      imagesData: props.images,
    };
  },
  mounted() {
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        gallery: '#' + this.$props.galleryID,
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      this.lightbox.init();
    }
  },
  unmounted() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
  watch: {
    images: {
      immediate: true,
      handler(val) {
        this.imagesData = val
      }
    }
  },
  methods: {
    inCloud(image) {
      return image?.status?.id === SAVE_STATUS_GOT_FROM_SERVER.id
    }
  },
};
</script>

<style scoped lang="scss">
.simple-gallery {
  &__link {
    position: relative;
  }

  &__cloud {
    position: absolute;
    width: 24px;
    height: 24px;
    right: 5px;
    float: right;
    fill: white;
  }

  & > a > img {
    object-fit: cover;
  }
}
</style>