<script>
  export let data;
</script>


<div class="min-h-32 grid place-items-center w-full">
  <h1>Projects</h1>
</div>

<ul class="flex flex-col space-y-10 mx-auto py-4">
  {#each data.summaries as { title, text,slug, image }}
    <li>
      <a href="projects/{slug}"><img src="{image}" alt=""></a>
      <p>{title}</p>
    </li>
  {/each}
</ul>
