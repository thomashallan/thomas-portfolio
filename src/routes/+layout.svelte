<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import "./styles.css";
</script>

<div class="app flex flex-col justify-between h-screen">
  <Header />

  <main class="max-w-screen-2xl mx-auto">
    <slot />
  </main>

  <Footer />
</div>

<style>
</style>
