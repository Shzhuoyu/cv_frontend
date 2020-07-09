<template>
    <div>
        <cli-title class="title"></cli-title>
        <div class="menu">
            <cli-menu page-index="5"></cli-menu>
        </div>
        <div class="center">
            <el-card style="margin-top: 20px">
                <div>
                    <span style="margin-right: 50px">主相机功能</span>
                    <el-radio-group v-model="radio" size="medium" @change="changeFunc">
                        <el-radio-button label="无"></el-radio-button>
                        <el-radio-button label="微笑检测"></el-radio-button>
                        <el-radio-button label="交互检测"></el-radio-button>
                        <el-radio-button label="摔倒检测"></el-radio-button>
                        <el-radio-button label="禁区入侵"></el-radio-button>
                    </el-radio-group>
                </div>
            </el-card>
        </div>
    </div>


</template>

<script>
    import CliTitle from "../../components/base/cliTitle";
    import CliMenu from "../../components/base/cliMenu";

    export default {
        name: "index",
        components: {CliTitle, CliMenu},
        data () {
            return {
                radio: '无',
            };
        },
        methods:{
            changeFunc:function(val){
                this.$confirm('确认更改主相机功能?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    // todo 更改相机功能
                    switch (val) {
                        case '无':
                            this.radio = '无';
                            break;
                        case '微笑检测':
                            this.radio = '微笑检测';
                            break;
                        case '交互检测':
                            this.radio = '交互检测';
                            break;
                        case '摔倒检测':
                            this.radio = '摔倒检测';
                            break;
                        case '禁区入侵':
                            this.radio = '禁区入侵';
                            break;
                    }
                    this.$message({
                        type: 'success',
                        message: '更改成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '更改删除'
                    });
                });
            },
        }
    }
</script>

<style scoped>
    @import "../../assets/css/page.css";

</style>
