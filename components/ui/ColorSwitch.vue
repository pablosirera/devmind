<template>
  <div>
    {{ $colorMode.preference }}
    <IconDark
      v-if="$colorMode.preference !== 'dark'"
      class="cursor-pointer"
      @click="changeTheme('dark')"
    />
    <IconLight v-else class="cursor-pointer" @click="changeTheme('light')" />
  </div>
</template>

<script>
export default {
  name: 'ColorSwitch',
  components: {
    IconDark: () => import('@/assets/icons/dark.svg?inline'),
    IconLight: () => import('@/assets/icons/light.svg?inline'),
  },
  methods: {
    changeTheme(theme) {
      console.log(theme)
      this.$colorMode.preference = theme
    },
  },
}
</script>
