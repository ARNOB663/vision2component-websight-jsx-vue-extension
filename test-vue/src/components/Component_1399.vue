<template>
  <div class="flex flex-col min-h-screen bg-white">
    <header class="bg-white">
      <div class="container mx-auto px-6 py-4 flex justify-between items-center">
        <img src="https://static.photos/art/300x300/1.webp" alt="Logo" class="h-10">
        <nav>
          <ul class="flex space-x-4">
            <li><a href="#" class="text-gray-800 hover:text-gray-600">Home</a></li>
            <li><a href="#" class="text-gray-800 hover:text-gray-600">About</a></li>
            <li><a href="#" class="text-gray-800 hover:text-gray-600">Gallery</a></li>
            <li><a href="#" class="text-gray-800 hover:text-gray-600">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main class="flex-grow">
      <div class="container mx-auto px-6 py-4">
        <!-- Your image gallery goes here -->
      </div>
    </main>
    <footer class="bg-gray-800 text-white">
      <div class="container mx-auto px-6 py-4">
        <p class="mb-4">
          Welcome to our Art Gallery, where we showcase the best of the best artworks from around the world. Our mission is to provide a platform for artists to showcase their work and for art lovers to appreciate the beauty of art. We believe in the power of art to inspire, educate, and bring people together.
        </p>
        <form class="flex space-x-4">
          <input type="email" placeholder="Enter your email" class="flex-grow py-2 px-4 rounded">
          <button type="submit" class="bg-white text-gray-800 py-2 px-4 rounded">Subscribe</button>
        </form>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Your script logic goes here
</script>

<style scoped>
/* Your scoped styles go here */
</style>