<template>
    <el-card class="charts">
        <div id="fallBar" style="width: 600px;height:400px;"></div>
    </el-card>
</template>

<script>
    import echarts from 'echarts';
    import Vue from 'vue'

    Vue.prototype.$echarts = echarts;

    export default {
        name: "fall",
        data() {
            return {
                fellCount: [
                    ['王小林', 10],
                    ['孙小林', 7],
                    ['林子君', 5],
                    ['王大力', 3],
                    ['孙小虎', 2],
                ],
            }
        },
        mounted() {
            this.myEcharts3();
        },
        methods: {
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
            setData(data) {
                this.fellCount = data;
            }
        }
    }
</script>

<style scoped>

</style>