<template>
    <el-card>
        <div style="margin-top: 20px; margin-bottom: 30px; text-align: center; font-size: 18px;">
            <span>入侵相关事件</span>
        </div>
        <el-table
                ref="filterTable"
                :data="eventData"
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
                            disable-transitions>{{scope.row.tag}}
                    </el-tag>
                </template>
            </el-table-column>
        </el-table>
        <div style="margin-top: 50px; margin-right: 30px; margin-bottom: 50px; float: right;">
            <el-button type="success" round @click="resetDateFilter">清除日期过滤器</el-button>
            <el-button type="primary" round @click="clearFilter">清除所有过滤器</el-button>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "intrusionEventList",
        data() {
            return {
                eventData: [],
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
            setData(data) {
                this.eventData = data;
            },
            eventShow(row, column, event) {
                console.log(row, column, event);
                // get Pic 事件ID为row.ID
            },
        },
    }
</script>

<style scoped>

</style>