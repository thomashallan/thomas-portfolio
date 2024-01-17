<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { projects } from '$lib/data.js'
    console.log(projects)
    import { page } from '$app/stores';
    import { derived } from 'svelte/store';

    // Creates a derived store name automatically updates value to match the slug
    // const slug = derived(page, $page => $page.params.slug);
    

    console.log(slug)
    // const project = derived([slug, projects], ([$slug, $projects]) => $projects.find(p => p.id.toString() === $slug));
</script>

<svelte:head>
    <title>{$project.title}</title>
</svelte:head>


{@debug slug}
{@debug project}
<h1>Specific Page</h1>
{#if $project}
    <h2>{$project.title}</h2>
    <p>{$project.text}</p>
{:else}
    <p>Project not found.</p>
{/if}