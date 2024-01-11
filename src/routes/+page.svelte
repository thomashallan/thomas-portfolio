<svelte:head>
  <script
    src="https://kit.fontawesome.com/7e6258cfd5.js"
    crossorigin="anonymous"
  ></script>
  <title>Home</title>
</svelte:head>


<div class="hero-img">
  <div>
    <h1>Thomas Hallan</h1>
    <h2>Graphic Designer</h2>
    <button>Contact Me</button>
  </div>
</div>

<style>
  .hero-img{
    background-image: url(../lib/images/hero-image.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    filter: brightness(0.5);
    width: 100%;
    min-height: 32rem;
  }
</style>