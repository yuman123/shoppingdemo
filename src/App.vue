<template>
  <div id="app">
<<<<<<< HEAD
    <transition name="slide">
      <!-- 路由动态显示 -->
      <router-view></router-view>
    </transition>
    <!-- 底部导航 -->
    <NavBottom :lists="lists" v-if="showBottom" id="navbottom" />
  </div>
</template>
<script>
import NavBottom from "./components/NavBottom";
export default {
  name: "App",
  data() {
    return {
      lists: [
        {
          title: "首页",
          url: "/home",
          content: "iconiconfontzhizuobiaozhun023101"
        },
        { title: "发现", url: "/find", content: "iconfaxian3" },
        { title: "订单", url: "/order", content: "icondingdan" },
        { title: "我的", url: "/mine", content: "iconwodedangxuan" }
      ],
      showBottom: true
    };
  },
  watch: {
    "$route.path": function(newVal, oldVal) {
    
      //wtch可以监听到路由的变化
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      console.log(oldVal + "-" + newVal);
      if (newVal === "/home/saoyisao") {
        this.showBottom = false;
      } else {
        this.showBottom = true;
      }
    }
  },
  components: {
    NavBottom
  }
};
</script>

<style>
@import "./assets/index.css";
=======
<!-- 路由动态显示 -->
<transition>
   <router-view />
</transition>
   <!-- 底部导航 -->
   <NavBottom :lists="lists" v-if="showBottom"/>
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
        ],
        showBottom:true

  }
},
watch:{
    '$route.path':function(newVal,oldVal){//wtch可以监听到路由的变化
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
      console.log(oldVal + '-'+ newVal)
      if(newVal === '/saoyisao'){
        this.showBottom = false;
      }else{
          this.showBottom = true;
      }
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

>>>>>>> d1cc9285e884d54c1684ac036fe550836d822de8
</style>
