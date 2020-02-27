export const state = () => ({
  counter: 0
})

export const actions = {
  //第二个参数是 上下文
  //app 是服务器实例 koa实例
  //nuxt-universal-cookie 服务器端 客户端统一使用api操作cookie
  nuxtServerInit({ commit }, { app }) {
    //此处是服务器端执行的代码
    const token = app.$cookies.get('token')
    //表面是登录用户
    if (token) {
      console.log('nuxtServerInit:token:' + token)
      commit('user/init', token)
    }
  }
}