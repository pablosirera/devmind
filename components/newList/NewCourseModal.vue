<template>
  <BaseModal v-if="showModal" @close="$emit('close')">
    <template #body>
      <form @submit.prevent="submitForm()">
        <BaseInput v-model="form.name" name="name" text="Nombre del curso" />

        <p class="text-gray-main-800 font-bold text-xs mt-4 mb-2">
          Estado del curso
        </p>
        <div class="flex flex-wrap">
          <SquareRadio
            name="status"
            label="todo"
            :value="statusSelected"
            text="Por hacer"
            class="mb-5"
            @change="selectStatus"
          />
          <SquareRadio
            name="status"
            label="doing"
            :value="statusSelected"
            text="Haciendo"
            class="mb-5"
            @change="selectStatus"
          />
          <SquareRadio
            name="status"
            label="done"
            :value="statusSelected"
            text="Hecho"
            class="mb-5"
            @change="selectStatus"
          />
        </div>
      </form>
    </template>
  </BaseModal>
</template>

<script>
import SquareRadio from '../ui/SquareRadio.vue'
import BaseModal from '~/components/ui/BaseModal.vue'
import BaseInput from '~/components/ui/BaseInput.vue'

export default {
  name: 'NewCourseModal',
  components: { BaseModal, BaseInput, SquareRadio },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      statusSelected: 'todo',
      form: {
        name: null,
        status: null,
      },
    }
  },
  methods: {
    selectStatus(value) {
      this.statusSelected = value
    },
  },
}
</script>
