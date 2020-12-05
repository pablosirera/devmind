<template>
  <button
    class="rounded-2xl py-4 px-5 border border-violet-main-700 font-bold hover:bg-violet-main-700 hover:text-white"
    :class="size"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    outlined: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: 'md',
      validate: (value) => ['sm', 'md'].includes(value),
    },
  },
}
</script>

<style scoped>
.sm {
  @apply text-xs py-2 px-3;
}
</style>
