<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Test</title>
</svelte:head>


<img src="{data.project.image[0].url}" alt="">

<h1>{data.project.title}</h1>
<p>{data.project.text}</p>

{#each data.project.image as img}
<img src="{img.url}" alt="">
{/each}
