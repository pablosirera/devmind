<template>
  <div class="flex flex-col justify-around h-full">
    <div class="flex flex-col items-center mb-8">
      <SocialLoginButton
        text="Iniciar sesión con google"
        @click="login('google')"
      />
      <SocialLoginButton
        text="Iniciar sesión con github"
        type="github"
        @click="login('github')"
      />
    </div>
    <div class="text-center">
      <p class="font-bold cursor-pointer" @click="showRegister()">Regístrate</p>
      <p>¿Ya tienes una cuenta? <b>Iniciar sesión</b></p>
    </div>
  </div>
</template>

<script>
import SocialLoginButton from '~/components/auth/SocialLoginButton.vue'
export default {
  name: 'LoginForm',
  components: { SocialLoginButton },
  methods: {
    login(type) {
      this.$emit('login', type)
    },
    showRegister() {
      this.$emit('show-register')
    },
  },
}
</script>
