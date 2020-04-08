import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'

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
    path: '/saoyisao',
    name: 'saoyisao',
    component: () => import('../components/saoyisao.vue')
  }
]

const router = new VueRouter({
  mode:'history',
  linkActiveClass:'active',//添加样式选中的class名
  routes
})

export default router
