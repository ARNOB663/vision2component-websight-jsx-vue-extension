<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <header class="bg-white text-center">
      <div class="container mx-auto">
        <h1 class="text-5xl font-bold text-gray-800">Interior Design Firm</h1>
        <p class="text-2xl font-bold text-gray-600">Creating Spaces You'll Love</p>
        <button class="mt-4 px-4 py-2 text-white bg-yellow-500 rounded">Get a Quote</button>
      </div>
    </header>

    <nav class="bg-white py-4">
      <div class="container mx-auto flex items-center justify-between">
        <a href="#" class="text-2xl font-bold text-gray-800">Interior Design Firm</a>
        <div>
          <a href="#" class="text-gray-600 hover:text-yellow-500 ml-4">Home</a>
          <a href="#" class="text-gray-600 hover:text-yellow-500 ml-4">About</a>
          <a href="#" class="text-gray-600 hover:text-yellow-500 ml-4">Services</a>
          <a href="#" class="text-gray-600 hover:text-yellow-500 ml-4">Projects</a>
          <a href="#" class="text-gray-600 hover:text-yellow-500 ml-4">Contact</a>
        </div>
      </div>
    </nav>

    <main class="py-10">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-gray-800 text-center mb-10">Our Latest Projects</h2>
        <div class="grid grid-cols-2 gap-4">
          <img src="https://static.photos/interior/900x600/157.webp" alt="Interior Design Project" class="rounded">
          <img src="https://static.photos/interior/900x600/158.webp" alt="Interior Design Project" class="rounded">
          <img src="https://static.photos/interior/900x600/159.webp" alt="Interior Design Project" class="rounded">
          <img src="https://static.photos/interior/900x600/160.webp" alt="Interior Design Project" class="rounded">
        </div>
      </div>
    </main>

    <footer class="bg-white py-4">
      <div class="container mx-auto text-center">
        <p class="text-gray-600">&copy; 2022 Interior Design Firm. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// No script needed for this example
</script>