<template>
  <div
    class="flex h-screen w-full bg-black bg-cover bg-no-repeat"
    style="background-image:url('https://static.tvmaze.com/uploads/images/original_untouched/1/3178.jpg')"
  >
    <div class="px-20 pt-10">
      <router-link to="/episodes">
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

      <section class="mt-40">
        <div>
          <div class="mb-3">
            <h2 class="text-white text-6xl">Lorem ipsum dolor sit amet</h2>
          </div>
          <div class="flex flex-row mb-20">
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
            <p class="text-white text-xl">
              Confusion rages in the Stormlands in the wake of a devastating reversal. Catelyn must flee with a new ally, whilst Littlefinger sees an opportunity in the chaos. Theon seeks to prove himself to his father in battle. Arya receives a promise from the enigmatic Jaqen H'ghar. The Night's Watch arrives at the Fist of the First Men. Daenerys Targaryen receives a marriage proposal.
            </p>
          </div>
        </div>
      </section>
    </div>    
  </div>
</template>