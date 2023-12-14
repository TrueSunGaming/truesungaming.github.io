<script lang="ts">
    import HomepageButton from "$lib/HomepageButton.svelte";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    let loaded = false;
    onMount(() => loaded = true);
</script>

{#if loaded}
    <h1 in:fly={{ duration: 300, x: -100, opacity: 0 }}>Projects</h1>

    <p in:fly={{ delay: 200, duration: 300, x: -100, opacity: 0 }}>This is a collection of things I've worked on and decided to publish.</p>
{:else}
    <h1>loading...</h1>

    <p>loading...</p>
{/if}

<div>
    <HomepageButton href="/games">
        <span slot="title">Games</span>
        <span slot="description">Games that I've created. Most are made with either HTML5 or Godot.</span>
    </HomepageButton>
    <HomepageButton href="/tools">
        <span slot="title">Tools</span>
        <span slot="description">Tools that I've created to improve efficiency, automate something, or solve a problem.</span>
    </HomepageButton>
</div>
<br>
<div>
    <HomepageButton href="/libraries">
        <span slot="title">Libraries</span>
        <span slot="description">Code libraries that I've created.</span>
    </HomepageButton>
    <HomepageButton href="/projects">
        <span slot="title">Miscellaneous</span>
        <span slot="description">Other things that don't fit into the other categories.</span>
    </HomepageButton>
</div>
<br>
<div>
    <HomepageButton href="/">
        <span slot="title">← Home</span>
        <span slot="description">Go back to the homepage.</span>
    </HomepageButton>
</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: row;
        gap: 30px;
    }

    a {
        color: orange;
        transition-duration: 250ms;

        &:hover {
            color: yellow;
        }
    }

    span[slot=title]:is(div * *:hover *) {
        color: orange;
    }

    span[slot=title]:is(div * * *) {
        transition-duration: 250ms;
    }

    h1 {
        font-size: 50px;
    }
</style>