<template>
    <div>
    <cli-title class="title"></cli-title>
    <cli-menu class="menu"></cli-menu>
        <div class="center">
            <el-tabs v-model="type" type="card" @tab-click="handleClick">
                <el-tab-pane label="老人管理" name="0">
                    <person-list ref="oldList"></person-list>
                </el-tab-pane>
                <el-tab-pane  label="工作人员" name="1">
                    <person-list ref="employList"></person-list>
                </el-tab-pane>
                <el-tab-pane label="义工管理" name="2">
                    <person-list ref="volList"></person-list>
                </el-tab-pane>

            </el-tabs>

        </div>
    </div>


</template>

<script>
    import CliTitle from "../../components/base/cliTitle";
    import CliMenu from "../../components/base/cliMenu";
    import PersonList from "../../components/personManagement/personList";
    import GET from "../../api";
    export default {
        name: "index",
        components: {PersonList, CliMenu, CliTitle},
        data(){
            return{
                type:'0'
            }
        },
        methods:{
            handleClick() {
                console.log(this.type);
                this.getData()
            },
            getData(){
                if(this.type == '0' ){
                    GET.oldPersonList().then(res=>{
                        this.$refs.oldList.setData(res)
                        this.$refs.oldList.setType(this.type)
                    })

                }
                else if (this.type == '1'){
                    console.log('我佛了')
                    GET.employeeList().then(res=>{
                        this.$refs.employList.setData(res);
                        this.$refs.employList.setType(this.type)

                    })

                }
                else if (this.type == '2'){
                    console.log('我傻了')
                    GET.volunteerList().then(res=>{
                        this.$refs.volList.setData(res);
                        this.$refs.volList.setType(this.type)

                    })

                }
            },
        },
        mounted() {
            this.getData()
        }
    }
</script>

<style scoped>
    @import "../../assets/css/page.css";

</style>
