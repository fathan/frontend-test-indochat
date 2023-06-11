<template>
  <div class="px-5 lg:px-20 pt-10">
    <BackButton :routePath="{ name: 'Home' }" />

    <section class="mb-10 lg:mb-40">
      <h1 class="text-xl lg:text-4xl uppercase text-white font-bold">
        season {{ getSeasonId() }} - list episodes
      </h1>
    </section>
  </div>

  <div class="pl-5 lg:pl-20 overflow-hidden">
    <section class="flex gap-4 lg:gap-20 snap-x overflow-scroll">
      <EpisodeListItem
        v-for="(item, idx) in state.episodes"
        :key="idx"
        :item="item"
        :seasonId="getSeasonId()"
      />
    </section>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import EpisodeServices from '@services/api/episodes';

import EpisodeListItem from '@components/Fragment/Episodes/EpisodeListItem';

export default {
  components: {
    EpisodeListItem
  },
  setup () {
    const route = useRoute();
    const router = useRouter()

    // ///////////////////////

    const state = reactive({
      episodes: []
    });

    onMounted(() => {
      initialize();
    });

    const initialize = () => {
      xhrGetListEpisodeBySeasonId();

      onCheckQueryParam();
    };

    const xhrGetListEpisodeBySeasonId = async () => {
      try {
        const id = getSeasonId();
        const response = await EpisodeServices.getListEpisodeBySeasonId(id);
        
        state.episodes = response;
      }
      catch (error) {
        window.alert(error.message);
      }
    };

    const getSeasonId = () => {
      return route.query.seasonId;
    };

    const onCheckQueryParam = () => {
      if (typeof route.query.seasonId === 'undefined') {
        router.push({
          name: 'Home'
        });
      }
    };

    return {
      state,
      getSeasonId
    }
  }
};
</script>
