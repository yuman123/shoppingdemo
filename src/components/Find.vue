<template>
  <div class="home">
    <mt-header  :title="msg" style="background-color:#f9f9b4;color:black;">
    </mt-header>
    <p>
      <mt-field label="用户名:" placeholder="请输入用户名" v-model="username"></mt-field>
    </p>
    <p>
      <mt-field label="评论:" placeholder="请输入评论" type="textarea" rows="4" v-model="comment"></mt-field>
    </p>
    <mt-button type="primary" @click="this.loadcomment">提交</mt-button>
    <ul v-for="(item,i) in this.commentList" :key="i">
      <li>{{item.name}}说：{{item.comment}} </li>
    </ul>
  
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  data(){
    return{
      msg:'发现',
      username:'',
      comment:'',
      commentList:[],
     

    }
  },

methods:{
  loadcomment(){
   if(this.username && this.comment){
     let a = [];
    a.push({name:this.username,comment:this.comment});
    console.log(a);
     this.commentList = this.commentList.concat(a);
    console.log(this.commentList);
    this.username = '';
    this.comment = '';

   }
   else{
    MessageBox('提示', '请检查是否填写完整');
   }
    
  },
},
}
</script>
<style scoped>

#app .home p,
li {
  text-align: left;
}

</style>
