<template>
  <div>
         <mt-header :title="this.detaillist.name +'商品详情'">
  <router-link to="/home" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
</mt-header>
    <img :src="this.detaillist.picture" style="width:100%" />
    <p
      style="color:#60abd8"
    >{{this.detaillist.name}}&nbsp;&nbsp;{{this.detaillist.month_saled_content}}&nbsp;&nbsp;好评度:{{this.detaillist.rating.like_ratio}}&nbsp;&nbsp;</p>
<<<<<<< HEAD
    <mt-button @click="BuyIt(id)">购买</mt-button>
    <transition
          @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"><i :class="id" class="ball" v-show="showBall"></i></transition>
=======
>>>>>>> d1cc9285e884d54c1684ac036fe550836d822de8
    <div v-if="this.detaillist.rating.snd_title =='暂无'">
      <b>{{this.detaillist.rating.title}}</b>
      {{this.detaillist.rating.snd_title}}
    </div>
    <div v-else>
      <b>{{this.detaillist.rating.title}}</b>
      <ul>
        <li v-for="(item,i) in this.detaillist.rating.comment_list" :key="i">
          <img
            :src="item.user_icon"
            style="border:1px solid #f42;border-radius:50% 50%;width:10%;height:10%;float:left;"
          />
          <span style="color:lightgreen">网友{{item.user_name}}</span>
          说:{{item.comment_content}}
          <br />

          <span style="float:right;color:#ff4488">{{item.comment_time}}</span>
          <br />
          <br />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
<<<<<<< HEAD
      showBall:false,
      count: 0,
=======
>>>>>>> d1cc9285e884d54c1684ac036fe550836d822de8
      detaillist: {
        rating:{}
      }
    };
  },
  methods: {
<<<<<<< HEAD
    getdetail() {
      this.$http
        .get("/api/goods")
        .then(res => {
          if (res.status == 200) {
            for(let j = 0;j < res.data.data.food_spu_tags.length; j++){
            for (let i = 0;i < res.data.data.food_spu_tags[j].spus.length;i++) {
              if (res.data.data.food_spu_tags[j].spus[i].id == this.$route.params.id) {
                this.detaillist = res.data.data.food_spu_tags[j].spus[i];
              }
            }
            }
=======
    async getdetail() {
      this.$http
        .get("http://localhost:8080/api/goods")
        .then(res => {
          if (res.status == 200) {
            for (let i = 0;i < res.data.data.food_spu_tags[0].spus.length;i++) {
              if (res.data.data.food_spu_tags[0].spus[i].id ==this.$route.params.id) {
                this.detaillist = res.data.data.food_spu_tags[0].spus[i];
              }
            }
>>>>>>> d1cc9285e884d54c1684ac036fe550836d822de8
            console.log(this.detaillist);
          }
        })
        .catch(error => {
          console.log(error);
        });
<<<<<<< HEAD
    },
    BuyIt(id) {//
     this.showBall = !this.showBall;
      console.log(id);
      this.$store.commit("setId", id); //利用vuex传递id
      this.count++;
      console.log(this.$store.state.id);
      
    },
    beforeEnter(el) {
      console.log(el)
      el.style.transform = 'translate(0px,0px)'
    },
    enter(el,done){
      el.offsetWidth;
      el.style.transform = 'translate(51px, 193px)';
      el.style.transition = 'all 0.5s cubic-bezier(0,0,0.58,1)';
      done();
    },
    afterEnter(el){
      this.showBall = !this.showBall;

=======
>>>>>>> d1cc9285e884d54c1684ac036fe550836d822de8
    }
  },
  mounted() {
    console.log(this.$route.params);
    this.id = this.$route.params.id;
    this.getdetail();
  }
};
<<<<<<< HEAD
</script>
<style>
.ball{
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: red;
  border-radius: 50%;
  left: 187px;
  top: 484px;
  z-index: 99999;

}
</style>
=======
</script>
>>>>>>> d1cc9285e884d54c1684ac036fe550836d822de8
