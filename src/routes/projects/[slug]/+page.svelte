<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>{$project.title}</title>
</svelte:head>


<h1>{data.project.title}</h1>