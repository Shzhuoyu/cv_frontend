export default defineNuxtConfig({
  // This project is a client-side SPA (was `mode: 'spa'` in Nuxt 1).
  ssr: false,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  modules: ['@pinia/nuxt'],

  // Plugins in ~/plugins are auto-registered (element-plus / echarts / auth-init,
  // all client-only via the `.client` suffix).

  app: {
    head: {
      title: '智慧养老',
      htmlAttrs: { lang: 'zh-CN' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Elder Care Monitoring System' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/weblogo.png' }
      ]
    }
  },

  // former `build.vendor` / webpack ProvidePlugin / babel-plugin-component are
  // no longer needed: Vite + Element Plus handle bundling, and lodash/echarts
  // are imported explicitly where used.
  vite: {
    optimizeDeps: {
      include: ['element-plus', '@element-plus/icons-vue', 'echarts']
    }
  }
})
