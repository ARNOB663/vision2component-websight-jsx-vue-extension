<template>
  <header class="bg-white text-center">
    <h1 class="text-5xl p-5">Art Gallery</h1>
    <nav class="bg-gray-600">
      <ul class="flex justify-around">
        <li class="p-5"><a href="#" class="text-white">Home</a></li>
        <li class="p-5"><a href="#" class="text-white">About</a></li>
        <li class="p-5"><a href="#" class="text-white">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main class="flex flex-wrap justify-center">
    <div class="w-full md:w-1/2 lg:w-1/3 p-5" v-for="(artwork, index) in artworks" :key="index">
      <img :src="'https://picsum.photos/seed/97/900/600'" :alt="artwork.alt" class="w-full">
    </div>
  </main>

  <footer class="bg-white text-center text-gray-400 p-5">
    <p>123 Art Gallery Street, City, Country | Phone: (123) 456-7890 | Email: info@artgallery.com</p>
    <div class="flex justify-center">
      <a href="#" class="text-gray-400 p-2"><i class="fab fa-facebook"></i></a>
      <a href="#" class="text-gray-400 p-2"><i class="fab fa-twitter"></i></a>
      <a href="#" class="text-gray-400 p-2"><i class="fab fa-instagram"></i></a>
    </div>
  </footer>
</template>

<script setup>
const artworks = [
  { src: 'https://picsum.photos/seed/97/900/600', alt: 'Artwork' },
  // Add more artworks as needed
]
</script>