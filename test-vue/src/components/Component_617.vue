<template>
  <header class="bg-cover bg-center h-screen" :style="{ backgroundImage: 'url(https://static.photos/people/1600x900/18.webp)' }">
    <div class="container mx-auto px-6 md:flex md:items-center md:justify-between py-4">
      <div class="text-center text-white">
        <h1 class="font-bold uppercase text-5xl pt-24 md:pt-0">Charity Organization</h1>
        <p class="text-2xl pt-2">We are a non-profit organization dedicated to helping those in need.</p>
        <button class="bg-white text-gray-800 font-bold rounded-full mt-4 py-4 px-8 shadow">Donate Now</button>
      </div>
    </div>
  </header>
  <nav class="container mx-auto px-6 pt-4 pb-8">
    <ul class="flex flex-wrap text-xl">
      <li class="mr-6"><a href="#" class="text-gray-800 hover:text-gray-600">Home</a></li>
      <li class="mr-6"><a href="#" class="text-gray-800 hover:text-gray-600">About</a></li>
      <li class="mr-6"><a href="#" class="text-gray-800 hover:text-gray-600">Programs</a></li>
      <li class="mr-6"><a href="#" class="text-gray-800 hover:text-gray-600">Contact</a></li>
    </ul>
  </nav>
  <main class="container mx-auto px-6 pt-12 pb-24">
    <p class="text-xl">We are a charity organization dedicated to helping those in need. We believe that everyone has the right to a life free from poverty and hunger. We work to ensure that no child goes hungry, no family goes without shelter, and no person goes without healthcare. We believe in the power of love and kindness, and we strive to spread it to everyone we can.</p>
  </main>
</template>

<script setup>
// No script needed for this simple example
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>