<template>
    <div>
        <div style="width: 100%;height: 70px;background-color: white;box-shadow: 262px 5px 5px #e2e2e2;">
        <img src="../../assets/image/text.png"
             style="width: 50%; margin-left: 10px; margin-top: 20px" alt="">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
                 style="position: absolute; right: 0; top: 10px">
            <el-submenu index="1">
                <template slot="title">下午好，{{info.name}}</template>
                <el-menu-item index="1-1" @click="toInfo">修改信息</el-menu-item>
                <el-menu-item index="1-3" @click="logOut">退出登入</el-menu-item>
            </el-submenu>
        </el-menu>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cliTitle",
        data() {
            return {
                info: {
                    name: "管理员",
                },
                activeIndex: '1',
            }
        },
        methods: {
            toInfo() {
                this.$router.push({path: `/setting`});
            },
            logOut() {
                // this.logined = false;
                Cookies.set('info', null);
                this.$router.push({path: `/`})
            },
        }
    }
</script>

<style scoped>

</style>
