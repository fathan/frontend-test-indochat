<template>
  <router-link :to="routePath">
    <section class="flex flex-row cursor-pointer mb-10">
      <button type="button" class="flex h-full cursor-pointer group focus:outline-none">
        <span class="inline-flex justify-center items-center w-8 h-8 rounded-lg sm:w-10 sm:h-10 bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <icon iconName="icon-arrow-left" iconClass="fill-white" />
        </span>
      </button>

      <div class="flex items-center ml-5">
        <span class="text-xl text-[#F8B319] font-semibold">
          Back
        </span>
      </div>
    </section>
  </router-link>
</template>

<script>
export default {
  props: {
    routePath: {
      type: Object,
      default: ''
    }
  }
}
</script>