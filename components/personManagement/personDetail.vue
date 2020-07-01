<template>
    <el-dialog
            :title="title"
            :visible.sync="centerDetailVisible"
            width="60%"
            center
    >
        <div style="margin: 20px;"></div>
        <el-form :model="form"
                 label-width="80px"
                 label-position="labelPosition"

        >

            <el-form-item label="姓名" >
                <el-input v-model="form.username" :disabled="!edit"></el-input>
            </el-form-item>

            <el-form-item label="性别">
                <el-select  v-model="form.gender" :disabled="!edit">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="身份证">
                <el-input v-model="form.id_card" :disabled="!edit"></el-input>
            </el-form-item>

            <el-form-item label="出生日期">
                <el-input v-model="form.birthday" :disabled="!edit"></el-input>
            </el-form-item>

            <el-form-item label="出生日期">  
                <el-input v-model="form.birthday" :disabled="!edit"></el-input>
            </el-form-item>

        </el-form>


  <span slot="footer" class="dialog-footer">
    <el-button @click="setHide">取 消</el-button>
    <el-button type="primary" @click="setHide">确 定</el-button>
  </span>

    </el-dialog>

</template>

<script>
    export default {
        name: "personDetail",
        data(){
            return{
                title:"",
                type:"",
                typeName:"",
                edit:false,
                centerDetailVisible: false,
                form:{id: 1,
                    ORG_ID: null,
                    CLIENT_ID: null,
                    username: "老人一号",
                    gender: "",
                    phone: "",
                    id_card: "350181199912231111",
                    birthday: null}



            }
        },
        methods:{
            setVisible(){
                this.centerDetailVisible = true
            },
            setHide(){
                this.centerDetailVisible = false
            },
            setTypeEdit(data){ //设置 种类及
                console.log(data)
                this.type = data.type;
                this.edit = data.edit;

                if (this.type == '0'){this.typeName= '老人' }
                else if (this.type == '1'){this.typeName = '员工'}
                else {this.typeName = "义工"}

                console.log(this.typeName)

                if (this.edit == true){
                    this.title = this.typeName+"编辑"
                }else {
                    this.title = this.typeName+"详情"
                }
            }
        }
    }
</script>

<style scoped>


</style>
<style>
    .el-input.is-disabled .el-input__inner{
        background-color: white;
        font-weight: bold;
        color: #777b83;
    }

</style>
