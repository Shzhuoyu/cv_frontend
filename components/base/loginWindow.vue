<template>
    <el-dialog
            title="登入"
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

        </el-form>
        <span slot="footer" class="dialog-footer">
      <el-button></el-button>
    <el-button style="position:absolute;left: 60px;bottom: 30px" @click="setHide">取 消</el-button>
    <el-button style="position:absolute;right: 60px;bottom: 30px" type="primary" @click="login">登入</el-button>
  </span>
    </el-dialog>

</template>

<script>
    import POST from "../../api/POST";
    import Cookies from "js-cookie";
    export default {
        name: "loginWindow",
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
            },
            setHide(){
                this.centerVisible = false
            },
            login(){
                POST.login(this.form).then(res=>{
                    if (res.code == 200){
                        Cookies.set('token',res.token)
                        this.$notify({
                            title: '提示',
                            message: '登入成功',
                        });
                        this.$router.push({path: `/camera`})
                    }


                })
            }
        }
    }
</script>

<style scoped>

</style>
