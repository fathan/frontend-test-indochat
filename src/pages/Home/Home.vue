<template>
  <div class="container mx-auto py-10">
    <NavigationSearch />
    <SliderImage :episodes="computeEpisodes" />

    <section class="inline-block mb-10">
      <div class="py-4 mb-5">
        <h1 class="text-4xl text-white font-bold">
          List Seasons
        </h1>
      </div>

      <div class="flex snap-x overflow-scroll gap-8">
        <SeasonListItem
          v-for="(item, idx) in state.seasons"
          :key="idx"
          :index="idx"
          :item="item"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { reactive, onMounted, computed } from 'vue';

import EpisodeServices from '@services/api/episodes';
import SeasonServices from '@services/api/seasons';

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
      rating: 5,
      episodes: [],
      seasons: []
    });

    onMounted(() => {
      initialize();
      getRandomNumber();
    });

    const initialize = async () => {
      await xhrGetListEpisode();
      await xhrGetListSeason();
    };

    const xhrGetListEpisode = async () => {
      try {
        const response = await EpisodeServices.getListEpisode();
        state.episodes = response;
      }
      catch (error) {
        window.alert(error.message);
      }
    };

    const xhrGetListSeason = async () => {
      try {
        const response = await SeasonServices.getListSeason();
        state.seasons = response;
      }
      catch (error) {
        window.alert(error.message);
      }
    };

    // ////////////////////////////////

    const getRandomNumber = () => {
      const n = 5;
      const arr = [];

      for (let i = 1; i < 73; i++) {
        arr.push(i);
      }

      const shuffled = arr.sort(() => { 
        return 0.5 - Math.random();
      });

      const result = shuffled.slice(0, n);

      return result;
    };

    const computeEpisodes = computed(() => {
      const randomIds = getRandomNumber();
      const finalData = [];

      randomIds.map((item, idx) => {
        state.episodes.map((episode, jdx) => {
          if (jdx === item) {
            finalData.push(episode);
          }
        });
      });

      return finalData;
    });

    return {
      state,
      computeEpisodes
    };
  }
}
</script>
