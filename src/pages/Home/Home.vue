<template>
  <div class="container mx-auto">
    <header class="flex flex-col lg:flex-row justify-between py-4 mt-5 mb-5">
      <div class="flex lg:flex-row gap-10 jusrify-center items-center mb-5 lg:mb-0">
        <router-link to="/" class="text-2xl text-white font-semibold border-b-4 border-[transparent] pb-3">
          Home
        </router-link>
        <router-link to="/" class="text-2xl text-[#F8B319] font-semibold border-b-4 border-[#F8B319] pb-3">
          Game of Thrones
        </router-link>
      </div>
      
      <div class="w-full lg:w-3/12">
        <div class="relative">
          <div class="absolute inset-y-0 left-3 flex items-center pl-3 pointer-events-none">
            <icon iconName="icon-squircle" />
          </div>
          <input
            type="text"
            class="text-lg block px-3 py-4 pl-16 rounded-lg w-full bg-[#21242D] placeholder-gray-500 text-gray-500 focus:placeholder-gray-500 font-light focus:bg-[#21242D] focus:ring-gray-500 focus:border-gray-500 focus:outline-none"
            placeholder="Search"
          >
          <div class="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none">
            <icon iconName="icon-filter" />
          </div>
        </div>
      </div>
    </header>

    <section class="overflow-hidden rounded-lg relative mb-8">
      <img src="https://placehold.co/1200x600/333333/666?text=Game+of+Thrones" alt="">

      <div class="absolute inset-5 top-20">
        <div class="text-5xl font-bold text-white mb-3">
          Garden of Borns
        </div>
        <div>
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
        </div>
      </div>

      <div class="flex absolute bottom-10 left-1/2 z-30 space-x-3 -translate-x-1/2">
        <button type="button" class="bg-[#f9f9f9] w-3 h-3 rounded-full"></button>
        <button type="button" class="bg-[#f9f9f9] w-3 h-3 rounded-full"></button>
        <button type="button" class="bg-[#f9f9f9] w-3 h-3 rounded-full"></button>
      </div>

      <button type="button" class="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-lg sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <icon iconName="icon-arrow-left" iconClass="fill-white" />
          <span class="hidden">Previous</span>
        </span>
      </button>
      <button type="button" class="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none">
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-lg sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <icon iconName="icon-arrow-right" iconClass="fill-white" />
          <span class="hidden">Next</span>
        </span>
      </button>
    </section>

    <section class="inline-block mb-10">
      <div class="py-4">
        <h1 class="text-3xl text-white font-bold">List Seasons</h1>
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        <div
          v-for="i in 3"
          :key="i"
          class="relative flex justify-center overflow-hidden rounded-3xl"
        >
          <div class="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
            <img src="https://static.tvmaze.com/uploads/images/original_untouched/24/60659.jpg" alt="" />
          </div>
          <div class="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-800" />
          <div class="absolute left-3 top-3 z-10">
            <div class="mb-1">
              <span class="text-2xl font-bold text-white">Season {{ i }}</span>
            </div>
            <div>
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
            </div>
          </div>

          <div class="absolute right-3 bottom-3 z-10">
            <button class="rounded-2xl h-12 w-48 bg-[#F8B319] font-bold text-lg text-white relative overflow-hidden">
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
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