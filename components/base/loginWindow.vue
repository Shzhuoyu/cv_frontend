<template>
    <div style="border-radius: 25px;">
        <el-dialog
                title="登入"
                :visible.sync="centerVisible"
                width="30%"
                center>
            <div style="margin: 20px;"></div>
            <div style="margin-left: 30px; margin-right: 30px">
                <el-form :model="form"
                         label-width="50px"
                         label-position="labelPosition"
                >
                    <el-form-item label="姓名">
                        <el-input v-model="form.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="form.password" show-password></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <div style="margin-top: 100px">
                <el-button style="position:absolute;left: 130px;bottom: 30px" @click="setHide">取 消</el-button>
                <el-button style="position:absolute;right: 130px;bottom: 30px" type="primary" @click="login">登入</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import POST from "../../api/POST";
    import Cookies from "js-cookie";

    export default {
        name: "loginWindow",
        data() {
            return {
                centerVisible: false,
                passwordAgain: '',
                form: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            setVisible() {
                this.centerVisible = true
            },
            setHide() {
                this.centerVisible = false
            },
            login() {
                POST.login(this.form).then(res => {
                    if (res.code === 200) {
                        Cookies.set('token', res.token);
                        this.$message({
                            type: 'success',
                            message: '登录成功！'
                        });
                        let info={
                            username: this.form.username,
                        };
                        Cookies.set('info', info);
                        this.$router.push({path: `/camera`});
                    } else {
                        this.$message({
                            type: 'info',
                            message: '登录失败，请检查用户名与密码是否正确。'
                        });
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
