<template>
    <div>
        <cli-title class="title"></cli-title>
        <div class="menu">
            <cli-menu page-index="5"></cli-menu>
        </div>
        <div class="center">

        </div>
    </div>


</template>

<script>
    import CliTitle from "../../components/base/cliTitle";
    import CliMenu from "../../components/base/cliMenu";

    export default {
        name: "index",
        components: {CliTitle, CliMenu}
    }
</script>

<style scoped>
    @import "../../assets/css/page.css";

</style>
