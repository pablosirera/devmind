<template>
  <section class="flex flex-col items-center justify-center pt-4">
    <h1 class="text-center text-2xl">Regístrate</h1>
    <form class="mt-12 register-form" @submit.prevent>
      <BaseInput v-model="form.name" text="Nombre" name="name" />
      <BaseInput
        v-model="form.email"
        text="Email"
        name="name"
        type="email"
        class="mt-4"
      />
      <BaseInput
        v-model="form.pass"
        text="Contraseña"
        name="name"
        type="password"
        class="mt-4"
      />

      <BaseButton class="mt-6" @click="registerUser()">Regístrate</BaseButton>
    </form>
  </section>
</template>

<script>
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

export default {
  name: 'RegisterForm',
  components: { BaseInput, BaseButton },
  data: () => ({
    form: {
      name: '',
      email: '',
      pass: '',
    },
  }),
  methods: {
    registerUser() {
      this.$emit('register', { ...this.form })
    },
  },
}
</script>

<style scoped>
.register-form {
  width: 40%;
}
</style>
