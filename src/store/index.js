import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)

import commentStore form './modules/comment.js' // 引入某个store对象

// 由于 store 中的状态是响应式的，在组件中调用 store 中的状态简单到仅需要在计算属性中返回即可。触发变化也仅仅是在组件的 methods 中提交 mutation。
export default new vuex.Store({
  // 公共的store
  state: {
    show: false
  },
  // 引入其他单独的store
  modules: {
    comment: commentStore
  },
  mutations: {
    switchState(state) {  // 此处的state对应上面的state
      state.show = state.show? false : true
    }
  }
})
