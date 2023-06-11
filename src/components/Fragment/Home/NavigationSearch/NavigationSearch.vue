<template>
  <header class="flex flex-col lg:flex-row justify-between py-4 mt-5 mb-5">
    <div class="flex lg:flex-row gap-20 jusrify-center items-center mb-5 lg:mb-0">
      <router-link
        :to="{ name: 'Home' }"
        class="text-2xl text-white font-semibold border-b-4 border-[transparent] pb-3"
      >
        Home
      </router-link>
      <router-link
        :to="{ name: 'Home' }"
        class="text-2xl text-[#F8B319] font-semibold border-b-4 border-[#F8B319] pb-3"
      >
        Game of Thrones
      </router-link>
    </div>
    
    <div class="w-full lg:w-4/12">
      <div class="relative">
        <div class="absolute inset-y-0 left-3 flex items-center pl-3 pointer-events-none">
          <icon iconName="icon-squircle" />
        </div>
        <input
          v-model="state.search.text"
          type="text"
          class="text-lg block px-3 py-4 pl-16 rounded-lg w-full bg-[#21242D] placeholder-gray-500 text-gray-500 focus:placeholder-gray-500 font-light focus:bg-[#21242D] focus:ring-gray-500 focus:border-gray-500 focus:outline-none"
          placeholder="Search"
          @keyup.enter="onHandleSearch()"
        >
        <div class="absolute inset-y-0 right-3 flex items-center pl-3 pointer-events-none">
          <icon iconName="icon-filter" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup () {
    const state = reactive({
      search: {
        text: ''
      }
    });

    const onHandleSearch = () => {
      window.alert('function for handling searching with value: ' + state.search.text);
      resetSearch();
    };

    const resetSearch = () => {
      state.search.text = '';
    };

    return {
      state,
      onHandleSearch
    }
  }
}
</script>