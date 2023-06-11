<template>
  <div class="w-8/12 lg:w-3/12 snap-start flex-shrink-0 relative flex justify-center overflow-hidden rounded-3xl">
    <div class="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
      <v-lazy-image
        :src="item.image.original"
        alt="Season Image"
      />
    </div>
    <div class="absolute top-0 right-0 bottom-0 left-0 bg-black/50 overlay-4" />
    <div class="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-800" />
    <div class="absolute left-3 top-3 z-10">
      <div class="mb-1">
        <span class="text-2xl font-bold text-white">
          Season {{ item.number }}
        </span>
      </div>
    </div>

    <div class="absolute right-3 bottom-3 z-10">
      <router-link :to="{
        name: 'Episode List',
        query: {
          seasonId: item.number
        }
      }">
        <Button title="More Info" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import VLazyImage from 'v-lazy-image';

export default {
  components: {
    VLazyImage
  },
  props: {
    index: {
      type: Number,
      default: 0
    },
    item: {
      type: Object,
      default: () => ({})
    }
  },
  setup () {
    const state = reactive({
      rating: 5
    });

    return {
      state
    }
  }
}
</script>