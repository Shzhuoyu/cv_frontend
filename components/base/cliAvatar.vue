<template>
    <div style="display: block;margin-top: 10px">
        <a href="javascript:;" class="file">上传
            <input type="file" name="" id="upload" @change="Upload" >
        </a>
    </div>

</template>

<script>
    import PRO from '../../api/API_PRO.js';
    import axios from 'axios';
    import { Loading } from 'element-ui'
    export default {
        name: "cliAvatar",
        props:{
            pam:{
                type:Object
            }
        },
        data(){
            return{
                config: {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                },
                filename:'',
                type:'',
                id:'',
                url:PRO.uploadURL

            }
        },
        methods:{
            setParam(data){
                this.type = data.type;
                this.id = data.id;

            },
            Upload(){
                var file = document.getElementById('upload').files[0];
                let param = new FormData();
                param.append('file',file,file.name);
                param.append('id',this.pam.id);
                param.append('type',this.pam.type);
                this.filename = file.name
                console.log(this.config)
                console.log(param.get('id'))
                console.log(param.get('type'))
                const loading = Loading.service({
                    lock: true,
                    text: '文件上传中',
                    spinner: 'el-icon-loading'
                })
                axios.post(this.url,param,this.config).then(response=>{
                    loading.close()
                    console.log(response)
                    if(response.status == 200){
                        alert('上传成功')
                        this.$emit('setHide');
                    }
                })

            }
        }
    }
</script>

<style scoped>

</style>
