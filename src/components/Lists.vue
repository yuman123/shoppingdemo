<template>
  <div class="list">
    <ul>
      <li v-for=" (v,i) in goodLists" :key="i">
        <router-link :to="'/detail/'+v.id">
          <img :src="v.picture" style="width:40%;min-height:54px;" />
        </router-link>
        <p>{{v.name.slice(0,9)}}</p>
        <p>
          价格:
          <b style="color:#f42;">{{v.min_price}}￥</b>
          
        </p>
      </li>
      <mt-button
        type="danger"
        :disabled="noMore"
        size="large"
        @click="getMoreGoods()"
        ref="moreData"
        style="font-size:16px"
      >点击加载更多</mt-button>
    </ul>
    <div class="toTop" v-show="this.pageIndex != 0" @click="goToTop"></div>
  </div>
</template>
<style scoped>
.list ul{
  height: 100%;
}
.list li {
  width: 48%;
  border: 1px solid #ccc;
  float: left;
  box-shadow: 2px 0px 2px #ddd;
  margin-bottom: 3px;
  margin-left: 3px;
  height: 150px;
}
.list li p button {
  cursor: pointer;
  position: relative;
}

.toTop {
  position: fixed;
  bottom: 110px;
  right: 10px;
  width: 40px;
  height: 40px;
  background: url("../assets/img/totop.png") no-repeat center center;
  background-size: 40px 40px;
  border: 1px solid #ddd;
  border-radius: 50% 50%;
}
</style>

<script>
export default {
  data() {
    return {
      goodLists: [],
      count: 0,
      lists: this.$store.state.id,
      pageIndex: 0,
      noMore: false,
      showBall:false
    };
  },
  mounted() {
    this.getLists();
    console.log(this.windowScroll);
    window.addEventListener("wheel", this.windowScroll); //为什么这里只能监听滚轮事件却不能监听滚动条事件
  },
  methods: {
    getLists() {
      this.$http
        .get("/api/goods")
        .then(res => {
          console.log(res);
          if (res.status == 200) {
            this.goodLists = res.data.data.food_spu_tags[0].spus; //遍历商品
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    windowScroll() {
      // 滚动条距离页面顶部的距离
      // 以下写法原生兼容
      this.scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(this.scrollTop);
      if (this.scrollTop == 0) [(this.noMore = false)];
    },
    getMoreGoods() {
      //获取更多数据，也可在getLists作此操作，这样代码复用性会更高
      this.$http.get("/api/goods").then(res => {
        if (res.status == 200) {
          this.pageIndex++;
          if (this.pageIndex + 1 == res.data.data.food_spu_tags.length) {
            //判断下一次操作是否还有数据，没数据的话将按钮属性改变
            console.log(this.$refs.moreData);
            this.$refs.moreData.innerText = "已经到底部了";
            this.$refs.moreData.$el.textContent = "已经到底部了";
            this.noMore = true;
          }
          this.goodLists = this.goodLists.concat(
            res.data.data.food_spu_tags[this.pageIndex].spus
          );
        }

        console.log(this.pageIndex);
      });
    },
    
    goToTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      this.pageIndex = 0;
      this.$refs.moreData.innerText = "点击加载更多";
      this.$refs.moreData.$el.textContent = "点击加载更多";
      this.noMore = false;
      this.getLists();
    }
    
  },
  beforeDestroy() {
    window.removeEventListener("wheel", this.windowScroll);
  }
};
</script>
