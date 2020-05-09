<template>
  <div id="find">
    <mt-header :title="msg" style="background-color:#f9f9b4;color:black;"></mt-header>
    <p>
      <mt-field label="用户名:" placeholder="请输入用户名" v-model="username"></mt-field>
    </p>
    <p>
      <mt-field label="评论:" placeholder="请输入评论" type="textarea" rows="4" v-model="comment"></mt-field>
    </p>
    <mt-button type="primary" size="large" @click="this.publishComment">发表评论</mt-button>
    <ul class="comment-box">
      <li v-for="(item,i) in this.commentList" :key="i">
        <img
          :src="item.user_pic_url"
          style="border:1px solid #f42;border-radius:50% 50%;width:10%;height:10%;float:left;"
        />
        <span style="color:lightgreen">网友{{item.user_name}}</span>
        说:{{item.comment}}
        <br />

        <span style="float:right;color:#ff4488">{{item.comment_time | dataFormat}}</span>
        <br />
        <br />
        <!-- 4-10 要上线的页面 广州 镇江 百年建筑 有色 -->
      </li>
    </ul>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      msg: "发现",
      username: "",
      comment: "",
      commentList: []
    };
  },

  methods: {
    publishComment() {
      //发表评论

      if (this.username && this.comment) {
        let a = [];
        a.push({
          user_name: this.username,
          comment: this.comment,
          comment_time: Date.parse(new Date()) / 1000
        }); //日期格式化
        console.log(a);
        this.commentList = a.concat(this.commentList);
        console.log(this.commentList);
        this.username = "";
        this.comment = "";
      } else {
        MessageBox("提示", "请检查是否填写完整");
      }
    },
    loadComment() {
      this.$http
        .get("/api/ratings")
        .then(res => {
          if (res.status == 200) {
            this.commentList = res.data.data.comments;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.loadComment();
  },
  filters: {
    dataFormat(data) {
      var value = new Date(data * 1000);
      var year = value.getFullYear();
      var month = value.getMonth() + 1;
      var date = value.getDate();
      var hour = value.getHours();
      var minute = value.getMinutes();
      var second = value.getSeconds();
      return (
        year +
        "-" +
        month +
        "-" +
        date +
        " " +
        hour +
        ":" +
        minute +
        ":" +
        second
      );
    }
  }
};
</script>
<style scoped>
#app .find p,
li {
  text-align: left;
}
.comment-box {
  margin-top: 10px;
  margin-bottom: 60px;
}
</style>
