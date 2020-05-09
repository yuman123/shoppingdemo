<template>
<<<<<<< HEAD
  <div id="mine">
    <mt-header  style="background-color:#eee;color:black;height:80px;font-size:20px">
      <div slot="left" class="slotLeft"><div class="avatar"></div>tiantian</div>
      <div slot="right"><i class="iconfont iconcloud-upload"></i></div>
    </mt-header>
    <div class="containerBox" ref="containerBox">
      <div class="vip">
        <div class="Left">wode会员<br>有9张可用红包</div>
        <div class="right"><br>立即使用</div>
      </div>
      <div class="myMoney"></div>
      <!-- <ul class="container" ref="container" @touchstart="gtouchstart" @touchmove="gtouchmove" @touchend="gtouchend" >
=======
  <div class="home">
    <mt-header :title="msg" style="background-color:#f9f9b4;color:black;"></mt-header>
    <div class="containerBox" ref="containerBox">
      <ul
        class="container"
        ref="container"
        @touchstart="gtouchstart"
        @touchmove="gtouchmove"
        @touchend="gtouchend"
      >
>>>>>>> d1cc9285e884d54c1684ac036fe550836d822de8
        <li class="content">11</li>
        <li class="content">22</li>
        <li class="content">33</li>
        <li class="content">44</li>
        <li class="content">55</li>
        <li class="content">66</li>
        <li class="content">77</li>
        <li class="content">88</li>
        <li class="content">99</li>
        <li class="content">100</li>
<<<<<<< HEAD
      </ul> -->
    </div>

  </div>
</template>
<style>
#mine{
  padding-top: 5px;
}
.containerBox{
  position: absolute;
}
.container {
  overflow: hidden;
  height: 18px;
}
.content {
  float: left;
  list-style: none;
  padding: 0 29px 0 0;
}
.avatar{
  background: url(https://img.meituan.net/avatar/71ef89fa000e783d5b8d86c2767a9d28195580.jpg) no-repeat center;
  background-size: 80px 80px;
  border: 1px solid black;
  border-radius: 50%;
  width:80px;
  height: 80px;
 display: inline-block;
 vertical-align: middle;
 margin-right: 15px;
}
.slotLeft{
  font-size: 30px;
}
.iconcloud-upload{
  font-size: 36px;
}
.containerBox{
  width: 100%;
}
.vip{
  width: 98%;
  height: 80px;
  border-radius: 12px 12px;
  background-color: #111111;
  margin: 0 auto;
  margin-top: 16px;
  color: #fff;
  display: flex;
  line-height: 40px;
  justify-content: space-between;

}
.right{
  margin-right: 15px;
}
.myMoney{
  width: 98%;
  height: 120px;
  border-radius: 8px 8px;
  background-color: #eee;
  box-shadow: #ccc;
  margin: 0 auto;
  margin-top: 16px;
  justify-content: space-between;
  flex-wrap: nowrap;

}
</style>
=======
      </ul>
    </div>
  </div>
</template>
>>>>>>> d1cc9285e884d54c1684ac036fe550836d822de8

<script>
export default {
  data() {
    return {
      msg: "我的",
      flag: false,
      startX: 0,
      endX: 0,
      moveX:null
    };
  },
  mounted() {},
  methods: {
    gtouchstart(e) {
      //  e.preventDefault()
      console.log(e);
      this.flag = true;
      this.startX = e.touches[0].clientX;
      this.endX = this.$refs.container.offsetLeft;
    },
    gtouchmove(e) {
      if (this.flag) {
<<<<<<< HEAD
        // console.log(e)
        // console.log(this.$refs.container.left);
=======
        console.log(e)
        console.log(this.$refs.container.left);
>>>>>>> d1cc9285e884d54c1684ac036fe550836d822de8
      this.moveX = this.endX + (e.touches[0].clientX - this.startX);
        this.$refs.container.left = this.moveX +'px';
      }
    },
    gtouchend(e) {
      if (this.flag) {
        this.flag = false;
        // endX = slide.offsetLeft;
        console.log(e)
        // var moveX = e.changedTouches[0].clientX - this.startX; //计算滑动的距离
        // var ParentWidth = this.$refs.containerBox.offsetWidth; 
        console.log(this.$refs.containerBox)
        if(this.moveX > 0){
          this.$refs.containerBox.style.left = 0
        }
        else{
           this.$refs.containerBox.style.left = this.moveX - this.endX + 'px';

        }
       
        console.log(this.moveX - this.endX)
      }
    }
  }
};
</script>
<<<<<<< HEAD
=======
<style >
.containerBox{
  position: absolute;
}
.container {
  overflow: hidden;
  height: 18px;
}
.content {
  float: left;
  list-style: none;
  padding: 0 29px 0 0;
}
</style>
>>>>>>> d1cc9285e884d54c1684ac036fe550836d822de8
