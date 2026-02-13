<template>
  <header class="bg-white p-4">
    <nav class="flex justify-between items-center">
      <div>
        <a href="#" class="text-gray-800 text-xl font-bold">Art Gallery</a>
      </div>
      <div>
        <a href="#" class="text-gray-600 mr-4">Home</a>
        <a href="#" class="text-gray-600 mr-4">About</a>
        <a href="#" class="text-gray-600">Contact</a>
      </div>
    </nav>
  </header>

  <main>
    <section class="mt-8">
      <img src="https://static.photos/art/900x600/101.webp" alt="Art Gallery" class="w-full">
    </section>

    <section class="mt-8 px-4">
      <h2 class="text-2xl font-bold text-gray-800">Welcome to our Art Gallery</h2>
      <p class="mt-4 text-gray-600">
        At our Art Gallery, we are dedicated to showcasing the beauty and diversity of art from around the world. Our collection includes paintings, sculptures, photographs, and more. We believe that art has the power to inspire, educate, and bring people together. Whether you're a seasoned collector or a beginner, we invite you to explore our collection and discover the beauty of art.
      </p>
    </section>

    <section class="mt-8 px-4">
      <h2 class="text-2xl font-bold text-gray-800">Gallery Preview</h2>
      <div class="mt-4 grid grid-cols-2 gap-4">
        <img src="https://static.photos/art/900x600/102.webp" alt="Art 1" class="w-full">
        <img src="https://static.photos/art/900x600/103.webp" alt="Art 2" class="w-full">
        <img src="https://static.photos/art/900x600/104.webp" alt="Art 3" class="w-full">
        <img src="https://static.photos/art/900x600/105.webp" alt="Art 4" class="w-full">
      </div>
    </section>
  </main>
</template>

<script setup>
// No script needed for this simple template
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>