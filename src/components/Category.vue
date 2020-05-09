<template>
    <div class="index-category">
        <div class="category" v-for="(list,i) in lists" :key="i">
            <i class="iconfont" :class="list.icon" :style="{background:list.color}"></i>
            <label>{{list.title}}</label>
        </div>
     
          <!-- <input type="button" class="btn btn-primary" value="chufa" @click="myclick"> -->
       
    </div>
</template>

<script>
export default {
  data () {
    return {
      sommsg:'我是子组件的数据',
      lists:[
        {title:'美食1','icon':'icongouwuchekong',color:'#f00'},
        {title:'美食2','icon':'iconfaxian',color:'#fa69b9'},
        {title:'美食3','icon':'icongouwuchekong',color:'#49dacf'},
        {title:'美食4','icon':'iconweixin1',color:'#f26'},
        {title:'美食5','icon':'iconshouye',color:'#908cfd'},
        {title:'美食6','icon':'iconcompass',color:'#f42'},
        {title:'美食7','icon':'icongouwuchekong',color:'#f13'},
        {title:'美食8','icon':'iconcruise-ship',color:'#f60'}
      ]
    }
    
  },
  methods:{
    myclick(){
      this.$emit('func',this.sommsg)//获取父组件的方法并执行
    }
  }
}
</script>