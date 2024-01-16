<script>
    /** @type {import('./$types').PageData} */
    export let data;
    import { projects } from '$lib/data.js'
</script>

<svelte:head>
	<title>Single projects</title>
</svelte:head>


{@debug projects}
<h1>Specific page</h1>
<p>Text specific</p>