<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { projects } from '$lib/data.js'
    import { page } from '$app/stores';
    import { derived } from 'svelte/store';

    const slug = derived(page, $page => $page.params.slug);

    const project = derived([slug, projects], ([$slug, $projects]) => $projects.find(p => p.id.toString() === $slug));
</script>

<svelte:head>
	<title>Single projects</title>
</svelte:head>


<!-- {@debug projects} -->
<h1>Specific Page</h1>
{#if $project}
    <h2>{$project.title}</h2>
    <p>{$project.text}</p>
    <!-- Display images and other project details here -->
{:else}
    <p>Project not found.</p>
{/if}