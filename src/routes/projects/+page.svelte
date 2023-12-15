<script lang="ts">
    import HomepageButton from "$lib/HomepageButton.svelte";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import projectData from "$lib/projectData.json";
    import Icon from "$lib/Icon.svelte";

    let loaded = false;
    onMount(() => loaded = true);

    const sortedData = projectData.sort((a, b) => a.release == "WIP" ? -1 : (new Date(b.release).getTime() - new Date(a.release).getTime()))
</script>

<svelte:head>
    <title>Projects | TrueSunGaming</title>
</svelte:head>

{#if loaded}
    <h1 in:fly={{ duration: 300, x: -100, opacity: 0 }}>Projects</h1>

    <p in:fly={{ delay: 200, duration: 300, x: -100, opacity: 0 }}>This is a collection of things I've worked on and decided to publish.</p>
{:else}
    <h1>loading...</h1>

    <p>loading...</p>
{/if}

<a href="/">
    Back to Home
</a>

{#each sortedData as i, idx (idx)}
    <section>
        <h2>
            { i.title }
            {#each i.icons as src }
                <Icon { src } fontSize={ 30 }/>
            {/each}
        </h2>
        <p>{ @html i.description }</p>
        <p>
            First Release: { i.release }
            <br>
            Last Updated: { i.lastUpdate }
        </p>

        <div>
            {#if i.link != null}
                <HomepageButton href={ i.link }>
                    <span slot="title">Open</span>
                </HomepageButton>
            {/if}

            {#if i.source != null}
                <HomepageButton href={ i.source }>
                    <span slot="title">Source Code</span>
                </HomepageButton>
            {/if}
        </div>
    </section>
{/each}

<style lang="scss">
    section {
        border: 3px solid orange;
        padding: 10px;
        margin: 10px 0 10px 0;
        border-radius: 20px;
        background-color: #202020;
    }
    
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

    span[slot=title]:is(div *:hover > * > *) {
        color: orange;
    }

    span[slot=title]:is(div * > * > *) {
        transition-duration: 250ms;
    }

    h1 {
        font-size: 50px;
    }

    h2 {
        font-size: 30px;
    }
</style>