<template>
  <div class="flex flex-col min-h-screen bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white">
      <img src="https://static.photos/art/900x600/60.webp" alt="Art Gallery Banner" class="w-full">
    </header>
    <div class="flex flex-grow">
      <nav class="w-1/4 bg-white p-4">
        <h2 class="text-lg font-bold mb-4">Current Exhibitions</h2>
        <ul>
          <li class="mb-2">Exhibition 1</li>
          <li class="mb-2">Exhibition 2</li>
          <li class="mb-2">Exhibition 3</li>
        </ul>
      </nav>
      <main class="w-3/4 p-4">
        <h1 class="text-2xl font-bold mb-4">Welcome to our Art Gallery</h1>
        <p class="mb-4">
          At our Art Gallery, we are dedicated to showcasing the best of contemporary art. Our collection is diverse and includes a wide range of styles and mediums, from painting and sculpture to photography and digital art. We believe that art is a powerful tool for self-expression and understanding of the world.
        </p>
        <p class="mb-4">
          We host a variety of exhibitions throughout the year, featuring work by both established and emerging artists. Our exhibitions are designed to be accessible and engaging, and we strive to make them a fun and enjoyable experience for all visitors.
        </p>
        <p class="mb-4">
          We also offer a variety of educational programs and workshops, designed to help visitors deepen their understanding of the artworks in our collection. Whether you're a seasoned art enthusiast or a curious beginner, we hope you'll find something here that inspires you.
        </p>
      </main>
    </div>
    <footer class="bg-white p-4">
      <nav class="flex justify-between">
        <a href="#" class="text-yellow-500 hover:text-yellow-700">Home</a>
        <a href="#" class="text-yellow-500 hover:text-yellow-700">Exhibitions</a>
        <a href="#" class="text-yellow-500 hover:text-yellow-700">About Us</a>
        <a href="#" class="text-yellow-500 hover:text-yellow-700">Contact Us</a>
      </nav>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>