<template>
  <IconBase view-box="0 0 24 24" icon-name="dark" v-bind="$props">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </IconBase>
</template>

<script>
import IconMixin from '@/mixins/IconMixin.vue'

export default {
  name: 'IconDark',
  mixins: [IconMixin],
}
</script>
