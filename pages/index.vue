<!--
 * @Author: 刘霁雯
 * @Date: 2019-12-01 21:56:01
 * @LastEditTime: 2019-12-04 15:13:24
 * @LastEditors: Please set LastEditors
 * @Description: 登陆
 * @FilePath: \taodongdong\pages\pro.vue
 -->
<template style="overflow-y: hidden; overflow-x:hidden">
  <div class="loginWrapper">
    <div class="back-ground" style="overflow-y: hidden; z-index: -1">
      <div style="float: left">
        <el-carousel :interval="2000" arrow="never" height="100%">
          <el-carousel-item style="background-color: #fab6b6">
          </el-carousel-item>
          <el-carousel-item style="background-color: #ebb563">
          </el-carousel-item>
          <el-carousel-item style="background-color: #f599ae">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="float: left;margin-left: 20%">
        <el-carousel :interval="2700" arrow="never" height="100%">
          <el-carousel-item style="background-color: #9fddff">
          </el-carousel-item>
          <el-carousel-item style="background-color: #ffbee2">
          </el-carousel-item>
          <el-carousel-item style="background-color: #d19cdd">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="float: left;margin-left: 40%">
        <el-carousel :interval="2500" arrow="never" height="100%">
          <el-carousel-item style="background-color: #fffda7">
          </el-carousel-item>
          <el-carousel-item style="background-color: #c0ffd7">
          </el-carousel-item>
          <el-carousel-item style="background-color: #a7d0dd">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="float: left;margin-left: 60%">
        <el-carousel :interval="2200" arrow="never" height="100%">
          <el-carousel-item style="background-color: #ffccd9">
          </el-carousel-item>
          <el-carousel-item style="background-color: #ffe8c0">
          </el-carousel-item>
          <el-carousel-item style="background-color: #c4ddbd">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="float: left;margin-left: 80%">
        <el-carousel :interval="2800" arrow="never" height="100%">
          <el-carousel-item style="background-color: #d8ffee">
          </el-carousel-item>
          <el-carousel-item style="background-color: #ffe3f1">
          </el-carousel-item>
          <el-carousel-item style="background-color: #d8ddab">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <el-container style="height:100%">
      <el-header class="header-wrapper">
        <div class="logo">
          <img src="../assets/image/logo.png">
        </div>
        <div class="logoText">
          <img src="../assets/image/logot1.png">
        </div>
      </el-header>
      <!--标题-->
      <div style="margin-top:10%;background-color: transparent">
        <!--logo-->
        <div style="margin-top:5%;margin-left: 20%">
          <img src="../assets/image/logoText1.png">
        </div>
      </div>
      <!--按钮-->
      <div style="background-color: transparent">
        <!--登陆-->
        <div style="float: left;margin-left: 33%;margin-top:2%">
          <el-button type="primary" @click="login()"
                     style="width: 200%;border: solid 2px #fff;background-color: transparent;letter-spacing:10px;font-size: 18px;font-weight: bold"
                     onmouseover="this.style.backgroundColor='#fff';this.style.color='#161616'"
                     onmouseout="this.style.backgroundColor='transparent';this.style.color='#fff'"
                     round >登录</el-button>
        </div>
        <!--注册-->
        <div style="float: right;margin-right: 37%;margin-top:2%">
          <el-button type="primary" @click="register()"
                     style="width: 200%;border: solid 2px #fff;background-color: transparent;letter-spacing:10px;;font-size: 18px;font-weight: bold"
                     onmouseover="this.style.backgroundColor='#fff';this.style.color='#161616'"
                     onmouseout="this.style.backgroundColor='transparent';this.style.color='#fff'"
                     round >注册</el-button>
        </div>
      </div>

      <!--图标-->
      <div style="margin-top:10%;background-color: #ffffff">
        <!--店铺图标-->
        <div style="float: left;margin-left: 20%;margin-top:5%;width:200px;height:200px;border-radius: 50%;border: solid 1px #c4c4c4">
          <div style="margin-left: 36px;margin-top:25px;width:128px;height:128px" @click="login()">
            <img src="../assets/image/store.png">
            <div style="margin-left: 36px;background-color: black;height: 3px;width: 55px"></div>
          </div>
        </div>
        <!--用户图标-->
        <div style="float: right;margin-right: 20%;margin-top:5%;width:200px;height:200px;border-radius: 50%;border: solid 1px #070707">
          <div style="margin-left: 36px;margin-top:25px;width:128px;height:128px" @click="login()">
            <img src="../assets/image/buy.png">
            <div style="margin-left: 36px;background-color: black;height: 3px;width: 55px"></div>
          </div>
        </div>
      </div>
      <!--图标文字-->
      <div style="margin-top:0;background-color: #ffffff">
        <!--店铺文字-->
        <div style="float: left;margin-left: 23%;margin-top:2%">
           <span style="font-size: 31px;color: #424242">随心开店</span>
        </div>
        <!--用户文字-->
        <div style="float: right;margin-right: 23%;margin-top:2%;margin-bottom: 5%">
           <span style="font-size: 31px;color: #424242">随性购物</span>
        </div>
      </div>
      <div style="height: 2px">
        <el-divider></el-divider>
      </div>

      <!--经销商-->
      <div style="margin-top:0;background-color:#ffffff">
        <!--店铺图标-->
        <div style="float: left;margin-left: 10%;margin-top:5%;margin-bottom: 5%">
          <el-card style="border-radius: 30px" shadow="always">
             <img src="../assets/image/s1.jpg">
          </el-card>
        </div>
        <!--用户图标-->
        <div style="float: right;margin-right: 30%;margin-top:10%">
          <span style="font-size: 40px;letter-spacing:15px;">随心开店</span>
          <div style="margin-top: 3%">
            <span style="color:#c2c2c2;font-size: 20px;letter-spacing:15px">开个自己的小店</span>
          </div>
          <div style="margin-top: 3%">
            <span style="color:#c2c2c2;font-size: 20px;letter-spacing:15px">让生活换个‘资’态</span>
          </div>
          <div style="margin-top: 6%;letter-spacing:10px">
            <el-button style="letter-spacing:7px" type="text" @click="login()">了解更多></el-button>
          </div>
        </div>
      </div>
      <div style="height: 2px">
        <el-divider></el-divider>
      </div>

      <!--消费者-->
      <div style="margin-top:0;background-color: #ffffff">
        <!--店铺图标-->
        <div style="float: right;margin-right: 10%;margin-top:5%;margin-bottom: 5%">
          <el-card style="border-radius: 30px" shadow="hover">
            <img src="../assets/image/c.jpg">
          </el-card>
        </div>
        <!--用户图标-->
        <div style="float: left;margin-left: 20%;margin-top:10%">
          <span style="font-size: 40px;letter-spacing:15px;">随性购物</span>
          <div style="margin-top: 3%">
            <span style="color:#c2c2c2;font-size: 20px;letter-spacing:15px">千万好货</span>
          </div>
          <div style="margin-top: 3%">
            <span style="color:#c2c2c2;font-size: 20px;letter-spacing:15px">满足你的多彩生活</span>
          </div>
          <div style="margin-top: 6%">
            <el-button style="letter-spacing:7px" type="text" @click="login()">了解更多></el-button>
          </div>
        </div>
      </div>

      <!--底部-->
      <div style="margin-top:0;background-color: rgba(45,51,52,0.69)">
        <!--logo-->
        <div style="float: left;margin-left: 10%;margin-top:5%">
          <div style="float: left">
            <img src="../assets/image/buy.png">
          </div>
          <div style="float: right;margin-top: 12%">
            <span style="color: #ffffff;font-size: 15px">Copyright©2019 TAODD 淘东东项目组 版权所有</span>
          </div>
        </div>
        <!--二维码-->
        <div style="float: right;margin-right: 20%;margin-top:6%;margin-bottom: 5%">
          <div style="float: top">
            <img src="../assets/image/us.jpg">
          </div>
          <div style="float: bottom;margin-left: 8%">
            <span style="color: #ffffff">微信服务号</span>
          </div>
        </div>
      </div>
    </el-container>
    <div style="position: absolute; height: 2rem; bottom: 2rem">
    </div>
  </div>
</template>

<script>
import upload from '~/components/base/cliUpload.vue'
import SvgIcon from "../components/SvgIcon/index";
export default {
  components: {
    SvgIcon,
    upload
  },

  data () {
    return {
    }
  },

  methods: {
    login () {
      this.$router.push({path: `/login`})
    },
    register () {
      this.$router.push({path: `/register`})
    }
  }
}
</script>

<style scoped>
  .back-ground{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .back-ground>img{
    width: 100%;
    height: 100%;
  }

.header-wrapper {
  width: 100%;
  height: 80px;
  background-color: rgba(227, 227, 227, 0.4);
  font-size: 20px;
  position: fixed;
  overflow-y: hidden;
  z-index: 3;
}
.logo {
  float: left;
  margin-top: 5px;
}
  .logoText {
    float: left;
    margin-top: 10px;
  }
  .el-carousel{
    width: 20%;
    height: 100%;
    position: absolute;
  }
</style>

