import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id:JSON.parse(localStorage.getItem('productID')) || [], //��һ������Ҫ����Ϊstate���ֵһˢ�¾ͻ���ʧ������Ҫ�ӱ��ش洢���ȡ
  },
  mutations: {
 setId(state, id) { //ÿ�ι��򶼻Ὣ�����id����
      state.id.push(id);
    }
  },
  actions: {
  },
  modules: {
  }
})
