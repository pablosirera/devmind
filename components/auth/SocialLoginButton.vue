<template>
  <button
    class="rounded-full border py-2 px-6 flex items-center my-2"
    :class="type"
    @click="$emit('click')"
  >
    <component :is="socialComponent" class="w-6 h-6 mr-2 fill-white" />
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'SocialLoginButton',
  components: {
    IconGoogle: () => import('@/components/icons/IconGoogle.vue'),
    IconGithub: () => import('@/components/icons/IconGithub.vue'),
  },
  props: {
    type: {
      type: String,
      default: 'google',
      validate: (value) => ['google', 'github'].includes(value),
    },
    text: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    socialOptions: {
      google: 'IconGoogle',
      github: 'IconGithub',
    },
  }),
  computed: {
    socialComponent() {
      return this.socialOptions[this.type]
    },
  },
}
</script>

<style scoped>
.google {
  @apply bg-red-main-600 border-red-main-600 text-white;
}

.github {
  @apply bg-black text-white;
}
</style>
