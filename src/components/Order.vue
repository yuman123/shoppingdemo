<template>
  <div class="order">
    <h1>{{msg}}</h1>
    <ul>
    <li v-for="(item,i) in this.finallydata" :key="i" style="width:100%;float:left"> <!--循环对象跟循环数组不同--> 
    <div>
    <img :src="item.picture" :alt="item.name" style="float:left;width:20%;" >
     <p>{{item.name}}</p>
   购买数量:<span style="color:#f60"><button @click="reduce(item.id)">-</button>{{item.num}}<button @click="add(item.id)">+</button></span>&nbsp;&nbsp;单价:<span style="color:#f60">{{item.price}}￥</span>总价:<b style="color:#f60">{{item.sum}}￥</b>
  <button style="float:right;color:red;margin-right:2%;" @click="deletedit(item.id)">删除</button>
    </div>
    </li>

      <p style="padding-right: 6%;float:right">合计:<b style="color:#f42;">{{totalprice}}￥</b> <button style="color:#fff;background-color:#f33;;">确认下单</button></p>
    
    
    </ul>
  </div>
</template>

<script>
export default {  
  data() {
    return {
      msg: "订单页",
      id: [],//接收的id
      newobj: {},//包含数量和id(已去重)
      orderdata:[],//包含这个id下的所有数据
      finallydata:[]||JSON.parse(localStorage.orderdatas)//整合以后的数据读取存储的数据，没有为空
    };
  },
  computed:{
    totalprice(){
      let sum = 0;
      for(let i = 0; i < this.finallydata.length;i++){
        this.finallydata[i].sum = this.finallydata[i].price *this.finallydata[i].num;
        sum += this.finallydata[i].price *this.finallydata[i].num;
        localStorage.setItem('orderdatas',JSON.stringify(this.finallydata));//本地存储

      }
      return sum
    },
    
  },
  watch:{
    
  },
  methods: {
       getorder() {
      this.$http
        .get("http://localhost:8080/api/goods")
        .then(res => {
          if (res.status == 200) {
            for (let i = 0;i < res.data.data.food_spu_tags[0].spus.length;i++) {
              for(let key in this.newobj){
                if (res.data.data.food_spu_tags[0].spus[i].id == key) {
                this.orderdata.push(res.data.data.food_spu_tags[0].spus[i]);
              }
              }
              
            }
            console.log(this.orderdata);
            this.getorderdata();
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    add(id){
       for(let i = 0; i < this.finallydata.length;i++){
        if(id == this.finallydata[i].id){
          this.finallydata[i].num++;
           this.$store.state.id.push(id)
          console.log(this.$store.state.id);
        }
       
      }

    },
    reduce(id){
      for(let i = 0; i < this.finallydata.length;i++){
        if(id == this.finallydata[i].id){
          if(this.finallydata[i].num == 1){
          }else{
            this.finallydata[i].num--;
            var index = this.$store.state.id.indexOf(id);
             this.$store.state.id.splice(index,1);
              console.log(this.$store.state.id);
          } 
        }   
      }
    },
    deletedit(id){
      for(let i = 0; i <  this.finallydata.length;i++){
        if(id == this.finallydata[i].id){
            this.finallydata.splice(i,1); 
          }    
      }
      if(this.finallydata.length == 0){
        localStorage.clear();
      }
    },
    getorderdata(){
      for(let key in this.newobj ){
        for(let i = 0; i < this.orderdata.length;i++){
        if(key == this.orderdata[i].id){
        this.finallydata.push({
          num:this.newobj[key],
          picture:this.orderdata[i].picture,
          name:this.orderdata[i].name,
          id:this.orderdata[i].id,
          price:this.orderdata[i].min_price,
          sum:this.newobj[key]*this.orderdata[i].min_price
        })
        }
      }
      }
      console.log(this.finallydata )
    }
    
  },
  created() { 
    for (let i = 0; i < this.$store.state.id.length; i++) {//数组去重并存入对象
      if (!this.newobj[this.$store.state.id[i]]) {
        this.newobj[this.$store.state.id[i]] = 1;
      } else {
        this.newobj[this.$store.state.id[i]]++;
      }
    }
    },
  mounted() {
    this.id = this.$store.state.id;//接收id
    console.log(this.id);
    this.getorder();
    
   
  }
};
</script>