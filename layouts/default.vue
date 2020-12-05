<template>
  <div class="h-screen main-container">
    <BaseHeader />
    <main class="bg-light dark:text-white dark:bg-dark">
      <Nuxt />
    </main>
    <BaseFooter class="md:hidden" />
  </div>
</template>

<script>
import BaseHeader from '@/components/ui/BaseHeader.vue'
import BaseFooter from '@/components/ui/BaseFooter.vue'

export default {
  components: {
    BaseHeader,
    BaseFooter,
  },
}
</script>
