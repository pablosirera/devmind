<template>
  <IconBase view-box="0 0 24 24" icon-name="check" v-bind="$props">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </IconBase>
</template>

<script>
import IconMixin from '@/mixins/IconMixin.vue'

export default {
  name: 'IconCheck',
  mixins: [IconMixin],
}
</script>
