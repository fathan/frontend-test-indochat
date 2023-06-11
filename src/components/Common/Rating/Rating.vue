<template>
  <div :class="{
    'flex flex-row mb-3': withShowPoint
  }">
    <vue3-star-ratings
      v-model="state.rating"
      starSize="24"
      starColor="#F8B319"
      inactiveColor="#333333"
      controlBg="#2e5090"
      controlColor="#ffffff" 
      controlSize="24" 
      :numberOfStars="5"
      :step="0.2"
      :showControl="false" 
      :disableClick="true" 
    />

    <div
      v-if="withShowPoint"
      class="ml-3"
    >
      <span class="text-white text-2xl">
        {{ point }}
      </span>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  props: {
    dataRating: {
      type: Number,
      default: 4
    },
    withShowPoint: {
      type: Boolean,
      default: false
    },
    point: {
      type: Number,
      default: false
    }
  },
  setup () {
    const state = reactive({
      rating: 4
    });

    return {
      state
    }
  }
};
</script>
