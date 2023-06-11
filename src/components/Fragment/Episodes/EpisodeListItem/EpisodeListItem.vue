<template>
  <div class="w-9/12 lg:w-3/12 snap-start flex-shrink-0">
    <router-link
      :to="{
        name: 'Episode Detail',
        params: {
          seasonId: seasonId,
          episodeId: item.id
        }
      }"
      class="relative flex justify-center overflow-hidden rounded-xl mb-4"
    >
      <img
        v-if="item.image !== null"
        :src="item.image.original"
        class="h-[25rem] lg:h-[32rem] w-full object-cover"
        alt="Image"
      />
      <img
        v-else
        src="~@assets/no-image.png"
        class="h-[25rem] lg:h-[32rem] w-full object-cover"
        alt="Image"
      />
      <div class="absolute right-0 top-0 bg-[#F8B319] rounded-bl-lg rounded-tr-lg px-5 py-1">
        <span class="text-xl font-bold">
          {{ item.rating.average }}
        </span>
      </div>
    </router-link>

    <div>
      <div class="mb-3">
        <router-link
          :to="{
            name: 'Episode Detail',
            params: {
              seasonId: seasonId,
              episodeId: item.id
            }
          }"
        >
          <h2 class="text-white text-xl">
            {{ item.name }}
          </h2>
        </router-link>
      </div>
      <Rating
        :withShowPoint="true"
        :point="item.rating.average"
      />
      <div>
        <h2 class="text-white text-xl">
          Episode {{ item.number }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    },
    seasonId: {
      type: Number,
      default: 1
    }
  }
};
</script>
