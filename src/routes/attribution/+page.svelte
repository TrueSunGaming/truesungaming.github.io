<script lang="ts">
    import HomepageButton from "$lib/HomepageButton.svelte";
    import Icon from "$lib/Icon.svelte";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";

    let loaded = false;
    onMount(() => loaded = true);
</script>

{#if loaded}
    <h1 in:fly={{ duration: 300, x: -100, opacity: 0 }}>Attribution</h1>

    <p in:fly={{ delay: 200, duration: 300, x: -100, opacity: 0 }}>Attribution for images used on this site.</p>
{:else}
    <h1>loading...</h1>

    <p>loading...</p>
{/if}

<svelte:head>
    <title>Attribution | TrueSunGaming</title>
</svelte:head>

<a href="/">
    Back to Home
</a>

<hr>

<Icon src="godot" fontSize={ 100 } />
<a href="https://commons.wikimedia.org/wiki/File:Godot_icon.svg">Andrea Calabró</a>, <a href="https://creativecommons.org/licenses/by/4.0">CC BY 4.0</a>, via Wikimedia Commons

<hr>

<Icon src="javascript" fontSize={ 100 } />
<a href="https://commons.wikimedia.org/wiki/File:Unofficial_JavaScript_logo_2.svg">Christopher Williams</a>, Public domain, via Wikimedia Commons

<hr>

<Icon src="typescript" fontSize={ 100 } />
<a href="https://commons.wikimedia.org/wiki/File:Typescript_logo_2020.svg">™/®Microsoft</a>, Public domain, via Wikimedia Commons

<hr>

<Icon src="svelte" fontSize={ 100 } />
<a href="https://github.com/sveltejs/svelte/graphs/contributors">These people</a>, <a href="http://opensource.org/licenses/mit-license.php">MIT</a>, via Wikimedia Commons

<hr>

<Icon src="c++" fontSize={ 100 } />
<a href="https://commons.wikimedia.org/wiki/File:ISO_C%2B%2B_Logo.svg">Jeremy Kratz</a>, Public domain, via Wikimedia Commons

<style lang="scss">
    h1 {
        font-size: 50px;
    }

    a {
        color: orange;
        transition-duration: 250ms;

        &:hover {
            color: yellow;
        }
    }
</style>