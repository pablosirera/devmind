<template>
  <div
    class="rounded-2xl flex flex-col items-start p-2 bg-white dark:bg-gray-main-850"
  >
    <slot />
    <img :src="urlImage" class="w-full rounded-2xl" :alt="imageAlt" />
    <img src="https://unsplash.com/photos/JcqkN8wA1g4" alt="" />
    <BaseButton expanded class="mt-2" size="sm">
      {{ buttonText }}
    </BaseButton>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    imageSrc: {
      type: String,
      default: '@/assets/images/defaultImage.jpg',
    },
    imageAlt: {
      type: String,
      default: 'imagen por defecto usuario',
    },
    buttonText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      defaultImage: require('@/assets/images/defaultImage.jpg'),
    }
  },
  computed: {
    urlImage() {
      const image = this.imageSrc.length ? this.imageSrc : this.defaultImage
      return image
    },
  },
}
</script>
