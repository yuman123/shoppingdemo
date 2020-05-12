import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: JSON.parse(localStorage.getItem('productID')) || [], //��һ������Ҫ����Ϊstate���ֵһˢ�¾ͻ���ʧ������Ҫ�ӱ��ش洢���ȡ
  },
  mutations: {
    setId(state, id) { //ÿ�ι��򶼻Ὣ�����id����
      state.id.push(id);
    },
    reduceId(state, id) {//����
      var index = state.id.indexOf(id.toString());
      console.log(id)
      state.id.splice(index, 1);
    },
    deleteId(state, id) {//ɾ��
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