<script>
  import { onMount } from "svelte";
  import { projects } from "$lib/data.js";

  let projectImages = [];

  onMount(() => {
    const projectImagesContainer = document.getElementById("project-images");

    if (projectImagesContainer) {
      projectImages = projects.map((project) => project.image[0]);

      projectImages.forEach((image) => {
        const imgLink = document.createElement("a");
        const imgElement = document.createElement("img");
        imgElement.src = image.url;
        imgElement.alt = image.alt;
        imgElement.className = "max-h-96 m-auto w-full object-cover my-6";
        //imgLink.href = `./spesific.svelte?id=${result.id}`;
        imgLink.href = `https://picsum.photos/1000/500`;
        imgLink.appendChild(imgElement);
        projectImagesContainer.appendChild(imgLink);
      });
    }
  });
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<h1 class="text-center">Projects</h1>

<section id="project-images"></section>
