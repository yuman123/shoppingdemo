<template>
  <div>
    <button @click="goback()" style="float:left;">返回首页</button>
    <img :src="this.detaillist.picture" style="width:100%" />
    <p
      style="color:#60abd8"
    >{{this.detaillist.name}}&nbsp;&nbsp;{{this.detaillist.month_saled_content}}&nbsp;&nbsp;好评度:{{this.detaillist.rating.like_ratio}}&nbsp;&nbsp;</p>
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
      detaillist: {}
    };
  },
  methods: {
    goback() {
      this.$router.push("/home");
    },
    getdetail() {
      this.$http
        .get("http://localhost:8080/api/goods")
        .then(res => {
          if (res.status == 200) {
            for (let i = 0;i < res.data.data.food_spu_tags[0].spus.length;i++) {
              if (res.data.data.food_spu_tags[0].spus[i].id ==this.$route.params.id) {
                this.detaillist = res.data.data.food_spu_tags[0].spus[i];
              }
            }
            console.log(this.detaillist);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    console.log(this.$route.params);
    this.id = this.$route.params.id;
    this.getdetail();
  }
};
</script>