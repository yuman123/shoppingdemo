<template>
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
      </ul>
    </div>
  </div>
</template>

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
        console.log(e)
        console.log(this.$refs.container.left);
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