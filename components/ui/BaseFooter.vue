<template>
  <footer
    class="footer flex justify-around px-5 py-2 text-gray-main-700 dark:text-gray-main-800 dark:bg-gray-main-1000"
  >
    <nuxt-link
      v-for="(link, index) in links"
      :key="index"
      :to="link.url"
      class="flex flex-col items-center"
      :class="`link-${$colorMode.preference}`"
    >
      <component :is="link.component" class="w-6 h-6" />
      <span>{{ link.name }}</span>
    </nuxt-link>
  </footer>
</template>

<script>
import IconHome from '@/components/icons/IconHome.vue'
import IconAdd from '@/components/icons/IconAdd.vue'
import IconProfile from '@/components/icons/IconProfile.vue'

export default {
  name: 'BaseFooter',
  components: {
    IconHome,
    IconAdd,
    IconProfile,
  },
  data: () => ({
    links: [
      {
        name: 'Inicio',
        url: '/',
        component: 'IconHome',
      },
      {
        name: 'Nuevo',
        url: '/add',
        component: 'IconAdd',
      },
      {
        name: 'Perfil',
        url: '/profile',
        component: 'IconProfile',
      },
    ],
  }),
}
</script>

<style scoped>
.link-dark svg {
  fill: theme('colors.gray-main.800');
}

.link-light svg {
  fill: theme('colors.gray-main.700');
}

.nuxt-link-exact-active {
  color: theme('colors.gray-main.900');
}

.nuxt-link-exact-active.link-dark {
  color: theme('colors.white');
}

.nuxt-link-exact-active svg {
  fill: theme('colors.gray-main.900');
}

.nuxt-link-exact-active.link-dark svg {
  fill: theme('colors.white');
}
</style>
