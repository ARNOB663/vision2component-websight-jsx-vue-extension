<template>
  <div class="relative bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://picsum.photos/seed/303/1600/900)' }">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="container relative z-10 flex items-center justify-center h-full">
      <div class="text-center">
        <h1 class="text-4xl text-white mb-4">Welcome to our travel agency</h1>
        <p class="text-xl text-white mb-8">We are a full-service travel agency specializing in creating unforgettable experiences for our clients.</p>
        <div class="flex justify-center">
          <input type="text" placeholder="Search destinations" class="px-4 py-2 rounded-l">
          <button class="bg-gray-500 text-white px-4 py-2 rounded-r">Search</button>
        </div>
      </div>
    </div>
  </div>

  <div class="container py-16">
    <h2 class="text-3xl text-center mb-8">Featured Destinations</h2>
    <div class="flex justify-between">
      <div class="w-1/3">
        <img src="https://picsum.photos/seed/303/900/600" alt="Beach" class="mb-4">
        <h3 class="text-xl">Beach Destinations</h3>
        <p>Discover the best beaches in the world.</p>
      </div>
      <div class="w-1/3">
        <img src="https://picsum.photos/seed/303/900/600" alt="Mountain" class="mb-4">
        <h3 class="text-xl">Mountain Destinations</h3>
        <p>Explore the breathtaking mountains.</p>
      </div>
      <div class="w-1/3">
        <img src="https://picsum.photos/seed/303/900/600" alt="City" class="mb-4">
        <h3 class="text-xl">City Destinations</h3>
        <p>Experience the vibrant cities of the world.</p>
      </div>
    </div>
  </div>

  <div class="container py-16">
    <h2 class="text-3xl text-center mb-8">Contact Us</h2>
    <div class="flex justify-between">
      <div class="w-1/3">
        <h3 class="text-xl">Address</h3>
        <p>123 Main St, Anytown, USA</p>
      </div>
      <div class="w-1/3">
        <h3 class="text-xl">Phone</h3>
        <p>(123) 456-7890</p>
      </div>
      <div class="w-1/3">
        <h3 class="text-xl">Email</h3>
        <p>info@travelagency.com</p>
      </div>
    </div>
  </div>

  <div class="container py-16">
    <h2 class="text-3xl text-center mb-8">Map</h2>
    <div class="flex justify-center">
      <img src="https://picsum.photos/seed/303/900/600" alt="Map">
    </div>
  </div>
</template>

<script setup>
// No script needed for this example
</script>