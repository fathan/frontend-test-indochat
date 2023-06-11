<template>
  <button class="rounded-2xl h-10 w-28 lg:h-16 lg:w-52 bg-[#F8B319] hover:bg-[#d4b66c] font-bold text-base lg:text-lg text-black relative overflow-hidden">
    {{ title }}
  </button>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};
</script>
