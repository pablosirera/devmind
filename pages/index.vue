<template>
  <section class="px-4">
    <section
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5 mb-12"
    >
      <ImageCard
        v-for="course in courses"
        :key="course.id"
        :image-src="course.image"
        :image-alt="course.alt"
        button-text="Ir al curso"
      >
        <div class="flex flex-col mb-2">
          <h2 class="text-base font-bold text-gray-main-950 dark:text-white">
            {{ course.name }}
          </h2>
          <p class="text-sm text-gray-main-700">{{ course.status }}</p>
        </div>
      </ImageCard>
    </section>
    <BaseButton expanded fill>Crear lista</BaseButton>
  </section>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import ImageCard from '~/components/ui/ImageCard.vue'

export default {
  name: 'Home',
  comments: {
    ImageCard,
    BaseButton,
  },
  data() {
    return {
      courses: [
        {
          id: 1,
          name: 'Curso ejemplo 1',
          status: 'En progreso',
          image:
            'https://images.unsplash.com/photo-1611583040872-eb4d7ea0b2f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          alt: 'curso ejemplo 1',
        },
        {
          id: 2,
          name: 'Curso ejemplo 2',
          status: 'Hecho',
          image:
            'https://images.unsplash.com/photo-1611583040872-eb4d7ea0b2f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          alt: 'curso ejemplo 1',
        },
        {
          id: 3,
          name: 'Curso ejemplo 3',
          status: 'En progreso',
          image:
            'https://images.unsplash.com/photo-1611583040872-eb4d7ea0b2f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          alt: 'curso ejemplo 3',
        },
        {
          id: 4,
          name: 'Curso ejemplo 4',
          status: 'Hecho',
          image:
            'https://images.unsplash.com/photo-1611583040872-eb4d7ea0b2f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
          alt: 'curso ejemplo 4',
        },
      ],
    }
  },
}
</script>
