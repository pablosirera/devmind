<template>
  <div
    class="square-radio bg-gray-main-1000 p-2 flex justify-between items-center rounded-2xl"
  >
    <label>{{ text }}</label>
    <input v-model="radioValue" :value="value" type="radio" :name="name" />
  </div>
</template>

<script>
export default {
  name: 'SquareRadio',
  props: {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      required: true,
    },
  },
  computed: {
    radioValue: {
      get() {
        return this.value
      },
      set() {
        this.$emit('change', this.label)
      },
    },
  },
}
</script>

<style scoped>
.square-radio {
  width: 100%;
  height: 50px;
}
</style>
