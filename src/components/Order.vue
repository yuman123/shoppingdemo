<template>
  <div id="order">
    <mt-header :title="msg" style="background-color:#f9f9b4;color:black;"></mt-header>
    <!-- <input type="text" v-model="firstname">
    <input type="text" v-model="lastname">
    <input type="text" v-model="fullname" disabled>-->
    <ul>
      <li
        v-for="(item,i) in finallydata"
        :key="i"
        style="width:100%;float:left;padding-bottom:3px;"
        v-cloak
      >
        <img :src="item.picture" :alt="item.name" style="float:left;width:20%;" />
        <p style="text-align:left;">{{item.name}}  
    <el-switch v-model='item.choose' @change="chooseIt(item.id,item.choose)" class="switch"></el-switch>
 </p>
        <div style="font-size:13px;">
          <span>购买数量:</span>
          <el-button
            @click="reduce(item.id)"
            type="danger"
            size="mini"
            icon="el-icon-minus"
            style="padding:3px 6px;"
          ></el-button>
          <span style="color:#f60;dispaly:inline-block;padding:0 3px;">{{item.num}}</span>
          <el-button
            @click="add(item.id)"
            type="danger"
            style="padding:3px 6px;"
            icon="el-icon-plus"
          ></el-button>&nbsp;&nbsp;单价:
          <span style="color:#f60">{{item.price}}￥</span>总价:
          <b style="color:#f60">{{item.sum}}￥</b>
        </div>
        <el-button
          style="float:right;margin-right:2%;outline-style:none"
          type="info"
          size="mini"
          icon="el-icon-delete"
          @click="deletedit(item.id)"
        ></el-button>
      </li>
    </ul>
    <div style="clear:both;"></div>
    <div style="font-size: 17px;text-align:right;margin-top:5px;">
      合计:
      <b style="color:#f42;">{{totalprice}}￥</b>
      <el-button style="color:#000;background-color:yellow;" size="mini" plain>确认下单</el-button>
    </div>
  </div>
</template>
<style scoped>
[v-clock] {
  display: none;
}
.switch{
  float: right;
}
</style>
<script>
export default {
  data() {
    return {
      msg: "订单页",
      id: [], //接收的id
      newobj: {}, //包含数量和id(已去重)
      orderdata: [], //包含这个id下的所有数据
      finallydata: [] ,//整合以后的数据
      // firstname:'',
      // lastname:''
    };
  },
  computed: {
    // fullname(){
    //   return this.firstname + '-' + this.lastname
    // },
    totalprice() {
      //时时刻刻计算总价
      // if(this.finallydata.length >= 2){
      //   for(let k = 0;k < this.finallydata.length;k++){
      //       for(let m = 1;m < this.finallydata.length;m++){
      //          if(this.finallydata[k].id == this.finallydata[m].id){
      //            console.log('q')
      //       this.finallydata[k].num += this.finallydata[m].num;
      //     }
      //        this.finallydata.splice(m,1);
      //       }
      //   }

      // }
      this.id = this.$store.state.id; //接收id
      localStorage.setItem("productID", JSON.stringify(this.id));
      let sum = 0;
      for (let i = 0; i < this.finallydata.length; i++) {
        if(this.finallydata[i].choose){
         this.finallydata[i].sum =
          this.finallydata[i].price * this.finallydata[i].num;
        sum += this.finallydata[i].price * this.finallydata[i].num;
        }
        
      }
      localStorage.setItem("orderdatas", JSON.stringify(this.finallydata)); //本地存储
      return sum;
    }
  },
  watch: {
  },
  methods: {
    chooseIt(id,flag){
      console.log(id ,flag);
      let arr = JSON.parse(localStorage.getItem('orderdatas'));
      let index = arr.map(item =>item.id).indexOf(id);
      console.log(index)
      arr[index].choose = flag;
      console.log(arr)
     localStorage.setItem("orderdatas", JSON.stringify(arr)); //本地存储

    },

    async getorder() {
      await this.$http
        .get("/api/goods")
        .then(res => {
          if (res.status == 200) {
            for (let key in this.newobj) {
              console.log(key);
              one:for (let j = 0; j < res.data.data.food_spu_tags.length; j++) {
                two:for (
                  let i = 0;
                  i < res.data.data.food_spu_tags[j].spus.length;
                  i++
                ) {
                  if (key == res.data.data.food_spu_tags[j].spus[i].id) {
                    this.orderdata.push(res.data.data.food_spu_tags[j].spus[i]);
                    break one;//结束j层循环
                    break two;//结束i层循环
                 //break的作用是在找到一个以后跳出循环体，解决了在遍历到商品后后面遍历有同名商品显示重复的问题
                  }
            
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
    add(id) {
      //增加
      for (let i = 0; i < this.finallydata.length; i++) {
        if (id == this.finallydata[i].id) {
          this.finallydata[i].num++;
          this.$store.commit('setId',id); //直接增加vuex中的
        }
      }
    },
    reduce(id) {
      //减少
      for (let i = 0; i < this.finallydata.length; i++) {
        if (id == this.finallydata[i].id) {
          if (this.finallydata[i].num == 1) {
            //等于1时不进行操作也就是默认禁用
            this.finallydata[i].num = 1;
          } else {
            this.finallydata[i].num--;
            // var index = this.$store.state.id.indexOf(id.toString()); //更改vuex里面的数据可以对页面里的数据同样产生影响，获得所选取的id
            // // 传入的id是数值类型，indexOf()查找的是字符串类型，所以找不到返回-1
            // this.$store.state.id.splice(index, 1); //删除一个
            // console.log(this.$store.state.id);
            this.$store.commit('reduceId',id);//这样写更加符合vuex的标准
          }
        }
      }
    },
    deletedit(id) {
      //删除
      for (let i = 0; i < this.finallydata.length; i++) {
        if (id == this.finallydata[i].id) {
          this.finallydata.splice(i, 1);
        }
      }
      // for (let i = 0; i < this.$store.state.id.length; i++) {
      //   if (id == this.$store.state.id[i]) {
      //     this.$store.state.id.splice(i, 1);
      //     i--;
      //   }
      // }
      this.$store.commit('deleteId',id)
    },
    getorderdata() {
      for (let key in this.newobj) {
        //循环对象跟循环数组不同
        for (let i = 0; i < this.orderdata.length; i++) {
          //将一个数组和一个对象里的内容进行部分合并存入新数组里
          if (key == this.orderdata[i].id) {
            this.finallydata.push({
              num: this.newobj[key],
              picture: this.orderdata[i].picture,
              name: this.orderdata[i].name,
              id: this.orderdata[i].id,
              price: this.orderdata[i].min_price,
              sum: this.newobj[key] * this.orderdata[i].min_price,
              choose:false
            });
          }
        }
      }
    }
  },
  created() {
    console.log("ggggg");
    let newarr = JSON.parse(localStorage.getItem("orderdatas"));
    let sum = 0;
    for(let i = 0; i < newarr.length;i++){
      sum += parseInt(newarr[i].num)
    }
    if (sum == this.$store.state.id.length) {
      this.finallydata = JSON.parse(localStorage.getItem("orderdatas"));
    } else {
      for (let i = 0; i < this.$store.state.id.length; i++) {//新增的时候全部商品的选择状态都会变为true
        //数组去重并存入对象
        if (!this.newobj[this.$store.state.id[i]]) {
          this.newobj[this.$store.state.id[i]] = 1;
        } else {
          this.newobj[this.$store.state.id[i]]++;
        }
      }
    }
    console.log(this.newobj);
  },
  mounted() {
    this.getorder();
  }
};
</script>