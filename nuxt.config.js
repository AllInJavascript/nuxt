
module.exports = {
  mode: 'universal',
  //默认情况下router的配置是不需要写的
  //也开始可以手动修改配置文件配置路由的
  //中间件的两种配置方法：
  //1 全局配置 在router里配置  
  //2 page配置
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/foo',
        component: resolve(__dirname, 'pages/othername.vue')
      })
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/api-inject',
    "@/plugins/interceptor"
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    "/api": "http://localhost:8080"
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
