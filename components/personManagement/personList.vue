<template>
    <div>
    <el-table
            :data="tableData"
            :stripe=true
            style="width: 90%">

        <el-table-column
                label="ID"
                width="80"
                prop="id"
        ></el-table-column>
        <el-table-column
                label="头像"
                width="180">
            <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.birthday}}</span>
            </template>
        </el-table-column>

        <el-table-column
                label="姓名"
                width="180"
                prop="username"
        ></el-table-column>

        <el-table-column
                label="性别"
                width="80"
                prop="gender"
        ></el-table-column>

        <el-table-column
                label="电话"
                width="180"
                prop="phone"
        ></el-table-column>

        <el-table-column
                label="生日"
                width="180">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.birthday}}</span>
            </template>
        </el-table-column>

        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button
                        size="mini"
                        @click="handleDetail(scope.$index, scope.row)">详情</el-button>
                <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
        <person-detail ref="detail"></person-detail>



    </div>

</template>

<script>
    import PersonDetail from "./personDetail";
    export default {
        name: "personList",
        components: {PersonDetail},
        data(){
            return{
                type:"0", //判断是老人还是员工还是义工

                tableData: [{

                }]
            }
        },
        methods:{
            handleDetail(){

                let data = {
                    type: this.type,
                    edit: false
                }
                this.$refs.detail.setTypeEdit(data)
                this.$refs.detail.setVisible()


            },
            handleEdit(){


                let data = {
                    type: this.type,
                    edit: true   //可编辑
                }
                this.$refs.detail.setTypeEdit(data)
                this.$refs.detail.setVisible()

            },
            handleDelete(){

            },
            setData(data){
                this.tableData = data
                console.log(this.tableData)
            },
            setType(type){
                this.type = type
            }

        }
    }
</script>

<style scoped>

</style>
