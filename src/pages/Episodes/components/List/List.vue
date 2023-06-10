<template>
  <div class="px-20 pt-10">
    <router-link to="/">
      <section class="flex flex-row cursor-pointer mb-10">
        <button type="button" class="flex px-4 h-full cursor-pointer group focus:outline-none">
          <span class="inline-flex justify-center items-center w-8 h-8 rounded-lg sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <icon iconName="icon-arrow-left" iconClass="fill-white" />
          </span>
        </button>

        <div class="flex items-center">
          <span class="text-xl text-[#F8B319] font-semibold">Back</span>
        </div>
      </section>
    </router-link>

    <section class="mb-40">
      <h1 class="text-4xl uppercase text-white font-bold">
        season 1 - list episodes
      </h1>
    </section>

    <section class="flex flex-col lg:flex-row gap-20">
      <div
        v-for="i in 4"
        :key="i"
      >
        <div class="relative flex justify-center overflow-hidden rounded-xl mb-4">
          <img src="https://static.tvmaze.com/uploads/images/original_untouched/1/2678.jpg" class="h-96 w-full object-cover" alt="" />

          <div class="absolute right-0 top-0 bg-[#F8B319] rounded-bl-lg rounded-tr-lg px-5 py-1">
            <span class="text-xl font-bold">8.1</span>
          </div>
        </div>

        <div>
          <div class="mb-3">
            <h2 class="text-white text-xl">Lorem ipsum dolor sit amet</h2>
          </div>
          <div class="flex flex-row mb-3">
            <vue3-star-ratings
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
            <div class="ml-3">
              <span class="text-white text-lg">8.1</span>
            </div>
          </div>
          <div>
            <h2 class="text-white text-xl">
              Episode 01
            </h2>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>