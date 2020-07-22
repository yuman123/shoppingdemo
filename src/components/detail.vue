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
    <mt-button @click="BuyIt(id)">购买</mt-button>
    <transition
          @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"><i :class="id" class="ball" v-show="showBall" ref="ball"></i>
    </transition>
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
      showBall:false,
      count: 0,
      timer:null,
      detaillist: {
        rating:{}
      }
    };
  },
  methods: {
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
            console.log(this.detaillist);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    BuyIt(id) {//防抖 一定时间内操作了重置定时器，没有操作就发送数据
      this.$store.commit("setId", id); //利用vuex传递id
      this.count++;
    if(this.timer){ 
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(()=>{
      this.showBall = !this.showBall
    },500);//0.5正好是一次动画的时间

    },
    beforeEnter(el) {
      console.log(el)
      el.style.transform = 'translate(0px,0px)'
    },
    enter(el,done){
      el.offsetWidth;
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document.getElementById('badge').getBoundingClientRect();
      const xDist = badgePosition.left - ballPosition.left;
      const  yDist = badgePosition.top - ballPosition.top;//获取相对位置来显示小球动态效果
      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      el.style.transition = 'all 0.5s cubic-bezier(0,0,0.58,1)';
      done();
    },
    afterEnter(el){
      this.showBall = !this.showBall;

    }
  },
  mounted() {
    console.log(this.$route.params);
    this.id = this.$route.params.id;
    this.getdetail();
  }
};
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
