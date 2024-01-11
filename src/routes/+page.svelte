<script>
  import Carousel from "../lib/Carousel.svelte";
</script>

<svelte:head>
  <script
    src="https://kit.fontawesome.com/7e6258cfd5.js"
    crossorigin="anonymous"
  ></script>
  <title>Home</title>
</svelte:head>



<div class="hero-img">
  <div class="bg-slate-950/60 min-h-[32rem]">
    <div class="text-white text-center grid justify-items-end w-full md:w-1/2">
      <div class="flex flex-col space-y-2">
        <h1 class="text-5xl font-bold uppercase">Thomas Hallan</h1>
        <h2 class="text-3xl uppercase">Graphic Designer</h2>
      </div>
      <button class="text-white border-white">Contact Me</button>
    </div>
  </div>
</div>

<Carousel />

<style>
  .hero-img{
    background-image: url(../lib/images/hero-image.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
  }
</style>