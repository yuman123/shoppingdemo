<template>
  <div class="home">
    <mt-header  :title="msg" style="background-color:#f9f9b4;color:black;">
        <mt-button slot="right">
          <router-link to="/saoyisao"><i class="iconfont saoyisao"></i></router-link>
        </mt-button>
    </mt-header>

    <input type="button" value="开始" @click="startit">
    <input type="button" value="暂停" @click="stop">
  <category @func="show"></category>
  
   <banner/>
   <list/>
  </div>
</template>
<script>
import banner from './Banner'
import category from './Category'
import list from './Lists'
import { Header } from 'mint-ui';

export default {
  data(){
    return{
      msg:'我的首页，我做主',
      timer:null
    }
  },
  methods:{
    show(data1){
      // this.msg = data1；拿到子组件的数据并赋值给父组件
       console.log('我是父组件的方法' +data1)
    },
    startit(){
      console.log('q')
      if(this.timer != null){ 

      }else{
         this.timer = setInterval(()=>{
         var start = this.msg.substring(0,1);
         var end = this.msg.substring(1);
         this.msg = end + start
      },500)

      }
     
    },
    stop(){
      clearInterval(this.timer);
      this.timer = null;
    }
  },
  components:{
    banner,
    category,
    list
  }
  
}
</script>
<style scoped>
.iconfont.saoyisao{
  background: url('../assets/img/saoyisao.png') no-repeat center;
 background-size: 30px 30px;
  display: inline-block;
  width: 30px;
  height: 30px;
}
</style>

  