<script lang="ts">
    import HomepageButton from "$lib/HomepageButton.svelte";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    let loaded = false;
    onMount(() => loaded = true);
</script>

<svelte:head>
    <title>TrueSunGaming</title>
</svelte:head>

{#if loaded}
    <h1 in:fly={{ duration: 300, x: -100, opacity: 0 }}>Hi, I'm Matthew!</h1>

    <p in:fly={{ delay: 200, duration: 300, x: -100, opacity: 0 }}>My name is Matthew, but I go by <a href="https://github.com/TrueSunGaming" target="_blank">TrueSunGaming</a> online.</p>

    <p in:fly={{ delay: 400, duration: 300, x: -100, opacity: 0 }}>
        I work with
        <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>,
        C++,
        <a href="https://kit.svelte.dev/" target="_blank">SvelteKit</a>,
        <a href="https://godotengine.org/" target="_blank">Godot</a>,
        and <a href="https://libsdl.org/" target="_blank">SDL2</a>.
    </p>

    <p in:fly={{ delay: 600, duration: 300, x: -100, opacity: 0 }}>I also founded <a href="https://github.com/Tristable" target="_blank">Tristable</a>.</p>
{:else}
    <h1>loading...</h1>

    <p>loading...</p>

    <p>loading...</p>

    <p>loading...</p>
{/if}

<div>
    <HomepageButton href="/projects">
        <span slot="title">Projects</span>
        <span slot="description">Personal projects I've worked on over the years.</span>
    </HomepageButton>
</div>

<style lang="scss">
    div {
        display: flex;
        flex-direction: column;
        gap: 30px;
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