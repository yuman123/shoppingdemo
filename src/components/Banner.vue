<template>
  <div class="banner">
    <img v-for=" (v,i) in imglists" :src="v" :key="i" v-show="n==i" width="100%" />
    <div class="banner-circle">
      <ul>
        <li v-for="(v,i) in imglists" :key="i" :class="i==n ?'selected':''" @click="tiaozhuan(i)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 0,
      timer:null,
      imglists: [
        require("../assets/img/1.jpg"),
        require("../assets/img/2.jpg"),
        require("../assets/img/3.jpg"),
        require("../assets/img/4.jpg"),
        require("../assets/img/5.jpg"),
        require("../assets/img/6.jpg")
      ]
    };
  },
  methods: {
      tiaozhuan(i){
          this.n = i;
         clearInterval(this.timer);
         setTimeout(this.luobo,1000)//只执行一次
      },
    luobo() {
     this.timer = setInterval(this.autoplay, 3000);
    },
    autoplay() {
      this.n++;
      if (this.n == this.imglists.length) {
        this.n = 0;
      }
    }
  },
  mounted() {
    this.luobo();
  },
  destroyed(){
      clearInterval(this.timer);//解决当前页面跳转其他页面时计时器仍在继续的问题
  }
};
</script>
