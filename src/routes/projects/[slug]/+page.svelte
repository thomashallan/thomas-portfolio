<script>
    /** @type {import('./$types').PageData} */
    import { fade, fly } from 'svelte/transition';
    export let data;
</script>

<svelte:head>
    <title>{data.project.title}</title>
</svelte:head>


<section class="max-w-screen-lg mx-auto" in:fly={{ y: 100, duration: 800 }}>
    <img class="min-h-64 md:min-h-80 object-cover" src="{data.project.cover}" alt="">
    <div class="min-h-32 grid place-items-center w-full">
        <h1 class="text-center">{data.project.title}</h1>
    </div>
    <div class="min-h-32 max-w-screen-md mx-auto grid place-items-center w-full">
        <h2>{data.project.text}</h2>
    </div>
    
    <div class="flex flex-col mx-auto space-y-4">
    {#each data.project.image as img}
        <img src="{img.url}" alt="{img.alt}">
        {/each}
    </div>
</section>

