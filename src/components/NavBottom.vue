<template>
    <div class="nav-bottom">
       <router-link v-for="(list,i) in lists" :key="i" :to='list.url'>
       <i class="iconfont" :class="list.content"></i>
       <label for="">{{list.title}}</label>
       </router-link>
     
     </div>
      
</template>

<script>


export default {
  data(){
    return{
        // lists:[
        //     {title:'首页',url:'/home',content:'iconiconfontzhizuobiaozhun023101'},
        //     {title:'发现',url:'/find',content:'iconfaxian3'},
        //     {title:'订单',url:'/order',content:'icondingdan'},
        //     {title:'我的',url:'/mine',content:'iconwodedangxuan'}
        // ]
     
    }
  },
  props:['lists']//父子组件传值
  
}
</script>
<style scoped>
.active {
  color: red;
  }
</style>

