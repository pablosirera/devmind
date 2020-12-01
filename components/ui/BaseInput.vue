<template>
  <div class="flex flex-col">
    <label
      v-if="text"
      :for="name"
      class="text-gray-main-800 font-bold text-xs mb-2"
    >
      {{ text }}
    </label>
    <input
      v-model="inputValue"
      :type="type"
      class="rounded-2xl outline-none font-bold text-sm py-3 px-2 bg-gray-main-400 text-gray-main-900 dark:text-white dark:bg-gray-main-850"
      @input="$emit('input', inputValue)"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    inputValue: null,
  }),
  mounted() {
    this.inputValue = this.value
  },
}
</script>
