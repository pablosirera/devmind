<template>
  <div>
    <span v-if="$colorMode.preference !== 'dark'" @click="changeTheme('dark')">
      <IconDark class="cursor-pointer w-6 h-6" />
    </span>

    <span v-else @click="changeTheme('light')">
      <IconLight class="cursor-pointer fill-white text-white w-6 h-6" />
    </span>
  </div>
</template>

<script>
export default {
  name: 'ColorSwitch',
  components: {
    IconDark: () => import('@/components/icons/IconDark.vue'),
    IconLight: () => import('@/components/icons/IconLight.vue'),
  },
  methods: {
    changeTheme(theme) {
      this.$colorMode.preference = theme
    },
  },
}
</script>
