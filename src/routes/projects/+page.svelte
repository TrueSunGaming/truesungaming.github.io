<script lang="ts">
    import HomepageButton from "$lib/HomepageButton.svelte";
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import type projectData from "$lib/projectData.json";
    import Icon from "$lib/Icon.svelte";
    import { type SearchQuery, SortMode, searchProjects } from "$lib/searchProjects";

    let loaded = false;
    onMount(() => loaded = true);

    const searchQuery: SearchQuery = {
        query: "",
        showGames: true,
        showTools: true,
        showSites: true,
        showLibs: true
    };

    let sortMode: SortMode = SortMode.NameAscending;

    $: sortedData = searchProjects(searchQuery, sortMode)!;
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

<hr>

<label for="searchQuery">Search: </label>
<input type="text" name="searchQuery" bind:value={ searchQuery.query }>
<br>

Filters:
<br>
<input type="checkbox" name="showGames" bind:checked={ searchQuery.showGames }>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<label for="showGames" on:click={ () => searchQuery.showGames = !searchQuery.showGames }>Games</label>
<br>

<input type="checkbox" name="showTools" bind:checked={ searchQuery.showTools }>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<label for="showTools" on:click={ () => searchQuery.showTools = !searchQuery.showTools }>Tools</label>
<br>

<input type="checkbox" name="showSites" bind:checked={ searchQuery.showSites }>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<label for="showSites" on:click={ () => searchQuery.showSites = !searchQuery.showSites }>Miscellaenous Websites</label>
<br>

<input type="checkbox" name="showLibs" bind:checked={ searchQuery.showLibs }>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<label for="showLibs" on:click={ () => searchQuery.showLibs = !searchQuery.showLibs }>Libraries</label>
<br>

<label for="sortMode" id="sortModeLabel">Sort Mode:</label>
<select name="sortMode" bind:value={ sortMode }>
    <option value={ SortMode.NameAscending }>Name (A to Z)</option>
    <option value={ SortMode.NameDescending }>Name (Z to A)</option>
    <option value={ SortMode.ReleaseDescending }>Release Date (Newest)</option>
    <option value={ SortMode.ReleaseAscending }>Release Date (Oldest)</option>
    <option value={ SortMode.UpdateDescending }>Last Update (Newest)</option>
    <option value={ SortMode.UpdateAscending }>Last Update (Oldest)</option>
</select>

<hr>

<a href="/attribution">Language Logo Attribution</a>

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
                <HomepageButton href={ i.link } newtab>
                    <span slot="title">Open</span>
                </HomepageButton>
            {/if}

            {#if i.source != null}
                <HomepageButton href={ i.source } newtab>
                    <span slot="title">Source Code</span>
                </HomepageButton>
            {/if}
        </div>
    </section>
{/each}

<style lang="scss">
    section {
        padding: 10px;
        margin: 10px 0 20px 0;
        border-radius: 20px;
        background-color: hsl(0, 0%, 25%);
        box-shadow: 0 10px 0 hsl(0, 0%, 15%);    
    }
    
    div {
        display: flex;
        flex-direction: row;
        gap: 30px;
    }

    h1 {
        font-size: 50px;
    }

    h2 {
        font-size: 30px;
    }

    input, select {
        background-color: hsl(0, 0%, 20%);
        box-shadow: 0 5px 0 hsl(0, 0%, 10%);
        margin-bottom: 5px;
        border-radius: 5px;
        border: none;
        padding: 3px;
    }

    select, input[type=checkbox], label:not(#sortModeLabel) {
        cursor: pointer;
        user-select: none;
    }

    input[type=checkbox] {
        appearance: none;
        width: 16px;
        height: 16px;
        transform: translateY(4.5px);
        transition-duration: 200ms;
        box-shadow: 0 3px 0 hsl(0, 0%, 10%);
        margin-bottom: 3px;

        &:checked {
            background-color: hsl(30, 100%, 50%);
            box-shadow: 0 3px 0 hsl(30, 100%, 40%);
        }
    }
</style>