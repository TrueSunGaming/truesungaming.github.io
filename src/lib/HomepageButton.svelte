<script lang="ts">
    export let href: string;
    export let newtab = false;
</script>

<a { href } target={ newtab ? "_blank" : "" }>
    <h1>
        <slot name="title" />
    </h1>
    <p>
        <slot name="description" />
    </p>
</a>

<style lang="scss">
    a {
        display: inline-block;
        background-color: hsl(0, 0%, 30%);
        box-shadow: 0 5px 0 hsl(0, 0%, 20%);
        margin-bottom: 5px;
        flex: 1;
        padding: 20px;
        text-decoration: none;
        border-radius: 20px;
        transition-duration: 250ms;
        position: relative;
        z-index: 1;

        &:hover {
            background-color: hsl(30, 80%, 50%);
            box-shadow: 0 5px 0 hsl(30, 80%, 40%);
        }
    }
</style>