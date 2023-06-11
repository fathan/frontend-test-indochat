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
        v-for="i in 5"
        :key="i"
      >
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <img
            src="https://static.tvmaze.com/uploads/images/original_untouched/1/3177.jpg"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt=""
          >
        </div>
        <div class="absolute left-8 top-2 lg:top-12">
          <div class="text-lg lg:text-5xl font-bold text-white mb-0 lg:mb-3">
            Slide #{{ i }}
          </div>
          <Rating />
        </div>

        <div class="absolute bottom-6 right-6">
          <router-link :to="{
            name: 'Episode Detail',
            params: {
              episodeId: 1
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
      class="flex absolute top-0 right-4 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
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

register();

export default {
  setup () {
    const state = reactive({
      rating: 5
    });

    const spaceBetween = 10;
    const onProgress = (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress)
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