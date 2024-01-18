<script>
  export let data;
</script>

<h1>Projects</h1>

<ul>
  {#each data.summaries as { title, text,slug,image }}
    <li><a href="projects/{slug}"><img src="{image}" alt=""></a>
    </li>
  {/each}
</ul>
