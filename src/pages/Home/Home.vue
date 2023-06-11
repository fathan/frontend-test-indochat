<template>
  <div class="container mx-auto py-10">
    <NavigationSearch />
    <SliderImage />

    <section class="inline-block mb-10">
      <div class="py-4 mb-5">
        <h1 class="text-4xl text-white font-bold">
          List Seasons
        </h1>
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        <SeasonListItem
          v-for="i in 3"
          :key="i"
          :index="i"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { reactive } from 'vue';

import NavigationSearch from '@components/Fragment/Home/NavigationSearch';
import SliderImage from '@components/Fragment/Home/SliderImage';
import SeasonListItem from '@components/Fragment/Home/SeasonListItem';

export default {
  components: {
    NavigationSearch,
    SliderImage,
    SeasonListItem
  },
  setup () {
    const state = reactive({
      rating: 5
    });

    return {
      state
    };
  }
}
</script>
