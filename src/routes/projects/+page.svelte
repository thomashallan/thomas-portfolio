<script>
  export let data;
</script>

<h1>Projects</h1>

<ul>
  {#each data.summaries as { title, text }}
    <li><a href="/blog/{title}">{text}</a></li>
  {/each}
</ul>
