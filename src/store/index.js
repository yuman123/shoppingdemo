import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
<<<<<<< HEAD
    id:JSON.parse(localStorage.getItem('productID')) || [], //��һ������Ҫ����Ϊstate���ֵһˢ�¾ͻ���ʧ������Ҫ�ӱ��ش洢���ȡ
=======
    id:JSON.parse(localStorage.getItem('productID')) || [] //��һ������Ҫ����Ϊstate���ֵһˢ�¾ͻ���ʧ������Ҫ�ӱ��ش洢���ȡ
>>>>>>> d1cc9285e884d54c1684ac036fe550836d822de8
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
