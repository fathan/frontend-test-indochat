<template>
  <div class="w-8/12 lg:w-3/12 snap-start flex-shrink-0">
    <router-link
      :to="{
        name: 'Episode Detail',
        params: {
          episodeId: 1
        }
      }"
      class="relative flex justify-center overflow-hidden rounded-xl mb-4"
    >
      <img
        src="https://static.tvmaze.com/uploads/images/original_untouched/1/2678.jpg"
        class="h-96 w-full object-cover"
        alt="Image"
      />
      <div class="absolute right-0 top-0 bg-[#F8B319] rounded-bl-lg rounded-tr-lg px-5 py-1">
        <span class="text-xl font-bold">
          8.2
        </span>
      </div>
    </router-link>

    <div>
      <div class="mb-3">
        <router-link
          :to="{
            name: 'Episode Detail',
            params: {
              episodeId: 1
            }
          }"
        >
          <h2 class="text-white text-xl">
            Lorem ipsum dolor sit amet
          </h2>
        </router-link>
      </div>
      <Rating
        :withShowPoint="true"
        :point="8.2"
      />
      <div>
        <h2 class="text-white text-xl">
          Episode 01
        </h2>
      </div>
    </div>
  </div>
</template>