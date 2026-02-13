<template>
  <header class="flex items-center justify-between p-4 bg-white">
    <img src="https://static.photos/travel/300x300/173.webp" alt="Logo" class="h-10">
    <nav>
      <ul class="flex">
        <li class="mr-4"><a href="#" class="text-gray-600 hover:text-gray-900">Home</a></li>
        <li class="mr-4"><a href="#" class="text-gray-600 hover:text-gray-900">About</a></li>
        <li class="mr-4"><a href="#" class="text-gray-600 hover:text-gray-900">Services</a></li>
        <li><a href="#" class="text-gray-600 hover:text-gray-900">Contact</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <section class="relative">
      <img src="https://static.photos/travel/900x600/174.webp" alt="Travel" class="w-full">
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-4xl text-white">Welcome to our travel agency</h1>
      </div>
    </section>
    <section class="p-4 text-center">
      <h2 class="text-2xl mb-4">About Us</h2>
      <p class="mb-4">We are a team of experienced travel experts who are passionate about helping you plan your next adventure. Our mission is to provide you with the best travel experience possible, whether you're looking for a relaxing beach vacation, an action-packed adventure, or a cultural exchange.</p>
      <a href="#" class="inline-block px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">Book Now</a>
    </section>
  </main>
</template>

<script setup>
// No script needed for this example
</script>

<style scoped>
/* Add any custom styles here */
</style>