<template>
    <div>
    <cli-title class="title"></cli-title>
    <cli-menu class="menu"></cli-menu>
        <div class="center">

        </div>
    </div>


</template>

<script>
    import CliTitle from "../../components/base/cliTitle";
    import CliMenu from "../../components/base/cliMenu";
    export default {
        name: "index",
        components: {CliMenu, CliTitle}
    }
</script>

<style scoped>
    @import "../../assets/css/page.css";

</style>
