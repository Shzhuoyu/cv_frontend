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
                    <el-col><el-card class="charts"><div id="allPie" style="width: 600px;height:400px;"></div></el-card></el-col>
                    <el-col><el-card class="charts"><div id="allLine" style="width: 600px;height:400px;"></div></el-card></el-col>
                </el-row>
                <el-row style="margin-left:50px; width: 1200px" type="flex" justify="space-between">
                    <el-col><el-card class="charts"><div id="fallBar" style="width: 600px;height:400px;"></div></el-card></el-col>
                    <el-col><el-card class="charts"><div id="smileBar" style="width: 600px;height:400px;"></div></el-card></el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    import CliTitle from "../../components/base/cliTitle";
    import CliMenu from "../../components/base/cliMenu";
    import echarts from 'echarts';
    import Vue from 'vue'
    import GET from "../../api";

    Vue.prototype.$echarts = echarts;

    export default {
        name: "index",
        components: {CliTitle, CliMenu},
        data() {
            return {
                elderNum: 0,
                staffNum:0,
                volunteerNum: 0,
                allEventNum: '0',
                allEventCount: [['老人摔倒', 21],
                    ['老人微笑', 34],
                    ['老人互动', 24],
                    ['陌生人来访', 12],
                    ['禁区入侵', 4],],
                allEvent:[
                    ['07-01', 3, 2, 4, 6, 6],
                    ['07-02', 4, 2, 6, 8, 2],
                    ['07-03', 12, 24, 5, 6, 2, 6],
                    ['07-04', 8, 3, 5, 7, 2],
                    ['07-05', 4, 3, 5, 7, 2],
                    ['07-06', 8, 2, 4, 6, 7],
                    ['07-07', 12, 2, 4, 7, 2],
                ],
                fellCount: [
                    ['王小林', 10],
                    ['孙小林', 7],
                    ['林子君', 5],
                    ['王大力', 3],
                    ['孙小虎', 2],
                ],
                smileCount: [
                    ['孙小虎', 12],
                    ['林子君', 7],
                    ['陈实', 6],
                    ['王大力', 5],
                    ['孙小林', 4],
                ]
            }
        },
        mounted() {
            // get all data
            this.getPeopleCount();
            this.myEcharts1();
            this.myEcharts2();
            this.myEcharts3();
            this.myEcharts4();
        },
        methods: {
            getPeopleCount: function () {
                let data = {};
                GET.peopleCount(data).then(res => {
                    console.log(res);
                })
            },
            myEcharts1() {
                // 基于准备好的dom，初始化echarts实例
                var myChart1 = this.$echarts.init(document.getElementById('allLine'));
                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '事件总览',
                    },
                    tooltip: {},
                    legend: {
                        data: ['事件数量']
                    },
                    xAxis: {type: 'category'},
                    yAxis: {},
                    dataset: {
                        source: this.allEvent
                    },
                    series: [{
                        name: '摔倒',
                        type: 'line',
                        encode: {x: 0, y: 1},
                    }, {
                        name: '微笑',
                        type: 'line',
                        encode: {x: 0, y: 2},
                    }, {
                        name: '互动',
                        type: 'line',
                        encode: {x: 0, y: 3},
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart1.setOption(option);
            },
            myEcharts2() {
                // 基于准备好的dom，初始化echarts实例
                var myChart2 = this.$echarts.init(document.getElementById('allPie'));
                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '周事件总览',
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: " {b},{c} "
                    },
                    graphic: {
                        type: "group",
                        top: "middle",
                        left: "center",
                        height: 80,
                        children: [
                            {
                                type: "text",
                                left: "center",
                                top: "30%",
                                style: {
                                    text: "本周总事件",
                                    textAlign: "center",
                                    textVerticaAlign: "middle",
                                    fill: "#999",
                                    font: "15px 'Helvetica',sans-serif"
                                }
                            },
                            {
                                type: "text",
                                top: "60%",
                                left: "center",
                                position: [0, 10],
                                style: {
                                    text: this.allEventNum,
                                    textAlign: "center",
                                    textVerticaAlign: "middle",
                                    fill: "#3d383a",
                                    font: "22px 'Helvetica',sans-serif"
                                }
                            }
                        ]
                    },
                    dataset: {
                        source: this.allEventCount
                    },
                    series: [{
                        type: 'pie',
                        radius: ['30%', '50%'],
                        encode: {itemName: 0, value: 1},
                        labelLine: {    //图形外文字线
                            normal: {
                                length: 35,
                                length2: 80
                            }
                        },
                        label: {
                            normal: {
                                formatter: ' {c|{c}}  \n',       //图形外文字上下显示
                                borderWidth: 20,
                                borderRadius: 4,
                                padding: [0, -80],          //文字和图的边距
                                rich: {
                                    c: {                   //value 文字样式
                                        fontSize: 16,
                                        lineHeight: 10,
                                        color: '#4c5052',
                                        align: "center"
                                    }
                                }
                            }
                        },
                    }]
                };

                // 使用刚指定的配置项和数据显示图表。
                myChart2.setOption(option);
            },
            myEcharts3() {
                // 基于准备好的dom，初始化echarts实例
                var myChart3 = this.$echarts.init(document.getElementById('fallBar'));
                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '摔倒排行',
                    },
                    xAxis: {type: 'category'},
                    yAxis: {},
                    dataset: {
                        source: this.fellCount
                    },
                    series: [{
                        name: '摔倒',
                        type: 'bar',
                        encode: {x: 0, y: 1},
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart3.setOption(option);
            },
            myEcharts4() {
                // 基于准备好的dom，初始化echarts实例
                var myChart4 = this.$echarts.init(document.getElementById('smileBar'));
                // 指定图表的配置项和数据
                var option = {
                    title: {
                        text: '微笑排行',
                    },
                    xAxis: {type: 'category'},
                    yAxis: {},
                    dataset: {
                        source: this.smileCount
                    },
                    series: [{
                        name: '微笑',
                        type: 'bar',
                        encode: {x: 0, y: 1},
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                myChart4.setOption(option);
            },
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
