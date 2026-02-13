<template>
  <div class="bg-fixed bg-center bg-cover h-screen" :style="{ backgroundImage: 'url(https://picsum.photos/seed/336/1600/900)' }">
    <div class="flex justify-center items-center h-screen">
      <img src="https://picsum.photos/seed/336/300/300" alt="Logo" class="h-16">
    </div>
  </div>
  <nav class="flex justify-center items-center h-16 bg-gray-800 text-white">
    <ul class="flex space-x-4">
      <li><a href="#" class="hover:underline">Home</a></li>
      <li><a href="#" class="hover:underline">Features</a></li>
      <li><a href="#" class="hover:underline">Testimonials</a></li>
      <li><a href="#" class="hover:underline">Contact</a></li>
    </ul>
  </nav>
  <div class="flex justify-center items-center h-screen">
    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <div class="w-full md:w-1/2 p-4">
        <h2 class="text-2xl mb-2">Features</h2>
        <p class="mb-2">Our technology startup offers a wide range of features designed to meet the needs of modern businesses. From powerful analytics to intuitive user interfaces, we've got you covered.</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
      </div>
      <div class="w-full md:w-1/2 p-4">
        <h2 class="text-2xl mb-2">Testimonials</h2>
        <p class="mb-2">"I couldn't be happier with my decision to choose our technology startup. The team is incredibly knowledgeable and responsive, and the product is top-notch."</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read More</button>
      </div>
    </div>
  </div>
  <div class="flex justify-center items-center h-screen">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
  </div>
</template>

<script setup>
// No script needed for this example
</script>