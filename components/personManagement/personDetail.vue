<template>
    <el-dialog
            :title="title"
            :visible.sync="centerDetailVisible"
            width="60%"
            center
    >
        <el-form :model="form">
            <el-form-item label="活动名称" label-width="600px">
                <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" label-width="70%">
                <el-select v-if="false" v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
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
                form:{name:''}



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
