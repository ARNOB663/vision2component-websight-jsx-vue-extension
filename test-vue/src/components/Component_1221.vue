<template>
  <div class="bg-gray-100">
    <header class="bg-transparent flex items-center justify-center py-4">
      <img src="https://static.photos/art/300x300/23.webp" alt="Logo" class="h-16">
    </header>

    <nav class="bg-black text-white flex justify-center space-x-4 py-2">
      <a href="#" class="px-3 py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out">Artists</a>
      <a href="#" class="px-3 py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out">Exhibitions</a>
    </nav>

    <main class="flex flex-col items-center justify-center py-10">
      <h1 class="text-4xl text-center text-black mb-6">Welcome to our Art Gallery</h1>
      <p class="text-lg text-center text-black mb-10">We are a vibrant art gallery dedicated to showcasing the best of contemporary art. Our collection includes a wide range of genres, from abstract to figurative, from traditional to modern. We believe in the power of art to inspire, educate, and connect people.</p>

      <!-- Add your image slider here -->
      <div class="w-full max-w-screen-xl mx-auto">
        <swiper :slides-per-view="1" :space-between="30" :navigation="true" :pagination="{ clickable: true }" class="mySwiper">
          <swiper-slide><img src="https://static.photos/art/900x600/23.webp" alt="Slide 1"></swiper-slide>
          <swiper-slide><img src="https://static.photos/art/900x600/24.webp" alt="Slide 2"></swiper-slide>
          <swiper-slide><img src="https://static.photos/art/900x600/25.webp" alt="Slide 3"></swiper-slide>
        </swiper>
      </div>
    </main>

    <aside class="flex justify-around py-10">
      <div class="w-1/3 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl text-center text-black mb-4">Artists</h2>
        <!-- Add your artists' bios here -->
      </div>

      <div class="w-1/3 bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl text-center text-black mb-4">Upcoming Exhibitions</h2>
        <!-- Add your upcoming exhibitions here -->
      </div>
    </aside>

    <footer class="bg-black text-white flex justify-center py-4">
      <p>© 2022 Art Gallery. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

// Import Swiper styles if not already included
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
</script>

<style scoped>
/* Add any custom styles here */
</style>