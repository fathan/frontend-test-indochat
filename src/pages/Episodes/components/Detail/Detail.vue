<template>
  <div
    class="flex h-screen w-full bg-black bg-cover bg-no-repeat"
    :style="`background-image:url(${ state.episode.image })`"
  >
    <div class="px-5 lg:px-20 pt-10">
      <BackButton :routePath="{
        name: 'Episode List',
        query: {
          seasonId: seasonId
        }
      }" />

      <section class="mt-40">
        <div>
          <div class="mb-3">
            <h2 class="text-white text-2xl lg:text-6xl">
              {{ state.episode.name }}
            </h2>
          </div>

          <Rating
            :withShowPoint="true"
            :point="state.episode.ratingAverage"
          />

          <div class="mt-20">
            <p
              v-html="state.episode.summary"
              class="text-white text-base lg:text-xl"
            />
          </div>
        </div>
      </section>
    </div>    
  </div>
</template>

<script>
import EpisodeServices from '@services/api/episodes';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useAppStore } from '@stores/app';

import NoImage from '@assets/no-image.png';
import { storeToRefs } from 'pinia';

export default {
  setup () {
    const route = useRoute();
    const appStore = useAppStore();

    // ///////////////////////

    const state = reactive({
      episode: {
        id: '',
        image: '',
        name: '',
        ratingAverage: 0,
        summary: '',
        season: ''
      }
    });

    const { seasonId } = storeToRefs(appStore);

    // //////////////////////

    onMounted(() => {
      initialize();
    });

    const initialize = () => {
      xhrGetDetailEpisode();
    };

    const xhrGetDetailEpisode = async () => {
      try {
        const id = getEpisodeId();
        const response = await EpisodeServices.getDetailEpisode(id);

        Object.assign(state.episode, {
          id: response.id,
          image: response.image !== null ? response.image.original : NoImage,
          name: response.name,
          ratingAverage: response.rating.average,
          summary: response.summary,
          season: response.season
        });
      }
      catch (error) {
        window.alert(error.message);
      }
    };

    const getEpisodeId = () => {
      return route.params.episodeId;
    };

    return {
      state,
      seasonId
    }
  }
};
</script>