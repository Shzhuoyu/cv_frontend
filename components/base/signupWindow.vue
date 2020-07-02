<template>
    <el-dialog
            title="注册"
            :visible.sync="centerVisible"
            width="60%"
            center>
        <div style="margin: 20px;"></div>
        <el-form :model="form"
                 label-width="120px"
                 label-position="labelPosition"
        >
            <el-form-item label="姓名" >
                <el-input v-model="form.username" ></el-input>
            </el-form-item>
            <el-form-item label="密码" >
                <el-input v-model="form.password" show-password></el-input>
            </el-form-item>
            <el-form-item label="再次输入密码" >
                <el-input v-model="passwordAgain" show-password></el-input>
            </el-form-item>

        </el-form>
        <span slot="footer" class="dialog-footer">
      <el-button></el-button>
    <el-button style="position:absolute;left: 60px;bottom: 30px" @click="setHide">取 消</el-button>
    <el-button style="position:absolute;right: 60px;bottom: 30px" type="primary" @click="signUp">注册</el-button>
  </span>
    </el-dialog>

</template>

<script>
    import POST from "../../api/POST";
    export default {
        name: "signupWindow",
        data(){
            return{
                centerVisible:false,
                passwordAgain:'',
                form:{
                    username:'',
                    password:''
                }
            }
        },
        methods:{
            setVisible(){
                this.centerVisible = true
                console.log('come out')
            },
            setHide(){
                this.centerVisible = false
            },
            signUp(){
                POST.signUp(this.form).then(res=>{

                })
            }
        }
    }
</script>

<style scoped>

</style>
