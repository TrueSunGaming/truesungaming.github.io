<script lang="ts">
    export let src: string;
    export let fontSize: number;
</script>

<img src="/{ src }.svg" alt="{ src } icon" height={ fontSize }>

<style lang="scss">
    img {
        margin-right: 5px;
    }
</style>