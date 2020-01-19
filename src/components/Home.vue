<template>
  <div class="home">
   <h1>{{msg}}</h1>
   <category/>
   <banner/>
   <list/>
   
  </div>
</template>

<script>
import banner from './Banner'
import category from './Category'
import list from './Lists'


export default {
  data(){
    return{
      msg:'首页'
    }
  },
  components:{
    banner,
    category,
    list
  }
  
}
</script>
