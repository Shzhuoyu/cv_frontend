<template>
    <el-dialog
            :title="title"
            :visible.sync="centerDetailVisible"
            width="60%"
            center
    >
        <div style="margin: 20px;"></div>
        <el-form :model="form"
                 label-width="120px"
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


            <el-form-item :label="checkInName">
                <el-input v-model="form.checkin_date" :disabled="!edit"></el-input>
            </el-form-item>

            <el-form-item :label="checkOutName">
                <el-input v-model="form.checkout_date" :disabled="!edit"></el-input>
            </el-form-item>

<!--            老人特有-->
        <div v-if="type==0">

            <el-form-item label="房间号" >
                <el-input v-model="form.room_number" :disabled="!edit"></el-input>
            </el-form-item>

            <el-form-item label="第一监护人姓名" >
                <el-input v-model="form.firstguardian_name" :disabled="!edit"></el-input>
            </el-form-item>

            <el-form-item label="与第一监护人关系" >
                <el-input v-model="form.firstguardian_relationship" :disabled="!edit"></el-input>
            </el-form-item>

            <el-form-item label="第一监护人电话" >
                <el-input v-model="form.firstguardian_phone" :disabled="!edit"></el-input>
            </el-form-item>

            <el-form-item label="第二监护人微信" >
                <el-input v-model="form.secondguardian_wechat" :disabled="!edit"></el-input>
            </el-form-item>

            <el-form-item label="第二监护人姓名" >
                <el-input v-model="form.secondguardian_namee" :disabled="!edit"></el-input>
            </el-form-item>

            <el-form-item label="与第二监护人关系" >
                <el-input v-model="form.secondguardian_relationship" :disabled="!edit"></el-input>
            </el-form-item>

            <el-form-item label="第二监护人电话" >
                <el-input v-model="form.secondguardian_phone" :disabled="!edit"></el-input>
            </el-form-item>

            <el-form-item label="第二监护人微信" >
                <el-input v-model="form.secondguardian_wechat" :disabled="!edit"></el-input>
            </el-form-item>

            <el-form-item label="健康状态" >
                <el-input v-model="form.health_state" :disabled="!edit"></el-input>
            </el-form-item>

        </div>

<!--            这里是大家公有的-->

            <el-form-item label="描述">
                <el-input v-model="form.DESCRIPTION" :disabled="!edit"></el-input>
            </el-form-item>
            <el-form-item label="是否有效">
                <el-input v-model="form.ISACTIVE" :disabled="!edit"></el-input>
            </el-form-item>
            <el-form-item label="创建时间">
                <el-input v-model="form.CREATED" :disabled="false"></el-input>
            </el-form-item>
            <el-form-item label="创建人">
                <el-input v-model="form.CREATEBY" :disabled="false"></el-input>
            </el-form-item>
            <el-form-item label="更新时间">
                <el-input v-model="form.UPDATED" :disabled="false"></el-input>
            </el-form-item>
            <el-form-item label="更新人">
                <el-input v-model="form.UPDATEBY" :disabled="false"></el-input>
            </el-form-item>
            <el-form-item label="删除标志">
                <el-input v-model="form.REMOVE" :disabled="!edit"></el-input>
            </el-form-item>

        </el-form>


  <span slot="footer" class="dialog-footer" v-if="edit">
      <el-button></el-button>
    <el-button style="position:absolute;left: 60px;bottom: 30px" @click="setHide">取 消</el-button>
    <el-button v-if="!add"  style="position:absolute;right: 60px;bottom: 30px" type="primary" @click="sendEdit">更新</el-button>
    <el-button v-if="add" style="position:absolute;right: 60px;bottom: 30px" type="primary" @click="sendAdd">添加</el-button>
  </span>

    </el-dialog>

</template>

<script>
    import POST from "../../api/POST";
    import PUT from "../../api/PUT";
    import Cookies from "js-cookie"
    import pro from "../../pages/pro";
    export default {
        name: "personDetail",
        data(){
            return{
                title:"",
                type:"",
                typeName:"",
                edit:false,
                add:false,
                checkInName:'',
                checkOutName:'',
                centerDetailVisible: false,
                form:{id: 1,
                    ORG_ID: null,
                    CLIENT_ID: null,
                    username: "",
                    gender: "",
                    phone: "",
                    id_card: "",
                    checkin_date:'',
                    checkout_data:'',
                    birthday: null,
                    room_number:'',
                    firstguardian_name:'',
                    firstguardian_relationship:'',
                    firstguardian_phone:'',
                    firstguardian_wechat:'',
                    secondguardian_name:'',
                    secondguardian_relationship:'',
                    secondguardian_phone:'',
                    secondguardian_wechat:'',
                    health_state:'',
                    DESCRIPTION:'',
                    ISACTIVE: '',
                    CREATED: null,
                    CREATEBY: null,
                    UPDATED: null,
                    UPDATEBY: null,
                    REMOVE:''
                }



            }
        },
        methods:{
            setVisible(){
                this.centerDetailVisible = true
            },
            setHide(){
                this.centerDetailVisible = false
            },
            setData(data){
                this.form = data
            },
            setAdd(){
              this.add = true;
              this.title = '添加'+this.typeName
            },
            fresh(){
                this.$parent.getFuckingData();
            },
            sendEdit(){
                for (let prop in this.form)
                {
                    if (this.form[prop] == null||this.form[prop] == ''){
                        delete this.form[prop]
                    }

                }
                let token = Cookies.get('token')
                this.form['token'] = token
                if (this.type == '0'){
                    PUT.oldPersonDetail(this.form).then(res=>{
                        this.$notify({
                            title: '提示',
                            message: '更新成功',
                        });
                        this.edit = false;
                        this.fresh()


                    })
                }
                else if (this.type == '1'){
                    PUT.employeeDetail(this.form).then(res=>{
                        this.$notify({
                            title: '提示',
                            message: '更新成功',
                        });
                        this.edit = false;
                        this.fresh()
                    })
                }
                else {
                    PUT.volunteerDetail(this.form).then(res=>{
                        this.$notify({
                            title: '提示',
                            message: '更新成功',
                        });
                        this.edit = false;
                        this.fresh()
                    })
                }


            },
            sendAdd(){
                // let token = Cookies.get('token')
                // this.form['token'] = token
                for (let prop in this.form)
                {
                    if (this.form[prop] == null||this.form[prop] == ''){
                        delete this.form[prop]
                    }
                }
                if (this.type == '0'){
                    POST.oldPersonList(this.form).then(res=>{
                        this.$notify({
                            title: '提示',
                            message: '添加成功',
                        });
                        this.edit = false;
                        this.$parent.getData();
                    })
                }
                else if (this.type == '1'){
                    POST.employeeList(this.form).then(res=>{
                        this.$notify({
                            title: '提示',
                            message: '添加成功',
                        });
                        this.edit = false;
                        this.$parent.getData();
                    })
                }
                else {
                    POST.volunteerList(this.form).then(res=>{
                        this.$notify({
                            title: '提示',
                            message: '添加成功',
                        });
                        this.edit = false;
                        this.$parent.getData();
                    })
                }


            },
            setTypeEdit(data){ //设置 种类及
                console.log(data)
                this.type = data.type;
                this.edit = data.edit;

                if (this.type == '0'){
                    this.typeName= '老人';
                    this.checkInName = '入养老院日期';
                    this.checkOutName = '离开养老院日期';
                }
                else if (this.type == '1'){
                    this.typeName = '员工';
                    this.checkInName = '入职日期';
                    this.checkOutName = '离职日期';
                }
                else {
                    this.typeName = "义工";
                    this.checkInName = '访问日期';
                    this.checkOutName = '离开日期';
                }
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
