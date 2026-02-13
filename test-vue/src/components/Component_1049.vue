<template>
  <div class="flex flex-col min-h-screen">
    <nav class="bg-white p-6">
      <div class="flex items-center justify-between">
        <div>
          <a class="text-xl text-black font-bold" href="#">Music Streaming Platform</a>
        </div>
        <div>
          <a class="text-black no-underline ml-4" href="#">Home</a>
          <a class="text-black no-underline ml-4" href="#">About</a>
          <a class="text-black no-underline ml-4" href="#">Contact</a>
        </div>
      </div>
    </nav>
    <div class="flex-grow bg-cover bg-center" :style="{ backgroundImage: 'url(https://static.photos/business/1600x900/50.webp)' }">
      <div class="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div class="text-center text-white">
          <h1 class="text-4xl">Welcome to Music Streaming Platform</h1>
          <p class="text-xl mt-4">We are a leading music streaming platform, providing a vast collection of music from various genres. Our mission is to make music accessible to everyone, everywhere.</p>
        </div>
      </div>
    </div>
    <footer class="bg-white p-6 text-center">
      <p class="text-black">© 2022 Music Streaming Platform. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>