<script>
  import { fade, fly } from 'svelte/transition';
  export let data;
</script>
<section in:fly={{ y: 100, duration: 800 }}>

<div class="min-h-32 grid place-items-center w-full">
  <h1 >Projects</h1>
</div>

<ul class="flex flex-col space-y-10 mx-auto py-4 px-4 max-w-screen-lg">
  {#each data.summaries as { title, slug, cover }}
    <li>
      <a href="projects/{slug}"><img class="w-full object-cover" src="{cover}" alt=""></a>
      <p>{title}</p>
    </li>
  {/each}
</ul>
</section>