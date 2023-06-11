<template>
  <section class="overflow-hidden rounded-2xl relative mb-8">
    <swiper-container
      :slides-per-view="1"
      :space-between="spaceBetween"
      :centered-slides="true"
      :navigation="false"
      :pagination="{
        clickable: true,
        el: '.swiper-pagination'
      }"
      :breakpoints="{
        768: {
          slidesPerView: 1,
        },
      }"
      @progress="onProgress"
      @slidechange="onSlideChange"
    >
      <swiper-slide
        v-for="(item, idx) in episodes"
        :key="idx"
      >
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <v-lazy-image
            :src="item.image.original"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="Slider Image"
          />
          <div class="absolute top-0 right-0 bottom-0 left-0 bg-black/60 overlay-4" />
        </div>
        <div class="absolute left-8 top-2 lg:top-12">
          <div class="text-lg lg:text-5xl font-bold text-white mb-0 lg:mb-3">
            {{ item.name }}
          </div>
          <Rating :point="item.rating.average"/>
        </div>

        <div class="absolute bottom-6 right-5 lg:right-16">
          <router-link :to="{
            name: 'Episode Detail',
            params: {
              episodeId: item.id
            }
          }">
            <Button title="Watch Now" />
          </router-link>
        </div>
      </swiper-slide>
    </swiper-container>

    <div class="swiper-pagination"></div>

    <button
      type="button"
      class="flex absolute top-0 left-4 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
      @click="prev"
    >
      <span class="inline-flex justify-center items-center w-8 h-8 lg:w-12 lg:h-12 rounded-lg lg:rounded-2xl lg:w-14 lg:h-14 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
        <icon iconName="icon-arrow-left" iconClass="fill-white" />
      </span>
    </button>
    <button
      type="button"
      class="flex absolute top-0 right-4 z-30 justify-center items-center h-full cursor-pointer group focus:outline-none"
      @click="next"
    >
      <span class="inline-flex justify-center items-center w-8 h-8 lg:w-12 lg:h-12 rounded-lg lg:rounded-2xl lg:w-14 lg:h-14 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
        <icon iconName="icon-arrow-right" iconClass="fill-white" />
      </span>
    </button>
  </section>
</template>

<script>
import { reactive } from 'vue';
import { register } from 'swiper/element/bundle';

import NoImage from '@assets/no-image.png';
import VLazyImage from 'v-lazy-image';

register();

export default {
  components: {
    VLazyImage
  },
  props: {
    episodes: {
      type: Array,
      default: () => ([])
    }
  },
  setup () {
    const state = reactive({
      rating: 5
    });

    const spaceBetween = 10;
    const onProgress = (e) => {
      const [swiper, progress] = e.detail;
      // console.log(progress)
    };

    const onSlideChange = (e) => {
      console.log('slide changed')
    };

    const next = () => {
      const swiperEl = document.querySelector('swiper-container');
      swiperEl.swiper.slideNext();
    };
    
    const prev = () => {
      const swiperEl = document.querySelector('swiper-container');
      swiperEl.swiper.slidePrev();
    };

    return {
      state,
      spaceBetween,
      onProgress,
      onSlideChange,
      next,
      prev,
      NoImage
    };
  }
}
</script>

<style lang="scss" scoped>
  .swiper-pagination {
    background-color: rgba(255, 255, 255, 0.2);
    width: auto;
    padding: 5px 10px;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    bottom: 0;
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>