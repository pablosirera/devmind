<template>
  <section class="px-4 py-6">
    <h1 class="font-bold text-2xl mb-12">Crear lista</h1>
    <BaseInput v-model="listName" name="listName" text="Nombre de la lista" />

    <div class="mt-4">
      <h1 class="font-bold text-2xl mb-12 flex items-center">
        Añadir curso
        <button @click="showNewCourseModal()">
          <IconAdd class="w-6 h-6 text-violet-main-700 ml-4" />
        </button>
      </h1>
    </div>
    <NewCourseModal :show-modal="showModal" @close="showModal = false" />
  </section>
</template>

<script>
import BaseInput from '~/components/ui/BaseInput.vue'
import IconAdd from '~/components/icons/IconAdd'
import NewCourseModal from '~/components/newList/NewCourseModal.vue'

export default {
  name: 'NewListView',
  components: { BaseInput, IconAdd, NewCourseModal },
  data() {
    return {
      listName: '',
      showModal: false,
    }
  },
  methods: {
    showNewCourseModal() {
      this.showModal = true
    },
  },
}
</script>
