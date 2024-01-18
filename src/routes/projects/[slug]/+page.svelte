<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Test</title>
</svelte:head>

<img class="min-h-64 md:min-h-80 object-cover" src="{data.project.cover}" alt="">

<div class="min-h-32 grid place-items-center w-full">
    <h1 class="text-center">{data.project.title}</h1>
</div>
<p>{data.project.text}</p>

{#each data.project.image as img}
<img src="{img.url}" alt="">
{/each}
