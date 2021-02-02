<template>
  <div class="h-full overflow-x-hidden flex flex-col">
    <section>
      <div
        class="flex justify-end p-4"
        :class="{ 'justify-between': isRegisterMode }"
      >
        <p v-if="isRegisterMode" class="cursor-pointer" @click="hideRegister()">
          volver
        </p>
        <ColorSwitch />
      </div>
      <h1 class="text-center text-3xl font-bold">Devmind</h1>
    </section>

    <div class="login-body mt-12 h-full bg-light dark:bg-gray-main-1000">
      <LoginForm
        v-if="!isRegisterMode"
        @login="loginWith"
        @show-register="showRegister()"
      />
      <RegisterForm v-else @register="registerUser" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { ROUTES } from '~/constants/routes'
import ColorSwitch from '~/components/ui/ColorSwitch.vue'
import LoginForm from '~/components/auth/LoginForm.vue'
import RegisterForm from '~/components/auth/RegisterForm.vue'

export default {
  name: 'Login',
  components: {
    ColorSwitch,
    LoginForm,
    RegisterForm,
  },
  layout: 'auth',
  data: () => ({
    isRegisterMode: false,
  }),
  methods: {
    ...mapMutations({
      setUser: 'authentication/setUser',
    }),
    loginWith(type) {
      type === 'google' ? this.loginWithGoogle() : this.loginWithGithub()
    },
    loginWithGoogle() {
      const provider = new this.$fireModule.auth.GoogleAuthProvider()
      this.loginPopup(provider)
    },
    loginWithGithub() {
      const provider = new this.$fireModule.auth.GithubAuthProvider()
      this.loginPopup(provider)
    },
    async loginPopup(provider) {
      try {
        const result = await this.$fire.auth.signInWithPopup(provider)
        const user = result.user
        this.setUser(user)
        this.$router.push(ROUTES.HOME)
      } catch (error) {
        // TODO: show toast
        console.error('login error', error)
      }
    },
    showRegister() {
      this.isRegisterMode = true
    },
    hideRegister() {
      this.isRegisterMode = false
    },
    async registerUser(data) {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(
          data.email,
          data.pass
        )
        await this.updateNameUser(data.name)
        console.log(this.$fireAuth.currentUser)
      } catch (error) {
        console.error(error)
      }
    },
    updateNameUser(name) {
      const user = this.$fireAuth.currentUser
      user.updateProfile({
        displayName: name,
      })
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
