<template>
  <button
    class="rounded-2xl py-4 px-5 border border-violet-main-700 font-bold hover:bg-violet-main-700 hover:text-white"
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
  },
}
</script>
