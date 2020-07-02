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
    </el-container>
    <div style="position: absolute; height: 2rem; bottom: 2rem">
    </div>
    <login-window ref="login"></login-window>
    <signup-window ref="signup"> </signup-window>

  </div>
</template>

<script>
import upload from '~/components/base/cliUpload.vue'
import SvgIcon from "../components/SvgIcon/index";
import SignupWindow from "../components/base/signupWindow";
import LoginWindow from "../components/base/loginWindow";
export default {
  components: {
    LoginWindow,
    SignupWindow,
    SvgIcon,
    upload
  },

  data () {
    return {
    }
  },

  methods: {
    login () {
      this.$refs.login.setVisible()

    },
    register () {
      console.log('212')
      this.$refs.signup.setVisible()
      // this.$router.push({path: `/register`})
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

