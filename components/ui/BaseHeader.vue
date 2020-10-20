<template>
  <header class="header dark:text-white dark:bg-blue-main-800">
    <nuxt-link class="flex items-center" to="/">
      <LogoIcon class="w-5 mr-3" />
      <h1 class="font-bold text-base">Devmind</h1>
    </nuxt-link>

    <nuxt-link class="hidden md:block" to="/profile">
      <!-- TODO: translate alt text -->
      <img
        class="w-10 rounded-full"
        src="@/assets/images/defaultImage.jpg"
        alt="Imagen del usuario"
      />
    </nuxt-link>
  </header>
</template>

<script>
import LogoIcon from '@/assets/icons/tv.svg?inline'

export default {
  name: 'BaseHeader',
  components: {
    LogoIcon,
  },
}
</script>

<style scoped>
.header {
  @apply flex items-center justify-between p-4;

  height: var(--header);
}
</style>
