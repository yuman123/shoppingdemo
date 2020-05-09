<template>
<<<<<<< HEAD
  <div id="home" @scroll="scrollEvent">
    <mt-header :title="msg" style="background-color:#f9f9b4;color:black;">
      <mt-button slot="right">
        <router-link to="/home/saoyisao">
          <i class="iconfont saoyisao"></i>
        </router-link>
      </mt-button>
    </mt-header>
    <mt-search
      :value.sync="value"
      cancel-text="取消"
      placeholder="搜索"
      style="width:100%;height:auto;"
    ></mt-search>

    <!-- <input type="button" value="开始" @click="startit" />
    <input type="button" value="暂停" @click="stop" />-->
    <category @func="show"></category>

    <banner />
    <list />
  </div>
</template>
<script>
import banner from "./Banner";
import category from "./Category";
import list from "./Lists";
import { Header } from "mint-ui";

export default {
  data() {
    return {
      msg: "我的首页，我做主",
      timer: null,
      value: "",
      scrollTop: 0
    };
  },
  mounted() {},
  methods: {
    show(data1) {
      // this.msg = data1；拿到子组件的数据并赋值给父组件
      // 在Vue中，子父组件最常用的通信方式就是通过props进行数据传递，
      //props值只能在父组件中更新并传递给子组件，在子组件内部，是不允许改变传递进来的props值，这样做是为了保证数据单向流通。
      //但有时候，我们会遇到一些场景，需要在子组件内部改变props属性值并更新到父组件中，这时就需要用到.sync修饰符
      // <child :name.sync="name"></child>  //想要在子组件里面改变从父组件传过来的值
      //this.$emit('update:name', 'I am from child');name.sync就是:name="name" @update:name="name = $event"的缩写

      console.log("我是父组件的方法" + data1);
    },
    scrollEvent(e) {
      console.log(e.srcElement.scrollTop, e.target.scrollTop)
    }
    // startit() {
    //   console.log("q");
    //   if (this.timer != null) {
    //   } else {
    //     this.timer = setInterval(() => {
    //       var start = this.msg.substring(0, 1);
    //       var end = this.msg.substring(1);
    //       this.msg = end + start;
    //     }, 500);
    //   }
    // },
    // stop() {
    //   clearInterval(this.timer);
    //   this.timer = null;
    // }
  },

  components: {
=======
  <div class="home">
    <mt-header  :title="msg" style="background-color:#f9f9b4;color:black;">
        <mt-button slot="right">
          <router-link to="/home/saoyisao"><i class="iconfont saoyisao"></i></router-link>
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
>>>>>>> d1cc9285e884d54c1684ac036fe550836d822de8
    banner,
    category,
    list
  }
<<<<<<< HEAD
};
</script>
<style scoped>
#home{
    height: 100%;
}
.iconfont.saoyisao {
  background: url("../assets/img/saoyisao.png") no-repeat center;
  background-size: 30px 30px;
=======
  
}
</script>
<style scoped>
.iconfont.saoyisao{
  background: url('../assets/img/saoyisao.png') no-repeat center;
 background-size: 30px 30px;
>>>>>>> d1cc9285e884d54c1684ac036fe550836d822de8
  display: inline-block;
  width: 30px;
  height: 30px;
}
</style>

  