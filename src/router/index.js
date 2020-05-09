import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'home',
    component:() =>import('../components/Home.vue')
  },
  {
    path: '/find',
    name: 'find',
    component: () => import('../components/Find.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../components/Order.vue')
  },{
    path: '/mine',
    name: 'mine',
    component: () => import('../components/Mine.vue')
  },
  ,{
    path: '/detail/:id',
    name: 'detail',
    component: () => import('../components/detail.vue')
  },
  {
    path: '/home/saoyisao',
    name: 'saoyisao',
    component: () => import('../components/saoyisao.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  linkActiveClass:'active',//�����ʽѡ�е�class��
  routes
})
<<<<<<< HEAD
// router.beforeEach((to, from, next) => {
//   // ��ҳ��ص�����
//   console.log(from)
//   document.documentElement.scrollTop = 0
//   // ���� next()��һ��Ҫ���� next �����������ӾͲ��ᱻ����
//  next()
// })
=======
>>>>>>> d1cc9285e884d54c1684ac036fe550836d822de8

export default router
