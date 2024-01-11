<script>
  import image from "$lib/images/1V9A4266.jpg";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<h1 class="text-center m-5">About Me</h1>
<section class="flex flex-col md:flex-row container m-auto gap-5">
  <div class="md:w-1/2">
    <img class="max-h-96 m-auto w-full object-cover" src={image} alt="" />
  </div>
  <div class="md:w-1/2 pb-5 m-5">
    <p class="pb-2">
      I am a 21-year-old graphic designer eriginating from Egersund, nestled in
      the scenic southwest of Norway. My pursuit of graphic design commenced at
      Noroff Universitu in Kristiansand, where I began my studies in August
      2022.
    </p>
    <p class="pb-2">
      Would you like to collaborate or hire me? Feel free to mail me via the
      button below!
    </p>
    <button class="border-black">
      <a target="_blank" href="mailto: thomashallan@icloud.com ">Mail Me</a
      ></button
    >
  </div>
</section>
