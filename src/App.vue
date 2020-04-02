<template>
  <div id="app">
<!-- 路由动态显示 -->
   <router-view />
   <!-- 底部导航 -->
   <NavBottom :lists="lists"/>
  </div>
  
</template>
<script>
import NavBottom from './components/NavBottom'
export default {
name:'App',
data(){
  return {
    lists:[
            {title:'首页',url:'/home',content:'iconiconfontzhizuobiaozhun023101'},
            {title:'发现',url:'/find',content:'iconfaxian3'},
            {title:'订单',url:'/order',content:'icondingdan'},
            {title:'我的',url:'/mine',content:'iconwodedangxuan'}
        ]

  }
},
watch:{
    '$route.path':function(newVal,oldVal){//wtch可以监听到路由的变化
      console.log(oldVal + '-'+ newVal)
    }
  },
components:{
  NavBottom
}
}
</script>

<style>
@import './assets/index.css'
/* 引入css文件，减少http请求 */

</style>
