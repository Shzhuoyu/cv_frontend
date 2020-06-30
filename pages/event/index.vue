<template>
    <el-container>
        <el-header>
            <cli-title class="title"></cli-title>
        </el-header>
        <el-main>
            <div class="menu">
                <cli-menu></cli-menu>
            </div>
            <div class="center">
                <el-card>
                    <div style="margin-top: 20px; margin-bottom: 30px; text-align: center; font-size: 18px;">
                        <span>老人相关事件</span>
                    </div>
                    <el-table
                            ref="filterTable"
                            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                            stripe
                            @row-dblclick="eventShow"
                            style="width: 100%">
                        <el-table-column
                                prop="ID"
                                label="ID"
                                width="80">
                        </el-table-column>
                        <el-table-column
                                prop="date"
                                label="日期"
                                sortable
                                width="180"
                                column-key="date"
                                :filters="[{text: '2020-07-02', value: '2020-07-02'}, {text: '2020-07-01', value: '2020-07-01'}]"
                                :filter-method="filterHandler"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="name"
                                label="老人姓名"
                                width="180">
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="事件发生地点"
                                :formatter="formatter">
                        </el-table-column>
                        <el-table-column
                                prop="description"
                                label="事件描述">
                        </el-table-column>
                        <el-table-column>
                            <template slot="header" slot-scope="scope">
                                <el-input
                                        v-model="search"
                                        size="mini"
                                        placeholder="输入老人姓名搜索"/>
                            </template>
                        </el-table-column>
                        <el-table-column
                                prop="tag"
                                label="事件"
                                width="100"
                                :filters="[{ text: '微笑', value: '微笑' }, { text: '摔倒', value: '摔倒' }, { text: '交互', value: '交互' }]"
                                :filter-method="filterTag"
                                filter-placement="bottom-end">
                            <template slot-scope="scope">
                                <el-tag
                                        :type="scope.row.tag === '摔倒' ? 'danger' : (scope.row.tag === '交互' ? 'success' : 'primary')"
                                        disable-transitions>{{scope.row.tag}}</el-tag>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div style="margin-top: 50px; margin-right: 30px; margin-bottom: 50px; float: right;">
                        <el-button type="success" round @click="resetDateFilter">清除日期过滤器</el-button>
                        <el-button type="primary" round @click="clearFilter">清除所有过滤器</el-button>
                    </div>
                </el-card>
                <div style="margin-top: 30px"></div>
                <el-card>
                    <div style="margin-top: 20px; margin-bottom: 30px; text-align: center; font-size: 18px;">
                        <span>入侵相关事件</span>
                    </div>
                    <el-table
                            ref="filterTable"
                            :data="eventData"
                            stripe
                            @row-dblcick="eventShow"
                            style="width: 100%">
                        <el-table-column
                                prop="ID"
                                label="ID"
                                width="80">
                        </el-table-column>
                        <el-table-column
                                prop="date"
                                label="日期"
                                sortable
                                width="180"
                                column-key="date"
                                :filters="[{text: '2020-07-02', value: '2020-07-02'}, {text: '2020-07-01', value: '2020-07-01'}]"
                                :filter-method="filterHandler"
                        >
                        </el-table-column>
                        <el-table-column
                                prop="address"
                                label="事件发生地点"
                                :formatter="formatter">
                        </el-table-column>
                        <el-table-column
                                prop="description"
                                label="事件描述">
                        </el-table-column>
                        <el-table-column
                                prop="tag"
                                label="事件"
                                width="200"
                                :filters="[{ text: '禁止区域入侵', value: '禁止区域入侵' }, { text: '陌生人来访', value: '陌生人来访' }]"
                                :filter-method="filterTag"
                                filter-placement="bottom-end">
                            <template slot-scope="scope">
                                <el-tag
                                        :type="scope.row.tag === '禁止区域入侵' ? 'danger' : 'warning'"
                                        disable-transitions>{{scope.row.tag}}</el-tag>
                            </template>
                        </el-table-column>
                    </el-table>
                    <div style="margin-top: 50px; margin-right: 30px; margin-bottom: 50px; float: right;">
                        <el-button type="success" round @click="resetDateFilter">清除日期过滤器</el-button>
                        <el-button type="primary" round @click="clearFilter">清除所有过滤器</el-button>
                    </div>
                </el-card>
            </div>
        </el-main>
        <el-footer></el-footer>
    </el-container>
</template>

<script>
    import CliTitle from "../../components/base/cliTitle";
    import CliMenu from "../../components/base/cliMenu";

    export default {
        name: "index",
        components: {CliTitle, CliMenu},
        data() {
            return {
                search: '',
                tableData: [{
                    ID: '0',
                    date: '2020-07-01',
                    name: '王小虎',
                    address: '敬老院xxx房间',
                    description: '老人微笑了',
                    tag: '微笑'
                }, {
                    ID: '1',
                    date: '2020-07-02',
                    name: '王小虎',
                    address: '敬老院xxx房间',
                    description: '老人微笑了',
                    tag: '微笑'
                }, {
                    ID: '2',
                    date: '2020-07-02',
                    name: '孙小虎',
                    address: '敬老院xxx房间',
                    description: '老人摔倒了',
                    tag: '摔倒'
                }, {
                    ID: '3',
                    date: '2020-07-02',
                    name: '孙小虎',
                    address: '敬老院xxx房间',
                    description: '老人和义工交互了',
                    tag: '交互'
                }],
                eventData: [{
                    ID: '6',
                    date: '2020-07-01',
                    address: '敬老院xxx走廊',
                    description: '禁止区域入侵',
                    tag: '禁止区域入侵',
                }, {
                    ID: '5',
                    date: '2020-07-01',
                    address: '敬老院xxx房间',
                    description: '陌生人来访',
                    tag: '陌生人来访',
                }],
            }
        },
        methods: {
            resetDateFilter() {
                this.$refs.filterTable.clearFilter('date');
            },
            clearFilter() {
                this.$refs.filterTable.clearFilter();
            },
            formatter(row, column) {
                return row.address;
            },
            filterTag(value, row) {
                return row.tag === value;
            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            },
            eventShow(row, column, event){
                console.log(row, column, event);
                // get Pic 事件ID为row.ID
            },
        }
    }
</script>

<style scoped>
    @import "../../assets/css/page.css";
</style>
