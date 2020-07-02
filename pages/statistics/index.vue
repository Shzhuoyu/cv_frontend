<template>
    <div>
        <cli-title class="title"></cli-title>
        <div class="menu">
            <cli-menu page-index="3"></cli-menu>
        </div>
        <div class="center">
            <div>
                <el-row class="text" type="flex" justify="center">
                    <h3>敬老院</h3>
                </el-row>
                <el-row style="margin-bottom: 30px" type="flex" justify="center">
                    <el-col :span="15" class="card">
                        <el-row><img src="../../assets/image/elder.png" alt=""></el-row>
                        <el-row><span class="subtext">老人数量</span></el-row>
                        <el-row><el-button type="text" class="num">{{elderNum}}</el-button></el-row>
                    </el-col>
                    <el-col :span="15" class="card">
                        <el-row><img src="../../assets/image/people.png" alt=""></el-row>
                        <el-row><span class="subtext">工作人员数量</span></el-row>
                        <el-row><el-button type="text" class="num">{{staffNum}}</el-button></el-row>
                    </el-col>
                    <el-col :span="15" class="card">
                        <el-row><img src="../../assets/image/people.png" alt=""></el-row>
                        <el-row><span class="subtext">义工数量</span></el-row>
                        <el-row><el-button type="text" class="num">{{volunteerNum}}</el-button></el-row>
                    </el-col>
                </el-row>
            </div>
            <div class="Echarts">
                <el-row style="margin-left:50px; width: 1200px" type="flex" justify="space-between">
                    <el-col><all-pie ref="allPie"></all-pie></el-col>
                    <el-col><all-line ref="allLine"></all-line></el-col>
                </el-row>
                <el-row style="margin-left:50px; width: 1200px" type="flex" justify="space-between">
                    <el-col><fall ref="fall"></fall></el-col>
                    <el-col><smile ref="smile"></smile></el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import CliTitle from "../../components/base/cliTitle";
    import CliMenu from "../../components/base/cliMenu";
    import allPie from "../../components/chart/allPie";
    import allLine from "../../components/chart/allLine";
    import fall from "../../components/chart/fall";
    import smile from "../../components/chart/smile";
    import echarts from 'echarts';
    import Vue from 'vue'
    import GET from "../../api";

    Vue.prototype.$echarts = echarts;

    export default {
        name: "index",
        components: {allLine, CliTitle, CliMenu, allPie,fall,smile},
        data() {
            return {
                elderNum: 0,
                staffNum:0,
                volunteerNum: 0,
                allEventNum: '0',
            }
        },
        mounted() {
            this.getPeopleCount();
            this.getData();
        },
        methods: {
            getPeopleCount: function () {
                let data = {};
                GET.peopleCount(data).then(res => {
                    console.log(res);
                })
            },
            getData(){
                // this.$refs.allPie.setData(allPieData);
            }
        }
    }
</script>

<style scoped>
    @import "../../assets/css/page.css";
    .charts{
        width: 600px;
        height:400px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 30px;
    }

    .text {
        font-size: 20px;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .subtext {
        font-size: 16px;
        text-align: center;
    }

    .card {
        text-align: center;
        margin-top: 20px;
        width: 250px;
    }
</style>
