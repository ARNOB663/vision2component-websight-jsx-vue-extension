<template>
  <header class="w-full bg-gray-800 text-white p-4">
    <img src="https://static.photos/art/900x600/61.webp" alt="Artwork" class="w-full">
    <h1 class="text-4xl text-center mt-4">Welcome to our Art Gallery</h1>
    <p class="text-center mt-2">Explore the world of art with us</p>
  </header>

  <nav class="bg-gray-700 text-white p-4">
    <ul class="flex justify-center space-x-4">
      <li><a href="#" class="hover:underline">Featured Artists</a></li>
      <li><a href="#" class="hover:underline">Upcoming Events</a></li>
      <li><a href="#" class="hover:underline">Contact</a></li>
    </ul>
  </nav>

  <footer class="bg-gray-800 text-white p-4">
    <p class="text-center">Sign up for our newsletter</p>
    <form class="flex justify-center space-x-2 mt-2">
      <input type="email" placeholder="Your email" class="px-2 py-1 rounded">
      <button type="submit" class="bg-white text-gray-800 px-2 py-1 rounded">Subscribe</button>
    </form>
    <p class="text-center mt-4">Follow us on social media</p>
    <div class="flex justify-center space-x-2 mt-2">
      <a href="#" class="hover:underline">Facebook</a>
      <a href="#" class="hover:underline">Twitter</a>
      <a href="#" class="hover:underline">Instagram</a>
    </div>
  </footer>
</template>

<script setup>
// No script needed for this simple template
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>