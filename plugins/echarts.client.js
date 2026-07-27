import { defineNuxtPlugin } from '#app'
import * as echarts from 'echarts'

export default defineNuxtPlugin((nuxtApp) => {
  // Expose echarts the same way the old `Vue.prototype.$echarts` did.
  nuxtApp.vueApp.config.globalProperties.$echarts = echarts
})
