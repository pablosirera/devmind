<template>
  <button
    class="button hover:bg-violet-main-700 hover:text-white"
    :class="buttonClasses"
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
    fill: {
      type: Boolean,
      default: false,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClasses() {
      return {
        [this.size]: true,
        fill: this.fill,
        [this.$colorMode.preference]: true,
        expanded: this.expanded,
      }
    },
  },
}
</script>

<style scoped>
.button {
  @apply rounded-2xl h-12 py-4 px-5 border border-violet-main-700 font-medium flex items-center;
}

.sm {
  @apply text-xs py-2 px-3;
}

.fill {
  @apply bg-gray-main-850 border-0;
}

.fill.light {
  @apply bg-gray-main-400 text-gray-main-900;
}

.expanded {
  @apply w-full justify-center;
}
</style>
