<template>
    <el-container>
        <el-header>
            <cli-title></cli-title>
        </el-header>
        <el-main>
            <cli-menu></cli-menu>

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
    }
</script>

<style scoped>

</style>
