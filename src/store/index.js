import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: JSON.parse(localStorage.getItem('productID')) || [], //这一步很重要，因为state里的值一刷新就会消失，所以要从本地存储里读取
  },
  mutations: {
    setId(state, id) { //每次购买都会将购买的id传入
      state.id.push(id);
    },
    reduceId(state, id) {//减少
      var index = state.id.indexOf(id.toString());
      console.log(id)
      state.id.splice(index, 1);
    },
    deleteId(state, id) {//删除
      for (let i = 0; i < state.id.length; i++) {
        if (id == state.id[i]) {
          state.id.splice(i, 1);
          i--;
        }
      }

    }
  },
  actions: {},
  modules: {}
})