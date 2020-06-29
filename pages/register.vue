<!--
 * @Author: 刘霁雯
 * @Date: 2019-12-01 21:56:01
 * @LastEditTime: 2019-12-02 15:39:08
 * @LastEditors: Please set LastEditors
 * @Description: 登陆
 * @FilePath: \taodongdong\pages\register.vue
 -->
<template style="overflow-y: hidden; overflow-x:hidden ">
  <div class="loginWrapper">
    <div class="back-ground" style="overflow-y: hidden; z-index: -1">
      <img src="../assets/image/p2.jpg">
    </div>
    <el-card class="stepCard" style="background-color: rgba(256,256,256,0.7)" shadow="always">
      <el-steps :active="active" finish-status="success">
        <el-step title="身份选择"></el-step>
        <el-step title="账号设置"></el-step>
        <el-step title="个人信息"></el-step>
      </el-steps>
    </el-card>

    <!-- 身份选择 -->
    <div v-loading="roleLoading" v-if="active==0" style='margin-top:20px'>
      <el-card class="roleCard" shadow="hover">
        <div style="float:left;margin-left: 15%"><img src="../assets/image/storeR.png"></div>
        <div style="float:right;margin-right: 15%"><img src="../assets/image/buyR.png"></div>
        <el-form :model="roleForm" :rules="roleRule" ref="roleForm" :label-position="labelPosition" @keyup.enter.native="roleNext()">
          <el-form-item  prop="role" style="margin-left: 13%;margin-top: 30px">
            <el-radio-group v-model="roleForm.role">
              <el-radio label=1>我要开店铺！</el-radio>
              <el-radio label=2>我就买买买！</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item style="margin-left: 10%;margin-top: 0px">
            <el-button type="text" class="nextButton" @click="roleNext()">下一步</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>

    <!-- 消费者账号设置 -->
    <div v-loading="accountLoading" v-if="active==1&&this.roleForm.role==='2'" style="margin-top:20px">
      <el-card class="accountCard" shadow="hover">
        <div style="float:left;margin-left: 5%">
          <img src="../assets/image/buyR.png">
        </div>
        <div style="float:right;margin-top:5%;margin-right: 20%;letter-spacing:10px">
          <span style="font-size: 20px">随性购物</span>
        </div>
        <el-form :model="accountForm" :rules="accountRule" ref="accountForm" :label-position="labelPosition" @keyup.enter.native="accountNext()">
          <el-form-item  prop="name" style="margin-top: 20px;margin-bottom: 0px">
            <el-input v-model="accountForm.name" placeholder="昵称"></el-input>
          </el-form-item>
          <el-form-item prop="pwd" style="margin-top: 20px">
            <el-input type="password" v-model="accountForm.pwd" placeholder="密码"></el-input>
          </el-form-item>
          <el-button type="text" class="nextButton" @click="accountNext()">下一步</el-button>
        </el-form>
      </el-card>
    </div>

    <!-- 经销商账号设置 -->
    <div v-loading="accountLoading" v-if="active==1&&this.roleForm.role==='1'" style="margin-top:20px">
      <el-card class="accountCard" shadow="hover">
        <div style="float:left;margin-left: 5%">
          <img src="../assets/image/storeR.png">
        </div>
        <div style="float:right;margin-top:5%;margin-right: 20%;letter-spacing:10px">
          <span style="font-size: 20px">随心开店</span>
        </div>
        <el-form :model="accountForm" :rules="accountRule" ref="accountForm" :label-position="labelPosition" @keyup.enter.native="accountNext()">
          <el-form-item  prop="name" style="margin-top: 20px;margin-bottom: 0px">
            <el-input v-model="accountForm.name" placeholder="店铺名称"></el-input>
          </el-form-item>
          <el-form-item prop="pwd" style="margin-top: 20px">
            <el-input type="password" v-model="accountForm.pwd" placeholder="密码"></el-input>
          </el-form-item>
          <el-button type="text" class="nextButton" @click="accountNext()">下一步</el-button>
        </el-form>
      </el-card>
    </div>

    <!-- 个人信息 -->
    <div v-loading="personLoading" v-if="active==2" style="margin-top:20px">
      <el-card class="personCard" shadow="hover">
        <el-form :model="personForm" :rules="personRule" ref="personForm" :label-position="labelPosition" @keyup.enter.native="register()">
          <el-form-item  prop="phone">
            <el-input v-model="personForm.phone" placeholder="联系方式"></el-input>
          </el-form-item>
          <el-form-item  prop="address" style="margin-top: 20px;margin-bottom: 0px">
            <el-input type="textarea"  v-model="personForm.address" placeholder="详细地址"></el-input>
          </el-form-item>
          <el-form-item style="margin-top: 20px">
          <el-button type="primary" class="registerBtn" @click="register()"
                     onmouseover="this.style.backgroundColor='transparent';this.style.color='#494949'"
                     onmouseout="this.style.backgroundColor='#ff7a88';this.style.color='#fff'"
                     round>注册</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>

    <div style="position: absolute; height: 2rem; bottom: 2rem">
    </div>
  </div>
</template>

<script>
import upload from '~/components/base/cliUpload.vue'
import axios from 'axios'
import Cookies from 'js-cookie';
import Pro from '../api/API_PRO'
import API from '../api'
import POST from '../api/POST'
import { getBrowser, isvalidNull, isMobile } from "../components/util";


export default {
  components: {
    upload
  },

  data () {
    var validateRole = (rule, value, callback) => {
      if (isvalidNull(value)) {
        callback(new Error('角色不能为空'))
      } else {
        callback()
      }
    }
    var validateName = (rule, value, callback) => {
      if (isvalidNull(value)) {
        callback(new Error('昵称不能为空'))
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
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      active: 0,
      // 角色选择
      // roleLoading = false,
      roleForm: {
        role: ''
      },
      roleRule: {
        role: [
          { required: true, trigger: 'change', validator: validateRole }
        ]
      },
      // 账号设置
      // accountLoading = false,
      accountForm: {
        name: '',
        pwd: ''
      },
      accountRule: {
        name: [
          { required: true, trigger: 'blur', validator: validateName }
        ],
        pwd: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      },
      // 个人信息
      // personLoading = false,
      personForm: {
        phone: '',
        address: ''
      },
      personRule: {
        phone: [
          { required: true, trigger: 'blur', validator: validatePhone }
        ]
      }
    }
  },

  methods: {
    lastStep () {
      if (this.active === 1) {
        this.active = 0 // 返回上一步
      }
      else if (this.active === 2) {
        this.active = 1 // 返回上一步
      }
    },
    roleNext () {
      this.$refs.roleForm.validate(valid => {
        if (valid) {
          if (this.active++ > 2) this.active = 0;
          // this.roleLoading = true
        } else {
          console.log('error submit!!')
        }
      })
    },
    accountNext () {
      this.$refs.accountForm.validate(valid => {
        if (valid) {
          if (this.active++ > 2) this.active = 0;
          // this.accountLoading = true
        } else {
          console.log('error submit!!')
        }
      })
    },
    register () {
      this.$refs.personForm.validate(valid => {
        if (valid) {
          if(this.roleForm.role === '2' ) {
            let data = {
              customeraccount:this.personForm.phone,
              password:this.accountForm.pwd,
              customername:this.accountForm.name,
              phone:this.personForm.phone,
              address:this.personForm.address,
              balance:0
            };
            POST.usersignup(data).then(res=>{
              if(res.code === 200){
                this.$router.push('/login')
                this.$message({
                  message: '注册成功',
                  type: 'success'
                })
              }
            }).catch(res=>{
              alert(res.message)
            })
          }else {
            let data = {
              saleraccount:this.personForm.phone,
              password:this.accountForm.pwd,
              storename:this.accountForm.name,
              phone:this.personForm.phone,
              address:this.personForm.address,
              balance:'0',
              score:5
            };
            POST.salersignup(data).then(res=>{
              if(res.code === 200){
                this.$router.push('/login')
                this.$message({
                  message: '注册成功',
                  type: 'success'
                })
              }
              else {
                alert(res.message)
              }
            }).catch(res=>{
              alert(res.message)
            })
          }

        } else {
          console.log('error submit!!')
        }
      })
    }
  }
}
</script>

<style scoped>
 .stepCard{
    width: 50%;
    height: 80%;
    position: absolute;
    top:10%;
    right: 0;
    left: 0;
    margin: auto;
  }

  .roleCard{
    width: 30%;
    height: 35%;
    position: absolute;
    top:35%;
    right: 0;
    left: 0;
    margin: auto;
  }

  .accountCard{
    width: 30%;
    height: 50%;
    position: absolute;
    top:30%;
    right: 0;
    left: 0;
    margin: auto;
  }

  .personCard{
    width: 30%;
    height: 40%;
    position: absolute;
    top:30%;
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

  .nextButton{
    padding: 0px;
    float: right;
    color: black;
  }

 .registerBtn{
   width: 100%;
   border-radius: 20px;
   margin-bottom: 0px;
   background-color: #ff7a88;
   border:solid 2px #ff7a88;
 }
</style>

