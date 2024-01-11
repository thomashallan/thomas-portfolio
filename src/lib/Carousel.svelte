<script>
    const images = [
        {
      alt: 'Cosmic timetraveler',
      src: '/src/lib/images/hero-image.jpg',
      title: 'cosmic-timetraveler-pYyOZ8q7AII-unsplash.com',
      id: 0
    },
    {
      alt: 'Cristina Gottardi',
      src: '/images/carousel/cristina-gottardi-CSpjU6hYo_0-unsplash.webp',
      title: 'cristina-gottardi-CSpjU6hYo_0-unsplash.com',
      id: 1
    },
    {
      alt: 'Johannes Plenio',
      src: '/images/carousel/johannes-plenio-RwHv7LgeC7s-unsplash.webp',
      title: 'johannes-plenio-RwHv7LgeC7s-unsplash.com',
      id: 2
    },
    ]
</script>

<section>
    <div>
        Prev
    </div>
    <div>
        Gallery
        <img src={images.src} alt="">
    </div>
    <div>
        Next
    </div>
</section>