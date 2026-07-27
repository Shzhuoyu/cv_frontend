import { useAuthStore } from '~/stores/auth'

// Replaces the old Vuex `nuxtClientInit`: hydrate auth state from cookies at startup.
export default defineNuxtPlugin(() => {
  const auth = useAuthStore()
  auth.loadFromCookies()
})
