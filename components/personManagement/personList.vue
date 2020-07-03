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
                <el-avatar :src="imgURL+scope.row.profile_photo"></el-avatar>
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
                        @click="handleDetail(scope.row)">详情</el-button>
                <el-button
                        size="mini"
                        @click="handleEdit(scope.row)">编辑</el-button>
                <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
        <person-detail ref="detail"></person-detail>



    </div>

</template>

<script>
    import PersonDetail from "./personDetail";
    import DELETE from "../../api/DELETE";
    import Cookies from "js-cookie";
    import API_PRO from "../../api/API_PRO";
    export default {
        // props:{
        //   getData:{
        //       type:Function,
        //       default:null
        //   }
        // },
        name: "personList",
        components: {PersonDetail},
        data(){
            return{
                type:"0", //判断是老人还是员工还是义工
                imgURL:API_PRO.imageURL,

                tableData: [{

                }]
            }
        },
        methods:{
            handleDetail(item){
                let data = {
                    type: this.type,
                    edit: false
                }
                this.$refs.detail.setTypeEdit(data)
                this.$refs.detail.setData(item)
                this.$refs.detail.setVisible()


            },
            handleEdit(item){
                let data = {
                    type: this.type,
                    edit: true   //可编辑
                }
                this.$refs.detail.setTypeEdit(data)
                this.$refs.detail.setData(item)
                this.$refs.detail.setVisible()

            },
            setData(data){
                this.tableData = data
                console.log(this.tableData)
            },
            setType(type){
                this.type = type
            },
            handleDelete(item){
                this.$confirm('此操作将永久删除该人员, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let data = {
                        token:Cookies.get('token'),
                        id:item.id
                    }
                    if (this.type == '0'){
                        DELETE.oldPersonDetail(data).then(res=>{
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.$emit('getData');

                        })
                    }
                    else if (this.type == '1'){
                        DELETE.employeeDetail(data).then(res=>{
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.$emit('getData');
                        })
                    }
                    else {
                        DELETE.volunteerDetail(data).then(res=>{
                            this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.$emit('getData');
                        })
                    }
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });


            },
            getFuckingData(){
                this.$emit('getData');

            }

        }
    }
</script>

<style scoped>

</style>
