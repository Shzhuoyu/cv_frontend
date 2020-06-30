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
                <el-table
                        ref="filterTable"
                        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                        style="width: 100%">
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
                            label="地址"
                            :formatter="formatter">
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
                            :filters="[{ text: '微笑', value: '微笑' }, { text: '摔倒', value: '摔倒' }]"
                            :filter-method="filterTag"
                            filter-placement="bottom-end">
                        <template slot-scope="scope">
                            <el-tag
                                    :type="scope.row.tag === '微笑' ? 'primary' : 'success'"
                                    disable-transitions>{{scope.row.tag}}</el-tag>
                        </template>
                    </el-table-column>
                </el-table>
                <div style="margin-top: 50px; margin-right: 30px; float: right;">
                    <el-button type="success" round @click="resetDateFilter">清除日期过滤器</el-button>
                    <el-button type="primary" round @click="clearFilter">清除所有过滤器</el-button>
                </div>
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
                    date: '2020-07-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    tag: '微笑'
                }, {
                    date: '2020-07-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                    tag: '微笑'
                }, {
                    date: '2020-07-02',
                    name: '孙小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                    tag: '摔倒'
                }]
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
            }
        }
    }
</script>

<style scoped>
    @import "../../assets/css/page.css";
</style>
