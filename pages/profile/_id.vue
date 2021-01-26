<template>
  <section class="py-6 px-4">
    <h1 class="font-bold text-2xl pb-6">Perfil</h1>

    <div class="md:block grid grid-cols-2 gap-3">
      <div
        class="profile-image-wrapper rounded-2xl flex flex-col items-center p-2 bg-white dark:bg-gray-main-850"
      >
        <img
          v-if="user && user.photo"
          :src="user.photo"
          class="w-full rounded-2xl"
          alt="foto perfil usuario"
        />
        <img
          v-else
          class="w-full rounded-2xl"
          src="@/assets/images/defaultImage.jpg"
          alt="imagen por defecto ususario"
        />
        <BaseButton class="mt-2" size="sm">+ Subir nueva foto</BaseButton>
      </div>

      <div class="md:mt-4">
        <p class="text-xs text-gray-main-800 font-bold mb-3">Redes sociales</p>
        <button
          v-for="(social, index) in socialLinks"
          :key="index"
          class="mr-2"
        >
          <component :is="social.component" class="w-6 h-6" />
        </button>
        <button v-if="!shouldShowInputSocial" @click="showSocialInput">
          <IconAdd class="w-6 h-6 text-violet-main-700" />
        </button>
        <button v-else @click="addNewSocial">
          <IconCheck class="w-6 h-6 text-green-500" />
        </button>
        <BaseInput
          v-if="shouldShowInputSocial"
          v-model="newSocialURL"
          class="mt-3"
          name="social"
          placeholder="Nueva red social"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ButtonIcon from '~/components/ui/ButtonIcon.vue'
import IconGithub from '~/components/icons/IconGithub.vue'
import IconGoogle from '~/components/icons/IconGoogle.vue'
import IconAdd from '~/components/icons/IconAdd.vue'
import BaseInput from '~/components/ui/BaseInput.vue'
import IconCheck from '~/components/icons/IconCheck.vue'
import IconTwitter from '~/components/icons/IconTwitter.vue'

export default {
  name: 'ProfileDetail',
  components: {
    ButtonIcon,
    IconGithub,
    IconAdd,
    BaseInput,
    IconCheck,
    IconGoogle,
    IconTwitter,
  },
  asyncData({ store }) {
    const user = store.state.authentication.user

    return {
      user,
    }
  },
  data: () => ({
    shouldShowInputSocial: false,
    newSocialURL: '',
    socialLinks: [],
  }),
  methods: {
    showSocialInput() {
      this.shouldShowInputSocial = true
    },
    addNewSocial() {
      const socialData = this.getSocialData()
      this.socialLinks.push(socialData)
      this.shouldShowInputSocial = false
      this.newSocialURL = ''
    },
    getSocialData() {
      const component = this.getComponentSocial()
      return {
        component,
        url: this.newSocialURL,
      }
    },
    getComponentSocial() {
      const isTwitter = this.newSocialURL.includes('twitter.com')
      const isGithub = this.newSocialURL.includes('github.com')

      // TODO: refactor this conditionals
      if (isTwitter) {
        return 'IconTwitter'
      }

      if (isGithub) {
        return 'IconGithub'
      }
    },
  },
}
</script>

<style scoped>
.profile-image-wrapper {
  max-width: 200px;
  min-width: 160px;
}
</style>
