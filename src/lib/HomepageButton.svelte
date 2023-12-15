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
        background-image: linear-gradient(90deg, #303030, #505050, orange);
        border: 3px solid #707070;
        flex: 1;
        padding: 20px;
        text-decoration: none;
        border-radius: 20px;
        transition-duration: 250ms;
        position: relative;
        z-index: 1;
        background-size: 160% 100%;

        &:hover {
            border: 3px solid orange;
            background-position-x: 60%;
        }
    }
</style>