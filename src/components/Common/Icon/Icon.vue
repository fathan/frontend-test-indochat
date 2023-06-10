<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :class="iconClass"
    :width="width" 
    :height="height" 
    viewBox="0 0 23 23" 
    :aria-labelledby="iconName" 
    role="presentation"
    fill="none"
  >
    <component :is="iconName" />
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String,
      default: ''
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    }
  }
}
</script>

<style scoped>
svg {
  vertical-align: baseline;
}
</style>