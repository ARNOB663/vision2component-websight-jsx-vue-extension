<template>
  <header class="flex justify-center items-center h-64 bg-black">
    <img src="https://static.photos/art/300x300/187.webp" alt="Art Gallery Logo" class="h-20">
  </header>

  <main class="flex flex-col items-center p-8 bg-black text-white">
    <h1 class="text-4xl mb-8">Welcome to our Art Gallery</h1>

    <div class="w-full max-w-2xl mb-8">
      <img src="https://static.photos/art/900x600/188.webp" alt="Featured Artwork" class="w-full">
    </div>

    <p class="text-center mb-8">
      At our Art Gallery, we specialize in the finest works of art from around the world. Our collection is diverse and ever-evolving, featuring a wide range of styles and periods, from the Renaissance to the present day. We pride ourselves on our commitment to curating a collection that is both culturally and historically rich.
    </p>

    <div class="w-full max-w-2xl mb-8">
      <form class="flex flex-col">
        <label for="email" class="mb-2">Sign up for our newsletter:</label>
        <input type="email" id="email" placeholder="Your email" class="mb-4 p-2 rounded bg-gray-800 text-white">
        <button type="submit" class="bg-white text-black p-2 rounded">Subscribe</button>
      </form>
    </div>
  </main>

  <footer class="flex justify-center items-center h-64 bg-black">
    <p class="text-center text-white">
      Stay updated on our upcoming events. Follow us on social media for the latest news and updates.
    </p>
  </footer>
</template>

<script setup>
// No script needed for this example
</script>