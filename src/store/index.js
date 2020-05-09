import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
<<<<<<< HEAD
    id:JSON.parse(localStorage.getItem('productID')) || [], //这一步很重要，因为state里的值一刷新就会消失，所以要从本地存储里读取
=======
    id:JSON.parse(localStorage.getItem('productID')) || [] //这一步很重要，因为state里的值一刷新就会消失，所以要从本地存储里读取
>>>>>>> d1cc9285e884d54c1684ac036fe550836d822de8
  },
  mutations: {
 setId(state, id) { //每次购买都会将购买的id传入
      state.id.push(id);
    }
  },
  actions: {
  },
  modules: {
  }
})
