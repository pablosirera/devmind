<template>
  <div class="h-full overflow-hidden">
    <div class="flex justify-end p-4">
      <ColorSwitch />
    </div>
    <h1 class="text-center text-3xl font-bold">Devmind</h1>

    <div
      class="login-body mt-12 pt-56 h-full flex flex-col items-center bg-light dark:bg-blue-main-800"
    >
      <SocialLoginButton
        text="Iniciar sesión con google"
        @click="loginWithGoogle"
      />
      <p>iniciar sesión con google</p>
    </div>
  </div>
</template>

<script>
import SocialLoginButton from '~/components/auth/SocialLoginButton.vue'
import ColorSwitch from '~/components/ui/ColorSwitch.vue'

export default {
  name: 'Login',
  layout: 'auth',
  components: {
    ColorSwitch,
    SocialLoginButton,
  },
  methods: {
    async loginWithGoogle() {
      try {
        const provider = new this.$fireAuthObj.GoogleAuthProvider()
        const result = await this.$fireAuth.signInWithPopup(provider)
        console.log(result)
      } catch (error) {
        // TODO: show toast
        console.error('login error', error)
      }
    },
  },
}
</script>

<style scoped>
.login-body {
  width: 200%;
  margin-left: -50%;
  border-top-right-radius: 50%;
  border-top-left-radius: 50%;
}
</style>
