<template>
    <div class="nav-bottom">
     
       <router-link v-for="(list,i) in lists" :key="i" :to='list.url'>
       
       <i class="iconfont" :class="list.content"></i>
         <mt-badge size="small" v-if="i == 2" color="red" style="position:relative;top:-9px;right:4px;padding:2px 3px;">{{productNums}}</mt-badge>
       <label for="title">{{list.title}}</label>
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
        productid:this.$store.state.id,
        
     
    }
  },
  computed:{
    productNums:function(){ 
      return this.productid.length;
     
    }

  },
  methods:{
  },
  
  props:['lists']//父子组件传值
  
}
</script>
<style scoped>
.active,.icon-car-count {
  color: red;
  }
</style>

