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
        <ButtonIcon><IconGithub class="w-6 h-6" /></ButtonIcon>
        <ButtonIcon>
          <IconAdd class="w-6 h-6 text-violet-main-700" />
        </ButtonIcon>
      </div>
    </div>
  </section>
</template>

<script>
import ButtonIcon from '~/components/ui/ButtonIcon.vue'
import IconGithub from '~/components/icons/IconGithub.vue'
import IconAdd from '~/components/icons/IconAdd.vue'

export default {
  name: 'ProfileDetail',
  components: {
    ButtonIcon,
    IconGithub,
    IconAdd,
  },
  asyncData({ store }) {
    const user = store.state.authentication.user

    return {
      user,
    }
  },
}
</script>

<style scoped>
.profile-image-wrapper {
  max-width: 200px;
  min-width: 160px;
}
</style>
