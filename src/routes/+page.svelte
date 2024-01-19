
<svelte:head>
  <title>Home</title>
</svelte:head>



<section class="hero-img w-full">
  <div class="bg-slate-950/60">
    <div class="text-white  grid-cols-1 grid justify-items-end items-center w-full min-h-[32rem]">
      <div class="space-y-2 md:px-20 text-center">
        <h1 class="text-5xl font-bold uppercase">Thomas Hallan</h1>
        <h2 class="text-3xl uppercase">Graphic Designer</h2>
        <button class="text-white border-white">Contact Me</button>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-img{
    background-image: url(../lib/images/hero-image.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
  }
</style>

