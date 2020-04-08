<template>
  <div class="list">
    <ul>
      <li v-for=" (v,i) in goodLists" :key="i" style="width:50%;float:left">
          <router-link :to="'/detail/'+v.id">
        <img :src="v.picture" style="width:30%;"/></router-link>
        <p>{{v.name.slice(0,9)}}</p>
        <p>价格: <b style="color:#f42;">{{v.min_price}}￥</b><button @click="BuyIt(v.id)">购买</button></p>
      </li> 
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodLists: [],
      count:0,
      lists:this.$store.state.id
    };
  },
  methods: {
    getLists() {
      this.$http
        .get("http://localhost:8080/api/goods")
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            this.goodLists = res.data.data.food_spu_tags[0].spus;//遍历商品
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
async BuyIt(id){ 
      console.log(id);
       this.$store.commit( 'setId',id);//利用vuex传递id
       this.count++;
       console.log(this.$store.state.id);
    }
  },
  mounted() {
    this.getLists();
  }
};
</script>
