<template>
  <header class="header dark:text-white dark:bg-gray-main-1000">
    <nuxt-link class="flex items-center" to="/">
      <LogoIcon class="w-5 h-5 mr-3" />
      <h1 class="font-bold text-base">Devmind</h1>
    </nuxt-link>

    <section class="flex items-center">
      <ColorSwitch />
      <nuxt-link class="hidden ml-4 md:block" to="/profile">
        <!-- TODO: translate alt text -->
        <img
          class="w-10 rounded-full"
          src="@/assets/images/defaultImage.jpg"
          alt="Imagen del usuario"
        />
      </nuxt-link>
    </section>
  </header>
</template>

<script>
import LogoIcon from '@/components/icons/IconTv.vue'
import ColorSwitch from '@/components/ui/ColorSwitch.vue'

export default {
  name: 'BaseHeader',
  components: {
    LogoIcon,
    ColorSwitch,
  },
}
</script>

<style scoped>
.header {
  @apply flex items-center justify-between p-4;
}
</style>
