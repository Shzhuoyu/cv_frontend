<!--
 * @Author: 刘霁雯
 * @Date: 2019-12-01 21:56:01
 * @LastEditTime: 2019-12-04 14:20:56
 * @LastEditors: Please set LastEditors
 * @Description: 登陆
 * @FilePath: \taodongdong\pages\pro.vue
 -->
<template style="overflow-y: hidden; overflow-x:hidden ">
  <div class="loginWrapper">
    <div class="back-ground" style="overflow-y: hidden; z-index: -1">
      <img src="../assets/image/p2.jpg">
    </div>
    <el-card class = card style="background-color: transparent;padding: 30px" shadow="always">
      <h1 style="font-size: 40px;margin-top: 10px;margin-bottom: 30px;color: rgba(22,22,22,0.7)">TAODD</h1>
      <el-form :model="loginForm" :rules="loginRule" ref="loginForm" :label-position="labelPosition">
        <el-form-item  prop="phone">
          <el-input v-model="loginForm.phone" placeholder="手机号" @keyup.enter.native="submitForm('loginForm')"></el-input>
        </el-form-item>
        <el-form-item prop="pwd" style="margin-top: 20px;margin-bottom: 0px">
          <el-input v-model="loginForm.pwd" placeholder="密码" type="password" @keyup.enter.native="submitForm('loginForm')"></el-input>
        </el-form-item>
        <el-form-item style="margin-top: 30px">
          <el-button type="primary" @click="submitForm('loginForm')" class="submitBtn"
                     onmouseover="this.style.backgroundColor='transparent';this.style.color='#fff'"
                     onmouseout="this.style.backgroundColor='#ff7a88';this.style.color='#fff'"
                     round >登录</el-button>
        </el-form-item>
        <el-button type="text" class="register" @click="register()">注册</el-button>
      </el-form>
    </el-card>
    <div style="position: absolute; height: 2rem; bottom: 2rem">
    </div>
  </div>
</template>

<script>
import { isvalidNull, isMobile } from "../components/util";
import Cookie from 'js-cookie'
import API from "../api"
import POST from "../api/POST"
export default {
  components: {
  },

  data () {
    var validateRole = (rule, value, callback) => {
      if (isvalidNull(value)) {
        callback(new Error('角色不能为空'))
      } else {
        callback()
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (isvalidNull(value)) {
        callback(new Error('密码不能为空'))
      } else {
        callback()
      }
    }
    var validatePhone = (rule, value, callback) => {
      if (!isMobile(value)) {
        callback(new Error('联系方式格式不正确'))
      } else {
        callback()
      }
    }
    return {
      loadingLogin: false,
      labelPosition: 'left',
      loginForm: {
        phone: '',
        pwd: '',
        role: ''
      },
      loginRule: {
        phone: [
          { required: true, trigger: 'blur', validator: validatePhone }
        ],
        pwd: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ],
        role: [
          { required: true, trigger: 'change', validator: validateRole }
        ]
      }
    }
  },

  methods: {
    async submitForm (loginForm) {
        let data = {
            account: this.loginForm.phone,
            password: this.loginForm.pwd
        }
        POST.login(data).then(res => {
            if (res.code === 200) {//如果验证通过
                Cookie.set('token', res.token);
                Cookie.set('role', res.role);
                Cookie.set('account',res.account)



                this.jump()
            } else {
                alert('手机号或密码错误')
            }
        })
    },
      jump(){
          if(Cookie.get('role')==='manager'){
                    this.$router.push({path:`/admin`})
                  }
                  else if(Cookie.get('role')==='saler'){
                    this.$router.push({path: `/saler/order/new`})
                    //this.$router.push({path: `/store`})
                  }
                  else if(Cookie.get('role')==='customer'){
                    this.$router.push({path: `/customer/home/init`})
                  }
            },


      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     if(this.loginForm.role==='1'){
      //       this.$router.push({path:`/admin`})
      //     }
      //     else if(this.loginForm.role==='2'){
      //       this.$router.push({path: `/saler/sellRecord/sellingRecord`})
      //       //this.$router.push({path: `/store`})
      //     }
      //     else if(this.loginForm.role==='3'){
      //       this.$router.push({path: `/customer/home/init`})
      //     }
      //   } else {
      //     console.log('error submit!!')
      //   }
      // })

    register () {
      this.$router.push({path: `/register`})
    }
  }
}
</script>

<style scoped>
  .card{
    width: 30%;
    height: 380px;
    position: absolute;
    top:15%;
    right: 0;
    left: 0;
    margin: auto;
  }

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

  .register{
    padding: 0;
    float: right;
    color: #fff;
  }

  .submitBtn{
    width: 100%;
    border-radius: 20px;
    margin-bottom: 0px;
    border:solid 2px #ffffff;
    background-color: #ff7a88;
  }
</style>

