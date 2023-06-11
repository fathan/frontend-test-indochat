<template>
  <div class="px-10 lg:px-20 pt-10">
    <BackButton routeName="Home" />

    <section class="mb-10 lg:mb-40">
      <h1 class="text-xl lg:text-4xl uppercase text-white font-bold">
        season 1 - list episodes
      </h1>
    </section>
  </div>

  <div class="pl-10 lg:pl-20 overflow-hidden">
    <section class="flex gap-20 snap-x overflow-scroll">
      <EpisodeListItem
        v-for="i in 10"
        :key="i"
      />
    </section>
  </div>
</template>

<script>
import EpisodeListItem from '@components/Fragment/Episodes/EpisodeListItem';

export default {
  components: {
    EpisodeListItem
  }
};
</script>
